import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';
import LeftNav from "./components/LeftNav/LeftNav";
import LeftSidebar from "./components/LeftNav/LeftNav";
import MobileSocials from "./MobileSocials";

const App = () => {
  return (
    <div className="bg-transparent relative z-10">


       <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      
      
      <div className="relative pt-20 snap-y snap-mandatory  scroll-smooth">

        <Navbar />
        <MobileSocials />
        <LeftNav />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;
