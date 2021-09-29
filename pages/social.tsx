import { useEffect, useState } from "react";

export default function Social() {
  const [subscribers, setSubscribers] = useState(6000);
  useEffect(() => {
    const interval = setInterval(() => {
      setSubscribers((subs) => subs + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <h1>subscribers: {subscribers}</h1>;
}
