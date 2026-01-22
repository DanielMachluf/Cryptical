class AppConfig {
    public readonly coinsApiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
    public readonly coinMoreInfoUrl = "https://api.coingecko.com/api/v3/coins/"
    public readonly realTimeReportUrl = "https://min-api.cryptocompare.com/data/pricemulti"
    public readonly chatGptApiUrl = "https://api.openai.com/v1/chat/completions"
    public readonly aiRecommendationApi = "https://api.coingecko.com/api/v3/coins/"
    public readonly chatGptApiKey = import.meta.env.VITE_CHATGPT_API_KEY;
}export const appConfig = new AppConfig();
