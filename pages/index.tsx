import Header from "../components/Header";
import {
  BodyWrapper,
  BodyWrapper2,
  Obj1,
  Obj2,
} from "../components/GlobalStyle";
import useSWR from "swr";
import Greet from "../components/Greet";
import About from "../components/About";
import Skills from "../components/Skills/index.";

export default function Home() {
  return (
    <>
      <Header />
      <Greet />
      <Obj1></Obj1>
      <Obj2></Obj2>
      <About />
      <Skills />
    </>
  );
}
