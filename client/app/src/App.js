import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Notfound from "./Notfound" 
import { Link } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <nav>
          <div class="logo">PoL</div>
          <ul>
            <li><Link to="Notfound">Home</Link></li>
            <li><Link to="Notfound">User</Link></li>
            <li><Link to="Notfound">LandInspector</Link></li>
            <li><Link to="Notfound">SC_Owner</Link></li>
          </ul>
     </nav>
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="Notfound" element={ <Notfound/> } />
        <Route path="Notfound" element={ <Notfound/> } />
        <Route path="Notfound" element={ <Notfound/> } />
      </Routes>
    </div>
  );
}

export default App