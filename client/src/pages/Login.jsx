import { useState } from "react"

export default function login() {

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

    const submit = (e) => {
      e.preventDefault()
      console.log(user);
      setUser({
        email: '',
        password: ''
      })
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
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
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
      <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
    </div>
  </div>
</form>
      </>
    )
  }