import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom"
import Login from './pages/Login';
import Loading from './pages/Loading';
import Home__ from './pages/Home__';

function App() {
  return (
    <Routes>
    <Route path="/login" element={ <Login/> } />
    <Route path="/Home" element={ <Home/> } />
    <Route path="/loading" element={ <Loading/> } />
    <Route path="/home__" element={ <Home__/> } />



  
   
  </Routes>
  );
}

export default App;
