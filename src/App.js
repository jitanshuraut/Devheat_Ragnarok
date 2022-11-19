import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom"
import Login from './pages/Login';
import Loading from './pages/Loading';
import Home__ from './pages/Home__';
import Coin_detail from './pages/Coin_detail';
import Profile from './pages/Profile';
import Detail from './pages/Detail';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Routes>
    <Route path="/login" element={ <Login/> } />
    <Route path="/" element={ <Home/> } />
    <Route path="/loading" element={ <Loading/> } />
    <Route path="/home__" element={ <Home__/> } />
    <Route path="/coin_detail" element={ <Coin_detail/> } />
    <Route path="/prof" element={ <Profile/> } />
    <Route path="/extra" element={ <Detail/> } />
    <Route path="/wallet" element={ <Wallet/> } />



  
   
  </Routes>
  );
}

export default App;
