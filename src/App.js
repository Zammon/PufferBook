import React from "react";
import Navbar from "./component/Nav/Navbar";
import PageHome from "./component/Home/PageHome";
import PageReading from "./component/Reading/PageReading";
import PageProfile from "./component/Profile/PageProfile";
import PageTopUp from "./component/TopUp/PageTopup";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          {/* Set Home */} 
          <Route path="/" element={<PageHome />} />
          {/* Set Read */}
          <Route path="/read" element={<PageReading />}/>
          {/* Set Profile */}
          <Route path="/profile" element={<PageProfile />} />
          {/* Set Top-Up */}
          <Route path="/top-up" element={<PageTopUp />} />
        </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
