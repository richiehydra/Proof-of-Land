import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Notfound from "./Notfound" 
import User from "./Components/User";
import Landinspector from "./Components/Landinspector";
import Manager from "./Components/Manager";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import { Link } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <nav>
          <div class="logo"><a paddingleft="2" href="/">Land Dekho</a></div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/inspector">LandInspector</Link></li>
            <li><Link to="/manager">Manager</Link></li>
            <li><Link to="/login">Register</Link></li>
          </ul>
     </nav>
     
      
     <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route path="/user" element={ <User/> } />
        <Route path="/inspector" element={ <Landinspector/> } />
        <Route path="/manager" element={ <Manager/> } />
        <Route path="/login" element={ <Login/> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App