import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));

    const storeTokenInLs = (servertoken)=>{
        return localStorage.setItem("token",servertoken)
    }

    const logoutUser = ()=>{
        setToken("")
        return localStorage.removeItem("token")
    }

    let isLoggedIn = !!token;

    return <AuthContext.Provider value={{ isLoggedIn ,storeTokenInLs , logoutUser}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext);
}