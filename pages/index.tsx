import Header from "../components/Header";
import {
  BodyWrapper,
  BodyWrapper2,
  Obj1,
  Obj2,
} from "../components/StyledComponents";
import useSWR from "swr";

let testValue = "testValue";
export function useTestSWR() {
  const { data, mutate } = useSWR<string>("testSWR", () => {
    return testValue;
  });

  return {
    data,
    mutate: (value: string) => {
      testValue = value;
      return mutate();
    },
  };
}

export default function Home() {
  return (
    <>
      <BodyWrapper>
        <Header />
        <Obj1></Obj1>
        <Obj2></Obj2>
      </BodyWrapper>
      <BodyWrapper2 name="aboutme" />
      <Home />
    </>
  );
}
