export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoadingAuth = state => state.auth.isLoading;
export const selectErrorAuth = state => state.auth.error;