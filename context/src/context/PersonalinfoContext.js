import React, { createContext, useReducer } from "react";

// Initial State
const initialState = {
  selectedPerson: null, // Stores the clicked person's details
};

// Reducer Function
const personReducer = (state, action) => {
  switch (action.type) {
    case "SET_PERSON":
      return {
        ...state,
        selectedPerson: action.payload,
      };
    default:
      return state;
  }
};

// Create Context
export const PersonContext = createContext();

// Context Provider Component
export const PersonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(personReducer, initialState);

  return (
    <PersonContext.Provider value={{ state, dispatch }}>
      {children}
    </PersonContext.Provider>
  );
};
