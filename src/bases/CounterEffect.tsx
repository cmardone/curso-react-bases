import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (counter < MAXIMUM_COUNT) return;
    console.log('%cMaximum value reached', 'color: red; background-color: black;');
    const timeline = gsap.timeline();
    timeline
      .to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' });
  }, [counter]);

  const addClickHandle = () => {
    setCounter((count) => Math.min(count + 1, MAXIMUM_COUNT));
  };

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button type='button' onClick={addClickHandle}>
        +1
      </button>
    </>
  );
};
