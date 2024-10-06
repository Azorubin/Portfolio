import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/Intro/intro";
import { Skills } from "./components/Skills/skills";
import { Works } from "./components/Works/works";
import { Contact } from "./components/Contact/contact";
import Footer from "./components/footer/footer";




function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
