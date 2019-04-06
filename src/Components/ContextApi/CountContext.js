import React, { useState, createContext } from 'react';

export const CountCtx = createContext(0);

function CountContext() {
  const [count, setCount] = useState(0);

  return (
    <CountCtx.Provider value={count}>
    </CountCtx.Provider>
  )
}

export default CountContext;