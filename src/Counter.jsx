import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState();

  return (
    <div>
      <label htmlFor='count'>Valeur de départ du compteur: </label>{' '}
      <input
        type='text'
        name='count'
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={() => setCount(Number(count) + 1)}>+1</button>
      <button onClick={() => setCount(Number(count) - 1)}>-1</button>
      <p>Le compteur est à {count}</p>
    </div>
  );
}

export default Counter;
