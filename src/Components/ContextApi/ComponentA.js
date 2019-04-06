import React, { useState, useContext, createContext } from 'react';
// import ComponentC from '../Hooks/ComponentC';
// import CpB from '../ContextApi/ComponentB';

const CountCtx = createContext([0, () => {}])




function ComponentA() {
  const [count, setCount] = useState(0);

  return (
    <div className="cp1">
      <CountCtx.Provider value={[count, setCount]}>
          <ComponentB />
          <button onClick={() => setCount(count + 1)}>Add</button>
          <ComponentC />
      </CountCtx.Provider>
    </div>
  )
}

function ComponentB() {
  const [count, setCounter] = useContext(CountCtx);

  return (
    <div className="cp2">
      <div>Counter is {count}</div>
      <button onClick={() => setCounter(count + 1)}>Add</button>
    </div>
  )
}

function ComponentC() {
  const count = useContext(CountCtx);
  return (
    <div className="cp3">
      {count}
    </div>
  )
}

export default ComponentA;