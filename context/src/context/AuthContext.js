import { createContext, useContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
        return {
            user : payload
        };
    case "LOGOUT":
        return {
            user: null
        }
    
    default:
      return state;
  }
};

export const UseAuthContext = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw Error("Contex is not define")
    }
    return context
}

export const AuthContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
        dispatch({type: "LOGIN", payload: user})
    }
  },[])

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
