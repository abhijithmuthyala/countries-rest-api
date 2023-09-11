export function formReducer(state, action) {
  switch (action.type) {
    case formActions.searchQuery:
      return {
        ...state,
        searchQuery: action.searchQuery,
      };
    case formActions.filter:
      return {
        ...state,
        filter: action.filter,
      };
    case formActions.debouncedSearchQuery:
      return {
        ...state,
        debouncedSearchQuery: state.searchQuery,
      };
    default:
      return state;
  }
}

export const formActions = {
  searchQuery: "UPDATE_SEARCH_QUERY",
  filter: "UPDATE_FILTER",
  debouncedSearchQuery: "UPDATE_DEBOUNCED_SEARCH_QUERY",
};
