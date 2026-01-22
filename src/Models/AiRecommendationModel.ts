// Represents ONLY the data needed for AI recommendation prompt
export interface AiRecommendationModel {
    id: string; // Coin ID (e.g. bitcoin)
    
    name: string; // Coin name (e.g. Bitcoin)

    current_price_usd: number; // Current price in USD

    market_cap_usd: number; // Total market value in USD

    volume_24h_usd: number; // Trading volume in the last 24 hours

    price_change_percentage_30d_in_currency: number; // % change over last 30 days

    price_change_percentage_60d_in_currency: number; // % change over last 60 days

    price_change_percentage_200d_in_currency: number; // % change over last 200 days
}