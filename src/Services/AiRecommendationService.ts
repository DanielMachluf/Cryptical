import { coinService } from "./CoinService";
import { gptService } from "./GptService";
import { Prompt } from "../Models/PromptModel";
import { AiRecommendationModel } from "../Models/AiRecommendationModel";



class AiRecommendationService {

    // Get AI recommendation for a specific coin
    public async getAiRecommendation(coinId: string): Promise<string> {

        // 1. Get structured data for AI
        const coinData: AiRecommendationModel =
            await coinService.getAiRecommendationData(coinId);
        // 2. Build prompt
        const prompt = new Prompt();

        prompt.systemContent =
            "You are a professional and cautious cryptocurrency analyst.";

        prompt.userContent = `
Analyze the following cryptocurrency data and decide whether it is a good investment.

Coin name: ${coinData.name}
Current price (USD): ${coinData.current_price_usd}
Market cap (USD): ${coinData.market_cap_usd}
24h trading volume (USD): ${coinData.volume_24h_usd}
30 days price change (%): ${coinData.price_change_percentage_30d_in_currency}
60 days price change (%): ${coinData.price_change_percentage_60d_in_currency}
200 days price change (%): ${coinData.price_change_percentage_200d_in_currency}

Answer STRICTLY in this format:
Decision: Buy / Not Buy and make a few spaces
Explanation: 2–3 short sentences.
`;

        // 3. Send prompt to ChatGPT and return response
        return await gptService.gptCompletion(prompt);
    }
}

export const aiRecommendationService = new AiRecommendationService();