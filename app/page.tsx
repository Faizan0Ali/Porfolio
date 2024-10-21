"use client";
import { useState } from "react";
import Nav from "./components/Nav";
import MobileNav from "./components/MobileNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


export default function Home() {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* NavBar */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        {/* Hero Section */}
        <Hero/>
        <div className="relative z-[30]">
         <About/>
         {/* Services */}
         <Services/>
         {/* Skills */}
         <Skills/>
         <Projects/>
         <Contact/>
         <Footer/>
        </div>
      </div>
    </div>
  );
}
