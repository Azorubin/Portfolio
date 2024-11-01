import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/Intro/intro";
import { Skills } from "./components/Skills/skills";
import { Works } from "./components/Works/works";
import { Contact } from "./components/Contact/contact";
import Footer from "./components/footer/footer";
<<<<<<< HEAD
=======



>>>>>>> a3f109759cf48dc0d17f6cbba84e7eba50afaa56

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Navbar className="mb-1" /> {/* Отступ снизу для Navbar */}
      <Intro className="my-1" /> {/* Отступ сверху и снизу для Intro */}
      <Skills className="my-1" /> {/* Отступ сверху и снизу для Skills */}
      <Works className="my-1" /> {/* Отступ сверху и снизу для Works */}
      <Contact className="my-1" /> {/* Отступ сверху и снизу для Contact */}
      <Footer className="mt-1" /> {/* Отступ сверху для Footer */}
=======
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
>>>>>>> a3f109759cf48dc0d17f6cbba84e7eba50afaa56
    </div>
  );
}

export default App;
