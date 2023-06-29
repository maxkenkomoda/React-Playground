import React, { useState, useTransition } from "react";

export const UseTransition: React.FC = () => {
  const [state, setState] = useState("");
  const [isPending, startTransition] = useTransition();
  console.log(isPending)

  const getResultAfterDelay = (): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("result");
      }, 10000);
    });
  };

  const handleClick = () => {
    startTransition(() => {
      getResultAfterDelay().then((result) => {
        setState(result);
      });
    });
  };

  return (
    <>
      <button onClick={handleClick}>click</button>
      {isPending && <p>isPending...</p>}
      <p>{state}</p>
    </>
  );
};
