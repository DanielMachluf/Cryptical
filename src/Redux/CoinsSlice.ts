import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CoinModel } from "../Models/CoinModel";

function initCoins(_currentState: CoinModel[], action: PayloadAction<CoinModel[]>): CoinModel[] {
    const coinsToInit = action.payload; //get coins to init
    const newState = coinsToInit; //new state is the coins to init
    return newState;
}

export const coinsSlice = createSlice({
    name: "coins-slice", //uniqe name for this slice.
    initialState: [] as CoinModel[], //Initial data
    reducers: {initCoins} //Which function handling this slice.
})

export const coinsActions = coinsSlice.actions;