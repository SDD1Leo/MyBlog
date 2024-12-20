import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


export default function login() {
    const navigate = useNavigate()
    const {storeTokenInLs} = useAuth();

    const [user, setUser] = useState({
      email: '',
      password: ''
    });

    const handlinginput = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      setUser({
        ...user,
        [name]:value,
      })
    }

    const submit = async (e) => {
      e.preventDefault()
      // console.log(user);
      try {
        const response = await fetch("http://localhost:8008/api/auth/login",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify(user)
        });

        const response_data = await response.json();
        if(response.ok){
          toast.success("login succesful")
          // localStorage.setItem("token",response_data.token)
          storeTokenInLs(response_data.token)
          setUser({
            email: '',
            password: ''
          })
          navigate("/")
          setTimeout(function() {
            location.reload();
        }, 2500);
        }else{
          toast.error(response_data.message?response_data.message : "error response")
          console.log("invalid user");
        }
        
      } catch (error) {
        console.log("login error",error);
      }
    }
  
    return (
      <>
      <form 
      onSubmit={(e)=>{submit(e)}} 
      class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center lg:my-11">
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
      <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
    </div>
    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>
      <div class="relative mb-4">
        <input 
        type="email" 
        id="email" 
        name="email"
        value={user.email}
        onChange={(e) => {handlinginput(e)}}  
        placeholder="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <input 
        type="password" 
        id="password" 
        name="password"
        value={user.password}
        onChange={(e) => {handlinginput(e)}} 
        placeholder="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button 
      type="submit"
      class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Log-In</button>
      <p class="text-s text-gray-500 mt-3">New to Vite? <NavLink to="/register" className="underline text-blue-800 hover:text-blue-950">Sign Up</NavLink> </p>
    </div>
  </div>
</form>
      </>
    )
  }