import { useEffect } from "react";
import Cards from "../components/Cards";
import { useAuth } from "../store/auth";

export default function MyBlog() {

  const { content } = useAuth();

  console.log(content);
  
  return (
    <>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Blog</h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
          </div>



          <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
            {/* <Cards /> */}
            {
              content.map(function (elem) {
                return <Cards img={elem.img} h={elem.header} t={elem.text}  />
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}