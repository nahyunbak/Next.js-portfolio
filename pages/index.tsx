import Header from "../components/Header";
import {
  BodyWrapper,
  BodyWrapper2,
  Obj1,
  Obj2,
} from "../components/GlobalStyle";

import Greet from "../components/Greet";
import About from "../components/About";
import Skills from "../components/Skills";
import { ParallaxProvider } from "react-scroll-parallax";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <ParallaxProvider>
        <Header />
        <Greet />
        <Obj1></Obj1>
        <Obj2></Obj2>
        <About />
        <Skills />
        <Projects />
        <Footer />
      </ParallaxProvider>
    </>
  );
}
