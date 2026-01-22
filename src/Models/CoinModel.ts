	/*
  CoinModel represents a single cryptocurrency
  as used throughout the application.
  This model is based on CoinGecko API response,
  but includes ONLY the fields we actually need.
*/

export interface CoinModel {

    // Unique coin id (used for routes & API calls)
    id: string;

    // Coin symbol (e.g. btc, eth)
    symbol: string;

    // Full coin name (e.g. Bitcoin)
    name: string;

    // URL to coin image/icon
    image: string;

    // Current price in USD
    current_price: number;

    // Market capitalization in USD
    market_cap: number;

    // Rank by market cap
    market_cap_rank: number;

    // 24h trading volume in USD
    total_volume: number;

    // Price change percentage in last 24 hours
    price_change_percentage_24h: number;
}