import { useAuth } from "../store/auth"

export default function About(props) {
  const { user } = useAuth();
  const temp = user.username;


  return (
    <>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center" />
              </div>
            </div>

            <div class="md:pt-8">
              <p class="text-center font-bold text-indigo-500 md:text-left">Welcome {temp}</p>

              <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">About</h1>

              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                I’m a passionate MERN stack developer with a love for creating dynamic and efficient web applications. This very website is a testament to my journey of learning and growth as a developer.
                <br/>
                I built this platform using the MERN stack (MongoDB, Express.js, React, and Node.js), and it has been an incredible learning experience. Throughout the development process, I explored and deepened my knowledge in various aspects of the stack, including:
                <br/>
                <div className="px-5">
                <li><a className="font-semibold">Database Design and Management:</a> Working with MongoDB taught me the importance of efficient schema design and managing data effectively.</li>
                <li><a className="font-semibold">Backend Development:</a> Using Express.js and Node.js, I mastered how to create robust APIs and handle server-side logic seamlessly.</li>
                <li><a className="font-semibold">Frontend Development:</a> React allowed me to craft a user-friendly and dynamic interface, focusing on performance and responsiveness.</li>
                <li><a className="font-semibold">Integration:</a> Connecting all these components together helped me understand the nuances of building a full-stack application.</li>
                This project not only enhanced my technical skills but also gave me insights into problem-solving, debugging, and deploying a real-world application.
                </div>
                I’m excited to keep pushing my boundaries as a developer. Thank you for visiting my website – feel free to explore and reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}