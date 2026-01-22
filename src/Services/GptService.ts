import OpenAI from "openai";
import { appConfig } from "../Utils/AppConfig";
import { Prompt } from "../Models/PromptModel";
import { ChatCompletionCreateParamsNonStreaming } from "openai/resources/index.mjs";

class GptService {
    private openai = new OpenAI({ apiKey: appConfig.chatGptApiKey, dangerouslyAllowBrowser: true }) //openAI configuration:
    public async gptCompletion(prompt: Prompt): Promise<string> {

        //data to send:
        const body: ChatCompletionCreateParamsNonStreaming = {
            model: "gpt-5.2",
            messages: [
                { role: "system", content: prompt.systemContent },
                { role: "user", content: prompt.userContent }
            ]
        };

        const response = this.openai.chat.completions.create(body);
        //return completion:
        const completion = (await response).choices[0].message.content ?? ""; // its an array because i can ask gpt to give couple of answers.
        return completion;
    }
}

export const gptService = new GptService();
