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
      <Navbar className="mb-1" /> {/* Отступ снизу для Navbar */}
      <Intro className="my-1" /> {/* Отступ сверху и снизу для Intro */}
      <Skills className="my-1" /> {/* Отступ сверху и снизу для Skills */}
      <Works className="my-1" /> {/* Отступ сверху и снизу для Works */}
      <Contact className="my-1" /> {/* Отступ сверху и снизу для Contact */}
      <Footer className="mt-1" /> {/* Отступ сверху для Footer */}
    </div>
  );
}

export default App;
