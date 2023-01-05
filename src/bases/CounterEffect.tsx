import { useEffect, useState } from 'react';

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    if (counter < MAXIMUM_COUNT) return;
    console.log('%cMaximum value reached', 'color: red; background-color: black;');
  }, [counter]);

  const addClickHandle = () => {
    setCounter((count) => Math.min(count + 1, MAXIMUM_COUNT));
  };

  return (
    <>
      <h1>CounterEffect: {counter}</h1>
      <button type='button' onClick={addClickHandle}>
        +1
      </button>
    </>
  );
};
