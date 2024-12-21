import { NavLink, Outlet } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";


function Admin() {
    

    
    return (
        <>
            <div className="w-full h-screen flex flex-col lg:flex-row">
                <header class="w-1/6 h-1/2 mb-8 flex flex-col items-center justify-between   py-4 md:mb-12 md:py-8 xl:mb-16">
                    <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                        <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                        </svg>

                        Admin
                    </a>

                    <nav class=" gap-12 flex flex-row lg:flex-col">
                        <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
                            <NavLink to="/admin/my-blogs" className="flex items-center">
                            My-Blogs
                            </NavLink>
                            </a>
                        <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
                            <NavLink to="/admin/users" className="flex items-center"><FaCircleUser/>Users</NavLink>
                        </a>
                        <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
                        <NavLink to="/admin/contacts " className="flex items-center"><MdContacts/>Contacts</NavLink>
                        </a>
                    </nav>
                </header>

                <div class="w-5/6 h-full mb-8 flex flex-col items-center justify-between  p-4 md:mb-12 md:py-8 xl:mb-16">
                    <Outlet/>
                </div>
            </div>
        </>
    );
}

export default Admin;