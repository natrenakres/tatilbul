"use server";

import { PromptTemplate } from "@langchain/core/prompts";
import { ChatCohere } from "@langchain/cohere";
import { StructuredOutputParser } from "@langchain/core/output_parsers";
import { z } from "zod";
import { ChatOutput, Message } from "../model";

const inputSchema = z.object({
    content: z
    .string()
    .min(10, "Please enter at least 10 characters.")
    .describe("User's free-form input text for vacation preferences."),
})


const outputSchema = z.object({
    name: z.string().describe("The Name of hotel"),
    description: z.string().describe("The detailed explanation of Hotel features."),
    address: z.string().describe("The postal address of Hotel"),
    link: z.string().describe("The URI of hotel website").optional(),
    image: z.string().describe("One image url from hotel facilities").optional(),
    star: z.number().describe("How many star hotel has"),
    latitude: z.string().describe("Latitude value of hotel"),
    longitude: z.string().describe("Longitude value of hotel")
})

const outputParser = StructuredOutputParser.fromZodSchema(outputSchema);

// Defination of Prompt Template
const formatInstructions = outputParser.getFormatInstructions();

const promptTemplate = new PromptTemplate({
    template : `
You are a travel assistant AI. Based on the following details, recommend a hotel and provide information in the specified format:

User input: "{content}"

{format_instructions}
    `,
    inputVariables: ["content"],
    partialVariables: { format_instructions: formatInstructions}
});

export async function mainChat({ content } : Message) : Promise<ChatOutput | undefined> {
    try {
        const validateInput = inputSchema.parse({content})
        const formattedPrompt = await promptTemplate.format({
            content: validateInput.content
        });

        console.log("Formatted Prompt:\n", formattedPrompt);

        const model = new ChatCohere({
            apiKey: process.env.COHERE_API_KEY
        });

        const response = await model.invoke(formattedPrompt);

        const parsedOutput = await outputParser.parse(response.content.toLocaleString());

        console.log("Parsed Hotel Information: ", parsedOutput);

        return parsedOutput;
    }
    catch (error: unknown) {
        console.error("Error:", error);
        return;
    }
}