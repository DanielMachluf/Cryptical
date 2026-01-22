import { createSlice, PayloadAction } from "@reduxjs/toolkit";

function setSearchText(
    _currentState: string,
    action: PayloadAction<string>
): string {
    const text = action.payload;
    return text;
}

export const searchSlice = createSlice({
    name: "search-slice",
    initialState: "",
    reducers: { setSearchText }
});

export const searchActions = searchSlice.actions;
