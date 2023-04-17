import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';

export interface themeState {
    theme: string,
}

const initialState: themeState = {
    theme: 'dark'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<string>) {
            state.theme = action.payload;
        },
    }
})

export const selectTheme = (state: RootState) => state.themeReducer.theme;

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;