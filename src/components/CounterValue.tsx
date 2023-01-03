import React from 'react';
import { useCounterValue } from '../contexts/counterContext';

export default function CounterValue() {
  const value = useCounterValue();
  return <div>{value}</div>;
}
