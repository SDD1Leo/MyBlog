import { useState } from "react";
import { useAuth } from "../store/auth";

export default function Contact() {

  
  // console.log(user);
  
  const [message, setMessage] = useState({
    username:"",
    email:"",
    message:"",
  });
  const { user } = useAuth();

  const [userData, setUserData] = useState(true);

  if (userData && user) {
    setMessage({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }
  
    const formHandler = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      
      setMessage({
        ...message,
        [name]:value,
      })
    }

      const submit = (e)=>{
        e.preventDefault()
        console.log(message);
        setMessage({
          username:"",
          email:"",
          message:"",
        })
      }


    return (
      <>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Get in touch</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
    <form 
    onSubmit={(e)=>{submit(e)}}
    class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
      
      <div class="sm:col-span-2">
        <label for="username" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">username*</label>
        <input 
        name="username"
        value={message.username}
        onChange={(e)=>{formHandler(e)}}
        class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2">
        <label for="email" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email*</label>
        <input 
        name="email"
        value={message.email}
        onChange={(e)=>{formHandler(e)}} 
        class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2">
        <label for="message" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Message*</label>
        <textarea 
        name="message" 
        value={message.message}
        onChange={(e)=>{formHandler(e)}}
        class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
      </div>

      <div class="flex items-center justify-between sm:col-span-2">
        <button 
        class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>

        <span class="text-sm text-gray-500">*Required</span>
      </div>

      <p class="text-xs text-gray-400">By signing up to our newsletter you agree to our <a href="#" class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
    </form>
  </div>
</div>
      </>
    )
  }