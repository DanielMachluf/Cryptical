// Represents the price data for a single coin
export type LiveCoinPrice = {
    USD: number;
};

// Represents the entire response from the live reports API
// Keys are dynamic coin symbols like BTC, ETH, DOGE
export type LiveReportModel = {
    [coinSymbol: string]: LiveCoinPrice;
};