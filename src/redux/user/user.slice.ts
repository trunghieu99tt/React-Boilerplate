import { IUser } from '@type/user.type';
import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './user.async-action';

export interface IUserState {
  user: IUser | null;
  users: IUser[];
  isLoading: boolean;
}

const userInitialState: IUserState = {
  user: null,
  users: [],
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload[0];
        state.users = action.payload;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
