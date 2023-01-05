import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export const useCounter = ({ maxCount = 10 }) => {
  const [counter, setCounter] = useState(5);
  const elementToAnimate = useRef<HTMLHeadingElement>(null);
  const timeline = useRef(gsap.timeline());

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;
    timeline.current
      .to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
      .pause();
  }, []);
  useEffect(() => {
    if (counter < maxCount) return;
    console.log('%cMax value reached', 'color: red; background-color: black;');
    timeline.current.play(0);
  }, [counter, maxCount]);

  const addClickHandle = () => {
    setCounter((count) => Math.min(count + 1, maxCount));
  };
  return {
    counter,
    elementToAnimate,
    addClickHandle,
  };
};
