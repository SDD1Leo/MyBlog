import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MyBlog from "./pages/MyBlog";
import Contact from "./pages/Contact";
import Register from "./pages/Resgister";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Logout from "./pages/Logout";
import Admin from "./pages/Admin";
import AdminUser from "./pages/AdminUser";
import AdminContact from "./pages/AdminContact";
import AdminMyBlog from "./pages/AdminMyBlog";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/about" element = {<About user="sdd"/>} />
          <Route path="/my-blog" element = {<MyBlog/>} />
          <Route path="/contact" element = {<Contact/>} />
          <Route path="/logout" element = {<Logout/>} />
          <Route path="/register" element = {<Register/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/admin" element = {<Admin/>}>
            <Route path="users" element = {<AdminUser/>} />
            <Route path="contacts" element = {<AdminContact/>} />
            <Route path="my-blogs" element = {<AdminMyBlog/>} />
          </Route>
          <Route path="*" element = {<Error/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}