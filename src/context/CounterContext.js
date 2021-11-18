import { createContext, useState } from 'react';

export const CounterContext = createContext();

export default function CounterProvider({ children }) {
  const [counter, setCounter] = useState(777);
  return <CounterContext.Provider value={[counter, setCounter]}>{children}</CounterContext.Provider>;
}
