import { configureStore } from "@reduxjs/toolkit";
import { AppState } from "./AppState";
import { coinsSlice } from "./CoinsSlice";
import { selectedCoinsSlice } from "./SelectedCoinsSlice";
import { searchSlice } from "./SearchSlice";

const selectedCoinsStorageKey = "selectedCoins";

function loadSelectedCoins(): string[] {
    try {
        const stored = localStorage.getItem(selectedCoinsStorageKey);
        if (!stored) return [];
        const parsed = JSON.parse(stored) as string[];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

// Application store - the global object managing all:
export const store = configureStore<AppState>({
    reducer: {
        coins: coinsSlice.reducer, //connect AppState user to userSlice reducer:
        selectedCoins: selectedCoinsSlice.reducer,//connect AppState selectedCoins to selectedCoinsSlice reducer:
        searchText: searchSlice.reducer
    },
    preloadedState: {
        coins: [],
        selectedCoins: loadSelectedCoins(),
        searchText: ""
    }
});

let lastSelectedCoins = store.getState().selectedCoins;
store.subscribe(() => {
    const currentSelectedCoins = store.getState().selectedCoins;
    if (currentSelectedCoins === lastSelectedCoins) return;

    lastSelectedCoins = currentSelectedCoins;
    try {
        localStorage.setItem(
            selectedCoinsStorageKey,
            JSON.stringify(currentSelectedCoins)
        );
    } catch {
        // Ignore localStorage write errors.
    }
});
