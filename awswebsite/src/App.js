import React from "react";
import "./styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // react-router-dom uses for different route
import NavComponent from "./component/NavCompoenet";
import HomeComponent from "./component/HomeComponent";
import Resume from "./component/Resume";
import Footer from "./component/Footer";
import Contact from "./component/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavComponent />
        <div className="background"></div>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
