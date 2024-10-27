import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Service from './components/Service';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-slate-500 h-screen text-white">
        <Navbar/>
        <Routes>
            <Route path = "/" element={<Home></Home>}></Route>
            <Route path = "/service" element={<Service></Service>}/>
        </Routes>
    </div>
  );
}

export default App;
