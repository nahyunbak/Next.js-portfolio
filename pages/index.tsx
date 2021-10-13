import Header from "../components/Header";
import Greet from "../components/Greet";
import About from "../components/About";
import Skills from "../components/Skills";
import { ParallaxProvider } from "react-scroll-parallax";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

import { RecoilRoot } from "recoil";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <RecoilRoot>
        <ParallaxProvider>
          <Header />
          <Greet />
          <About />
          <Skills />
          <Projects />
          <Footer />
        </ParallaxProvider>
      </RecoilRoot>
    </>
  );
}
