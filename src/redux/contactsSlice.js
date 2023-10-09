import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts, redactContatc } from './operations';
import { logOut } from './auth/auth-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const pendingReduser = state => {
  state.isLoading = true;
  state.error = null;
};
const rejectedReduser = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const fetchContactsFulfilledReduser = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};
const addContactFulfilledReduser = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items, action.payload];
};
const deleteContactFulfilledReduser = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(item => item.id !== action.payload.id);
};

// Функція createSlice() це надбудова над createAction() та createReducer(), яка стандартизує та ще більше спрощує оголошення слайсу. Вона приймає параметри налаштувань, створює і повертає типи екшенів, генератори екшенів та редюсер.
// Slice для поля 'contacts' з файлу store.js
const contactsSlice = createSlice({
  //назва поля в нашому стейті
  name: 'contacts',
  //початковий стан
  initialState,

  // Властивість extraReducers використовується щоб оголосити редюсери для «зовнішніх» типів екшенів, тобто тих, які не згенеровані з властивості reducers. Оскільки ці редюсери обробляють «зовнішні» екшени, для них не буде створено генератори екшенів в contactsSlice.actions, в цьому немає необхідності.
  // builder - об'єкт з методами. Метод addCase для обробки action
  // builder.addCase(actionCreatorOrType, reducer)
  // actionCreatorOrType - тип екшену який будемо опрацьовувати
  // reducer - редюсер, який буде обробляти цей екшен

  // функціональна форма
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, pendingReduser)
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReduser)
      .addCase(fetchContacts.rejected, rejectedReduser)
      .addCase(addContact.pending, pendingReduser)
      .addCase(addContact.fulfilled, addContactFulfilledReduser)
      .addCase(addContact.rejected, rejectedReduser)
      .addCase(deleteContact.pending, pendingReduser)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReduser)
      .addCase(deleteContact.rejected, rejectedReduser)
      .addCase(redactContatc.pending, pendingReduser)
      .addCase(redactContatc.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.items.unshift(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(redactContatc.rejected, rejectedReduser)
      .addCase(logOut, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      }),

  // об'єктна форма
  //   extraReducers: {
  //   //завантаження данних з бекенду
  //   [fetchContacts.pending]: handlPending,
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [fetchContacts.rejected]: handlRejected,
  //   // додавання контакту
  //   [addContact.pending]: handlPending,
  //   [addContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = [...state.items, action.payload];
  //   },
  //   [addContact.rejected]: handlRejected,
  //   // видалення контакту
  //   [deleteContact.pending]: handlPending,
  //   [deleteContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = state.items.filter(item => item.id !== action.payload.id);
  //   },
  //   [deleteContact.rejected]: handlRejected,
  // },
});

// console.log(contactsSlice.reducer);

export const contactsReducer = contactsSlice.reducer;
