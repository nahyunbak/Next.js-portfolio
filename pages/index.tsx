import Header from "../components/Header";
import Greet from "../components/Greet";
import About from "../components/About";
import Skills from "../components/Skills";
import { ParallaxProvider } from "react-scroll-parallax";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Head from "next/head";
import { RecoilRoot, useRecoilValue } from "recoil";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { lanState } from "../recoilAtom/language";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const lanList = useRecoilValue(lanState);
  return (
    <>
      <Head>
        <title>{lanList.mainTitle}</title>
      </Head>

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
