import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const storeTokenInLs = (servertoken)=>{
        return localStorage.setItem("token",servertoken)
    }

    return <AuthContext.Provider value={{storeTokenInLs}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext);
}