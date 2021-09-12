import React, { useCallback, useState } from 'react';

/* React.memoとセットで使用する */
const UseCallback = () => {
  console.log(`render page useCallback.`);
  const [count, setCount] = useState(0);
  const [addNumber, setAddNumber] = useState(1);

  const toggleAddNumber = () => {
    setAddNumber(addNumber === 1 ? 100 : 1);
  };

  /* 再レンダリング時に再定義される */
  const increment = () => {
    console.log(`increment!!`);
    setCount(count + addNumber);
  };
  /* 再レンダリング時に再定義されない */
  const incrementCallback = useCallback(increment, []);
  /* addNumberに変更がない場合は再レンダリング時に再定義されない */
  const incrementCallbackRefAddNumber = useCallback(increment, [addNumber]);

  /* 再定義されないと関数内のcountの値が更新されていないので困る */

  /* 解決法 */
  const incrementPrev = () => {
    console.log(`increment previous!!`);
    setCount((prev) => prev + addNumber);
  };
  const incrementPrevCallback = useCallback(incrementPrev, []);
  const incrementPrevCallbackRefAddNumber = useCallback(incrementPrev, [
    addNumber,
  ]);

  /* 
    無意味な使用パターン
    - Component内で完結する関数に使用する
    - Memo化していないComponentへの渡す関数に使用する
  */

  return (
    <div>
      <h1>useCallback</h1>
      <p>count: {count}</p>
      <button onClick={increment}>+{addNumber}</button>
      <button onClick={toggleAddNumber}>toggle addNumber</button>
      <hr />
      <Button name='1.Button increment' onClick={increment} />
      <br />
      <Button
        name='2.Button useCallback(increment)'
        onClick={incrementCallback}
      />
      <br />
      <Button
        name='3.Button useCallback(increment, [addNumber])'
        onClick={incrementCallbackRefAddNumber}
      />
      <hr />
      <MemoButton name='4.MemoButton increment' onClick={increment} />
      <br />
      <MemoButton
        name='5.MemoButton useCallback(increment)'
        onClick={incrementCallback}
      />
      <br />
      <MemoButton
        name='6.MemoButton useCallback(increment, [addNumber])'
        onClick={incrementCallbackRefAddNumber}
      />
      <hr />
      <MemoButton name='7.MemoButton incrementPrev' onClick={incrementPrev} />
      <br />
      <MemoButton
        name='8.MemoButton useCallback(incrementPrev)'
        onClick={incrementPrevCallback}
      />
      <br />
      <MemoButton
        name='9.MemoButton useCallback(incrementPrev, [addNumber])'
        onClick={incrementPrevCallbackRefAddNumber}
      />
    </div>
  );
};

const Button = (props) => {
  console.log(`render button: ${props.name}`);
  return <button onClick={props.onClick}>{props.name}</button>;
};
const MemoButton = React.memo(Button);

export default UseCallback;
