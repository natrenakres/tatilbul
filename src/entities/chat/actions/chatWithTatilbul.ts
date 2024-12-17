"use server";

import { v4 as uuid } from "uuid"
import { ChatCohere } from "@langchain/cohere"
import { START, END, MessagesAnnotation, StateGraph, MemorySaver } from "@langchain/langgraph"
import { Message, Role} from "../model/index";

const llm = new ChatCohere({
    apiKey: process.env.COHERE_API_KEY,
});

async function callModel(state: typeof MessagesAnnotation.State) {    
    const response = await llm.invoke(state.messages);

    return {
        messages: response
    }
}

const workflow = new StateGraph(MessagesAnnotation)
    .addNode("model", callModel)
    .addEdge(START, "model")
    .addEdge("model", END);

const memory = new MemorySaver();
const app = workflow.compile({ checkpointer: memory});

const config = { configurable: { thread_id: uuid()} }



export async function chatWithTatilbul(input: {  role: Role, content: string } ): Promise<Message> {
    const output = await app.invoke({ messages: input}, config);

    const message = output.messages[output.messages.length-1];

    return {
        id: message.id ?? uuid(),
        role: 'assistant',
        content: message.content.toLocaleString()
    }
}