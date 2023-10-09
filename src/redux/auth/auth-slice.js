import { logIn, logOut, refreshUser, register } from './auth-operations';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  // Кожен токен це унікальний зашифрований рядок, який містить три блоки: заголовок (header), набір полів (payload) та сигнатуру.
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  isLoading: false,
};

const pendingReducer = state => {
  state.isLoading = true;
  state.error = null;
};
const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, pendingReducer)
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, rejectedReducer)

      .addCase(logIn.pending, pendingReducer)
      .addCase(logIn.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, rejectedReducer)

      .addCase(logOut.pending, pendingReducer)
      .addCase(logOut.fulfilled, state => {
        state.user = { email: null, password: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, rejectedReducer)

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
