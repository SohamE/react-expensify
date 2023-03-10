import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});
const setCount = ({ count }) => ({
  type: "SET",
  count,
});
const resetCount = () => ({
  type: "RESET",
});

let store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "SET":
      return {
        count: action.count,
      };
    case "RESET":
      return {
        count: 0,
      };
  }
  return state;
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 10 }));
store.dispatch(decrementCount({ decrementBy: 1 }));
store.dispatch(resetCount());
store.dispatch(setCount({ count: 240 }));

unsubscribe();