import { MINUS_COUNT, PLUS_COUNT } from '../actions/counter';

interface CounterState {
  count: number;
}

// Action Interface 정의
interface CounterAction {
  type: typeof PLUS_COUNT | typeof MINUS_COUNT;
}

export const INITIAL_STATE: CounterState = {
  count: 0
};

export const countReducer = (
  state = INITIAL_STATE,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case 'PLUS_COUNT':
      return {
        ...state,
        count: state.count + 1
      };
    case 'MINUS_COUNT':
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};
