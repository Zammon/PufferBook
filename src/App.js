import React from "react";
import './App.css';
import Navbar from "./component/Nav/Navbar";
import PageHome from "./component/Home/PageHome";
import PageReading from "./component/Reading/PageReading";
import PageProfile from "./component/Profile/PageProfile";
import PageTopUp from "./component/TopUp/PageTopup";
import Page404 from "./component/Error/Page404";

import { Routes, Route, Switch } from "react-router-dom";

/* NavLink = สามารถกำหนด */

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          {/* Set Home */} 
          <Route path="/" element={<PageHome />} />
          {/* Set Read */}
          <Route path="/read/:postID" element={<PageReading />} />
          {/* Set Profile */}
          <Route path="/profile" element={<PageProfile />} />
          {/* Set Top-Up */}
          <Route path="/top-up" element={<PageTopUp />} />
          {/* Set Error */}
          <Route path="*" element={<Page404 />} />
        </Routes>
    </>
  );
}

export default App;
