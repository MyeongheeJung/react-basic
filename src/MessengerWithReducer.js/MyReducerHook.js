import { useState } from "react";

// useReducer Hook으로 구현하기
// const [state, dispatch] = useReducer(MessengerReducer, initialState);

export default function useReducer(messengerReducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    setState((prevState) => messengerReducer(prevState, action));
  }

  return [state, dispatch];
}
