import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleCarPage from "./components/SingleCar/SingleCarPage";
import { useState } from "react";

function App() {

  const [isHome, setIsHome] = useState(true)


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar isHome={isHome}/>
        <Routes>
          <Route path='/' element={<Home setIsHome={setIsHome}/>} />
          <Route path='/car/:id' element={<SingleCarPage setIsHome={setIsHome} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
