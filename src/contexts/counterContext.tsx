import { createContext, useContext, useMemo, useState } from 'react';

const CounterValueContext = createContext<number>(1557);
const CounterActionsContext = createContext<{
  increase(): void;
  decrease(): void;
}>({ increase: () => {}, decrease: () => {} });

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [counter, setCounter] = useState(1557);

  const actions = useMemo(
    () => ({
      increase() {
        setCounter((prev) => prev + 1);
      },
      decrease() {
        setCounter((prev) => prev - 1);
      },
    }),
    [],
  );

  const value = useMemo(() => [counter, actions], [counter, actions]) as [
    number,
    {
      increase(): void;
      decrease(): void;
    },
  ];

  return (
    <CounterActionsContext.Provider value={actions}>
      <CounterValueContext.Provider value={counter}>
        {children}
      </CounterValueContext.Provider>
    </CounterActionsContext.Provider>
  );
}

export function useCounterValue() {
  const value = useContext(CounterValueContext);
  if (value === undefined) {
    throw new Error('useCounterValue must be used within a CounterProvider');
  }
  return value;
}

export function useCounterActions() {
  const value = useContext(CounterActionsContext);
  if (value === undefined) {
    throw new Error('useCounterActions must be used within a CounterProvider');
  }
  return value;
}
