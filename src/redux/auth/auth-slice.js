import {
  logIn,
  logOut,
  refreshUser,
  register,
  verify,
} from './auth-operations';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null, avatarURL: null, subscription: null },
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
        // state.token = action.payload.token;
        // console.log(action.payload);
        // state.user = action.payload.user;
        // state.isLoggedIn = true;
        // state.isLoading = false;
      })
      // .addCase(register.fulfilled, (_, __) => {
      //   // state.user = action.payload.user;
      //   // state.token = action.payload.token;
      //   // state.isLoggedIn = true;
      // })
      .addCase(register.rejected, rejectedReducer)

      // .addCase(verify.fulfilled, (state, action) => {
      //   state.user = action.payload.user;
      //   state.token = action.payload.token;
      //   state.isLoggedIn = true;
      // })

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
