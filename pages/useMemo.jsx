import { useMemo, useState } from 'react';

const UseMemo = () => {
  console.log('render page useMemo.');
  const [visible, setVisible] = useState(true);
  const [array, setCount] = useState([0, 1]);

  const increment = () => {
    const nextTerm = array[array.length - 1] + array[array.length - 2];
    console.log('nextTerm', nextTerm);
    setCount([...array, nextTerm]);
  };

  /* nextTermを再計算するかどうか */
  const memoizedIncrement = useMemo(() => increment, []);
  const memoizedIncrementRefVisible = useMemo(() => increment, [visible]);
  const memoizedIncrementRefArray = useMemo(() => increment, [array]);

  return (
    <div>
      <h1>useMemo</h1>
      <h2>フィボナッチ数列を考える</h2>
      <button onClick={() => setVisible(!visible)}>
        Array {visible ? 'hide' : 'show'}
      </button>
      <br />
      <button onClick={increment}>increment</button>
      <br />
      <button onClick={memoizedIncrement}>memoizedIncrement</button>
      <br />
      <button onClick={memoizedIncrementRefArray}>
        memoizedIncrementRefVisible
      </button>
      <br />
      <button onClick={memoizedIncrementRefVisible}>
        memoizedIncrementRefArray
      </button>
      <br />

      {visible &&
        array.map((number, index) => <span key={index}>{number}, </span>)}
    </div>
  );
};

export default UseMemo;
