import "./App.css";
import "./index.css";
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";

const App =() =>{
  return(
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/experience" element={<Experience/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;