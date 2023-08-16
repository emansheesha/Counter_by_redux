import { DECREMENT, INCREMENT, RESET } from "../types/types";
// 2
export const reducer = (state = { counter: 0 }, action) => {
  if (action.type === INCREMENT) return { counter: state.counter + 1 };
  if (action.type === DECREMENT) return { counter: state.counter - 1 };
  if (action.type === RESET) return { counter: 0 };
  return state;
};
