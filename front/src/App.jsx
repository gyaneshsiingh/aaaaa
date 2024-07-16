import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from './components/Navbar';
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from './components/Footer';
import ScrollToTop from "./components/scrollTop";
const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path = "/" element= {<Home/>}/>
        <Route path = "/About" element= {<About/>}/>
        <Route path = "/Contact" element= {<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
   
    </div>
   
  )
}

export default App;