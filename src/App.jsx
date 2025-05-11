import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Help from "./Components/Pages/Help";


const App = () => {

  return (
    
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/help" element={<Help/>} />
      </Routes>
    </div>
  )
}

export default App

