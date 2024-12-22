import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


function AdminMyBlog() {
  const { token, content ,API } = useAuth();

  const [blog, setBlog] = useState({
    img: "",
    header: "",
    text: "",
    link:"",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setBlog({
      ...blog,
      [name]: value,
    })
  }
  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/admin/myblog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(blog),
      })

      if (response.ok) {
        toast.success("Blog created");
        setBlog({
          img: "",
          header: "",
          text: "",
          link:"",
        })
      } else {
        toast.error("Blog not created");
      }

    } catch (error) {
      console.log("AdminMyBlog error");
    }
  }

  const del = async(id)=>{
    try {
      const response = await fetch(`${API}/api/admin/myblog/delete/${id}`,{
        method:"DELETE",
        headers:{
          "Authorization":`Bearer ${token}`,
        },
      });
      if (response.ok) {
        toast.success("blog deleted successfully")
      } else {
        toast.error("blog not deleted")
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div class="bg-white py-6 flex flex-col lg:flex-row  justify-start w-full sm:py-8 lg:py-12">

      <div class="lg:w-4/6 px-4 md:px-8">
        <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Blog Writer.</h2>

          <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
        </div>

        <form
          onSubmit={(e) => { submit(e) }}
          class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">


          <div class="sm:col-span-2">
            <label for="img" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">img*</label>
            <input
              name="img"
              value={blog.img}
              onChange={(e) => { handleInput(e) }}
              class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
          </div>

          <div class="sm:col-span-2">
            <label for="header" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">header*</label>
            <input
              name="header"
              value={blog.header}
              onChange={(e) => { handleInput(e) }}
              class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
          </div>

          <div class="sm:col-span-2">
            <label for="link" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">link*</label>
            <input
              name="link"
              value={blog.link}
              onChange={(e) => { handleInput(e) }}
              class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
          </div>

          <div class="sm:col-span-2">
            <label for="text" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">text*</label>
            <textarea
              name="text"
              value={blog.text}
              onChange={(e) => { handleInput(e) }}
              class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
          </div>

          <div class="flex items-center justify-between sm:col-span-2">
            <button class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Publish</button>

          </div>


        </form>
      </div>


      <div className="h-screen my-4 lg:my-0 lg:w-2/6 border-2 p-6 flex flex-col items-center overflow-y-scroll ">
        <h2 class="text-center text-xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Blogs</h2>
        {
          content.map(function (elem) {
            return (
              <div className="m-3 p-4 w-full flex justify-between items-center border-2 rounded-lg">
                <li>{elem.header}</li>
                <button 
                onClick={()=>del(elem._id)}
                className="border-2 px-2 py-1 rounded-lg bg-gray-300 hover:bg-gray-400 text-white">delete</button>
              </div>
            )
          })
        }


      </div>
    </div>
  );
}

export default AdminMyBlog;