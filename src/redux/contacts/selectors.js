import { createSelector } from 'reselect';

const getContactsState = state => state.contacts;

const getFilterState = state => state.filter;

export const getContacts = createSelector(
  [getContactsState],
  contactsState => contactsState.contacts
);

export const getIsLoading = createSelector(
  [getContactsState],
  contactsState => contactsState.isLoading
);

export const getError = createSelector(
  [getContactsState],
  contactsState => contactsState.error
);

export const getFilter = createSelector(
  [getFilterState],
  filterState => filterState
);
