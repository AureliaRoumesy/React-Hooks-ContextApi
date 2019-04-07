import React, { useContext } from 'react';
import { CountCtx } from './CountContext'; // import the context
import ComponentB from './ComponentB';

function ComponentA() {
  // Plug the context in 'cout' variable and in 'setCount'
  const count = useContext(CountCtx);

  return (
    <div className="cp2">
      <p><b>Component A</b></p>
      <p>Counter is {count}</p>
      <ComponentB/>
    </div>
  )
}

export default ComponentA;