"use server";
import {ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts"
import { v4 as uuid } from "uuid"
import { ChatCohere } from "@langchain/cohere"
import { START, END, MessagesAnnotation, StateGraph, MemorySaver, Annotation } from "@langchain/langgraph"
import { HumanMessage, trimMessages, BaseMessage } from "@langchain/core/messages"
import { Message, Role} from "../model/index";



const trimmer = trimMessages({
    maxTokens: 10,
    strategy: 'last',
    tokenCounter: (msg) => msg.length,
    includeSystem: true,
    allowPartial: false,
    startOn: 'human'
})

const formatInstructions = `Respond only in valid JSON. The JSON object you return should match the following schema:
{{ people: [{{ name: "string", height_in_meters: "number" }}] }}

Where people is an array of objects, each with a name and height_in_meters field.
`;

const prompt = ChatPromptTemplate.fromMessages([
    [
        'system',
        "You are holiday advisor asistant. Answer all questions to the best of your ability {language}."
    ],
    new MessagesPlaceholder("messages")
]);

const GraphAnnotation = Annotation.Root({
    ...MessagesAnnotation.spec,
    language: Annotation<string>
})

const llm = new ChatCohere({
    apiKey: process.env.COHERE_API_KEY,
});

const structeredLLM = llm.withStructuredOutput(hotel, {
    includeRaw: true,
    name: 'hotel'
});

async function callModel(state: typeof GraphAnnotation.State) {    
    
    const chain = prompt.pipe(structeredLLM);
    const trimMessages = await trimmer.invoke(state.messages);
    const response = await chain.invoke({
        messages: trimMessages,
        language: state.language
    });

    return {
        messages: [response]
    }
}

const workflow = new StateGraph(GraphAnnotation)
    .addNode("model", callModel)
    .addEdge(START, "model")
    .addEdge("model", END);

const memory = new MemorySaver();
const app = workflow.compile({ checkpointer: memory});

const config = { configurable: { thread_id: uuid()} }

const history: Array<BaseMessage> = [];


export async function chatWithPrompt({content, language } : {  role: Role, content: string, language: string } ): Promise<Message> {
    const input = { messages: [...history, new HumanMessage(content)], language}

    const output = await app.invoke(input, config);

    const message = output.messages[output.messages.length-1];

    return {
        id: message.id ?? uuid(),
        role: 'assistant',
        content: message.content.toLocaleString()
    }
}