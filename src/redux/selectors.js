export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

// export const selectIsLoading = state => state.contacts.isLoading;
// export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectError = state => state.contacts.contacts.error;
