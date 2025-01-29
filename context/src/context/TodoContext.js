import { createContext, useContext, useReducer } from "react";

export const TodoContext = createContext();

const todoReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "NEW_TODO":
        return {
            ...state,
            todos: [ payload, ...state.todos],
        };

    case "delete":
        return {
            ...state,
            todos: state.todos.filter((todos, i) => i !== payload),
        };
    
    default:
      return state;
  }
};

export const UseContext = () => {
    const context = useContext(TodoContext)
    if(!context){
        throw Error("Contex is not define")
    }
    return context
}

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });


  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
