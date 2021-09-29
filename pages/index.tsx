import Header from "../components/header";
import { BodyWrapper, Obj1 } from "../components/StyledComponents";
import useSWR from "swr";

declare global {
  interface Window {
    count: any;
  }
}

function useCounter() {
  const { data, mutate } = useSWR("state", () => window.count);

  return {
    data,
    mutate: (count) => {
      window.count = count;
      return mutate();
    },
  };
}

export default function Home() {
  const { data, mutate } = useCounter();

  const handleInc = () => mutate(data + 1);
  const handleDec = () => mutate(data - 1);
  return (
    <BodyWrapper>
      <Header />
      <Obj1></Obj1>
    </BodyWrapper>
  );
}
