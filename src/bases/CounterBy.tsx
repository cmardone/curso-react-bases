import { useState } from 'react';

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 0 }: Props) => {
  const [{ counter, clicks }, setCounterState] = useState<CounterState>({ counter: initialValue, clicks: 0 });

  const addClickHandle = (increment: number) =>
    setCounterState(({ counter, clicks }) => ({
      counter: counter + increment,
      clicks: clicks + 1,
    }));

  return (
    <>
      <h1>
        Counter By: {counter} / Clicks {clicks}
      </h1>
      <button type='button' onClick={() => addClickHandle(1)}>
        +1
      </button>
      <button type='button' onClick={() => addClickHandle(5)}>
        +5
      </button>
    </>
  );
};
