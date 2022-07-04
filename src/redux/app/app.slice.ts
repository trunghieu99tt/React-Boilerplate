import { createSlice } from '@reduxjs/toolkit';

export interface IAppState {
  theme: 'dark' | 'light';
  language: 'en' | 'vi';
}

const appInitialState: IAppState = {
  theme: 'light',
  language: 'en',
};

export const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setTheme, setLanguage } = appSlice.actions;
export default appSlice.reducer;
