import React, { useReducer } from 'react';
import { CounterState } from './interfaces/CounterState.interface';
import { counterReducer } from './state/counterReducer';
import { doReset, doIncreaseBy } from './actions/CounterAction.action';

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducer = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const addClickHandle = (value: number) => dispatch(doIncreaseBy(value));
  const resetHandle = () => dispatch(doReset());

  return (
    <>
      <h1>CounterReducer: {counter}</h1>
      <span>
        Previous: {previous} / Changes {changes}
      </span>
      <br />
      <button type='button' onClick={() => addClickHandle(1)}>
        +1
      </button>
      <button type='button' onClick={() => addClickHandle(5)}>
        +5
      </button>
      <button type='button' onClick={() => addClickHandle(10)}>
        +10
      </button>
      <button type='button' onClick={resetHandle}>
        Reset
      </button>
    </>
  );
};
