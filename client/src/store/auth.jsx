import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");

    const storeTokenInLs = (servertoken)=>{
        return localStorage.setItem("token",servertoken)
    }

    const logoutUser = ()=>{
        setToken("")
        return localStorage.removeItem("token")
    }

    let isLoggedIn = !!token;
    //tackle jwt authentication
    const userAuth = async() => {
        try {
            const response = await fetch("http://localhost:8008/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            if (response.ok) {
                const data = await response.json();
                setUser(data.userData)
                // console.log(data.userData);
            } else {
                console.error("error fetching user data");
            }
        } catch (error) {
            console.log(`mesggage error ${error}`);
        }
    }

    useEffect(() => {
        userAuth()
    }, []);

    return <AuthContext.Provider value={{ isLoggedIn ,storeTokenInLs , logoutUser , user}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext);
}