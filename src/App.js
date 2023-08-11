import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router,Route,Routes,Switch} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
   
    <Routes><Route exact path="/" element={<Home/>}></Route></Routes>
     
    </div>
    </Router>
  );
}

export default App;
