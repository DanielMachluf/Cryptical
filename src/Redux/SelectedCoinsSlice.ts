import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notify } from "../Utils/Notify";

// Init selected coins reducer:
// Used mainly when loading from localStorage.
function initSelectedCoins(
    _currentState: string[],
    action: PayloadAction<string[]>
): string[] {

    const coinsToInit = action.payload; // Get coins to init.
    const newState = coinsToInit; // New state is the given coins.
    return newState; // Return new state.
}

// Add coin reducer:
// Adds a coin only if limit (5) is not reached.
export function addSelectedCoin(
    currentState: string[],
    action: PayloadAction<string>
): string[] {

    const coinToAdd = action.payload; // Coin symbol to add.
    const newState = [...currentState]; // Duplicate current state.

    // Business rule: max 5 coins.
    if (newState.length < 5 && !newState.includes(coinToAdd)) {
        newState.push(coinToAdd); // Add coin.
    }

    //add a notify success :
    notify.success(`${coinToAdd} has been added successfully!`);


    return newState; // Return new state.
}

// Remove coin reducer:
export function removeSelectedCoin(
    currentState: string[],
    action: PayloadAction<string>
): string[] {

    const coinToRemove = action.payload; // Coin symbol to remove.
    const newState = [...currentState]; // Duplicate current state.

    const index = newState.findIndex(c => c === coinToRemove); // Find coin index.
    if (index >= 0) {
        newState.splice(index, 1); // Remove coin.
    }

    // Notify removal:
    notify.info(`${coinToRemove} has been removed.`);

    return newState; // Return new state.
}

// Selected coins slice:
export const selectedCoinsSlice = createSlice({
    name: "selected-coins-slice", // Unique slice name.
    initialState: [] as string[], // Holds coin symbols only.
    reducers: {
        initSelectedCoins,
        addSelectedCoin,
        removeSelectedCoin
    }
});

export const selectedCoinsActions = selectedCoinsSlice.actions;