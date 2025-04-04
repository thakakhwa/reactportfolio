import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar"; 
import Home from "./pages/home";
import MySkills from "./pages/myskills";
import MyWork from "./pages/mywork";
import ContactMe from "./pages/contactme";
import Background from "./pages/background";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Background />
        <Navbar />
        <main style={{ 
          padding: "20px", 
          marginLeft: "100px", 
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<MySkills />} />
            <Route path="/work" element={<MyWork />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;