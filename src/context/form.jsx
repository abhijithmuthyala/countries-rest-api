import { createContext, useReducer, useState } from "react";

const FormContext = createContext(null);

export function FormProvider({ children }) {
  const [formState, dispatchForm] = useReducer(formReducer, {
    searchQuery: "",
    filter: "",
  });

  return (
    <FormContext.Provider value={{ formState, dispatchForm }}>
      {children}
    </FormContext.Provider>
  );
}

function formReducer(state, action) {
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
    default:
      return state;
  }
}

export const formActions = {
  searchQuery: "UPDATE_SEARCH_QUERY",
  filter: "UPDATE_FILTER",
};

export default FormContext;
