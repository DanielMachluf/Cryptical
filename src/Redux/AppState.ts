// Type declaring which data resides in the global state: 

import { CoinModel } from "../Models/CoinModel"

export type AppState = {
    // will add here the state slices:
    coins: CoinModel[]; 
    selectedCoins: string[];
    searchText: string;
}
