import { useState } from 'react';

export function useReducer<State, Action>(
    reducer: (state: State, action: Action) => State,
    initialState: State
) {
  const [state, setState] = useState(initialState);

  // ???
  let dispatch = (action: Action) => {
    setState(previousState => reducer(previousState, action))
  }

  return [state, dispatch];
}
