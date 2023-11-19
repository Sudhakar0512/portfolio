import React, { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import FunScreen from "./components/fun/FunScreen";
import ParticleAnimation from "./components/Animation/ParticleAnimation";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const isDesktop = window.innerWidth > 1024; // Adjust the width based on your design

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      {isDesktop && (
        <>
          <FunScreen />
          <ParticleAnimation />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
