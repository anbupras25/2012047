import logo from './logo.svg';
import './App.css';
import Home from './Home';
import viewdetails from './viewdetails';
import {BrowserRouter as Router,Route,Routes,Switch} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
   
    <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/view" element={<viewdetails/>}></Route>
    </Routes>
     
    </div>
    </Router>
  );
}

export default App;
