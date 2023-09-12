
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import ServicePage from "./pages/ServicePage/ServicePage";
import NoMatch from "./pages/NoMatch/NoMatch";
import Action from "./pages/Action/Action";

function App() {
  return (
    <div>
       <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/service" element={<ServicePage />}/>
          <Route path="/action" element={<Action />}/>
          <Route path="*" element={<NoMatch />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
