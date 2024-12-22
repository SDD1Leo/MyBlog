import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export default function Register() {
    const navigate = useNavigate()
    const { storeTokenInLs,API } = useAuth()

    const [user, setUser] = useState({
      username : '',
      name : '',
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
        const response = await fetch(`${API}/api/auth/register`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body: JSON.stringify(user),
        });

        const response_data = await response.json();
        console.log(response_data);
        if (response.ok) {
          toast.success("signin succesful");

            storeTokenInLs(response_data.token);
          setUser({
            username : '',
            name : '',
            email: '',
            password: ''
          })
          navigate("/")
          setTimeout(function() {
            location.reload();
        }, 2500);
        }else{
          toast.error(response_data.extraDetails ? response_data.extraDetails : response_data.message);
        }

        
      } catch (error) {
        console.log("registration error :",error);
      }      
    }
  
    return (
      <>
      <form 
      onSubmit={(e)=>{submit(e)}} 
      class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-gray-900">Enter your credentials to access your account and explore the features of our platform.</h1>
      <p class="leading-relaxed mt-4">Explore a seamless experience where you can manage, track, and interact with all your data in one place.</p>
    </div>
    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <div class="relative mb-4">
        <input 
        type="text" 
        id="username" 
        name="username" 
        value={user.username}
        onChange={(e) => {handlinginput(e)}} 
        placeholder="User Name" required class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <input 
        type="text" 
        id="name" 
        name="name"
        value={user.name}
        onChange={(e) => {handlinginput(e)}}  
        placeholder="Name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
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
      class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button>
      <p class="text-s text-gray-500 mt-3">Already a user? <NavLink to="/login" className="underline text-blue-800 hover:text-blue-950">Sign In</NavLink> </p>
    </div>
  </div>
</form>
      </>
    )
  }