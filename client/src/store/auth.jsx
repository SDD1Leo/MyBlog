import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [content, setContent] = useState([]);

    const storeTokenInLs = (servertoken)=>{
        setToken(servertoken);
        return localStorage.setItem("token",servertoken)
    }

    const logoutUser = ()=>{
        setToken("")
        setUser("")
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
                // console.log(user);
            } else {
                console.error("error fetching user data");
            }
        } catch (error) {
            console.log(`mesggage error ${error}`);
        }
    }


    const blogFetch = async() => {
        try {
            const response = await fetch("http://localhost:8008/api/blog",{
                method:"GET"
            })
            if (response.ok) {
                const data = await response.json();
                // console.log(data);
                setContent(data);
                // console.log(content);
                
            } else {
                console.error("error fetching blog data");
            }
            
        } catch (error) {
            console.log(`blog section error ${error}`);
        }
    }

    


    useEffect(() => {
        userAuth()
        blogFetch()
    }, []);

    return <AuthContext.Provider value={{ isLoggedIn ,storeTokenInLs , logoutUser , user , content, token}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext);
}