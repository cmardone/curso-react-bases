import { CounterAction } from '../actions/CounterAction.action';
import { CounterState } from '../interfaces/CounterState.interface';

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'increaseBy':
      return {
        ...state,
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      };
    case 'reset':
      return { counter: 0, previous: 0, changes: 0 };
    default:
      return state;
  }
};
