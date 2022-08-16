import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import OurBooks from "./OurBooks";
import Authers from "./Authers";
import Blogs from "./Blogs";
import Booklist from "./Booklist";
import AuthersName from "./AuthersName";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        { <Route path="/" element={<Home />} /> }
        <Route path="/About" element={<About />} />
        <Route path="/OurBooks" element={<OurBooks />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Authers" element={<Authers />} />
        <Route path= "/Booklist" element={<Booklist/>}/>
        <Route path= "/authersName" element={<AuthersName/>}/>
      </Routes>
    
    </BrowserRouter>
  );
};

export default RouterComponent;
