import React from 'react';
import { useCounterActions } from '../contexts/counterContext';

export default function CounterButtons() {
  const actions = useCounterActions();

  return (
    <div>
      <button onClick={actions.decrease}> - </button>
      <button onClick={actions.increase}> + </button>
    </div>
  );
}
