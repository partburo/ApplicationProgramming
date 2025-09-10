import { useState } from 'react';

export function useReducer<State, Action>(
    reducer: (state: State, action: Action) => State,
    initialState: State
) {
  const [state, setState] = useState(initialState);

  // ???

  return [state, dispatch];
}
