import { useCounter } from '../hooks/useCounter';

const MAXIMUM_COUNT = 10;

export const CounterHook = () => {
  const { counter, elementToAnimate, addClickHandle } = useCounter({ maxCount: MAXIMUM_COUNT });
  return (
    <>
      <h1>CounterHook:</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>
      <button type='button' onClick={addClickHandle}>
        +1
      </button>
    </>
  );
};
