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

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/about" element = {<About/>} />
          <Route path="/my-blog" element = {<MyBlog/>} />
          <Route path="/contact" element = {<Contact/>} />
          <Route path="/register" element = {<Register/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="*" element = {<Error/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}