import "./App.css";
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Services from "./pages/Services";
import NoMatch from "./pages/NoMatch/NoMatch";
import ContactUs from "./pages/ContactUs";
import NavBar from "./components/navBar/NavBar";
import Carrier from "./pages/Carrier/Carrier";
import Blogs from "./pages/blogs/Blogs";
import TestNavbar from "./components/navBar/TestNavbar";

function App() {

  return (
    <div className="root-page">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/service" element={<Services />}/>
          <Route path="/contact" element={<ContactUs />}/>
          <Route path="/carrier" element ={<Carrier />}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="*" element={<NoMatch />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
