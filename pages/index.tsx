import Header from "../components/Header";
import {
  BodyWrapper,
  BodyWrapper2,
  Obj1,
  Obj2,
} from "../components/StyledComponents";
import useSWR from "swr";
import Greet from "../components/Greet";

export default function Home() {
  return (
    <>
      <Header />
      <Greet />
      <Obj1></Obj1>
      <Obj2></Obj2>
    </>
  );
}
