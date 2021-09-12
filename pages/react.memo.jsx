import { memo, useState, useCallback } from 'react';

const ReactMemo = () => {
  const [count, setCount] = useState(0);
  /* 親で生成されたtext */
  const constText = 'const text';
  /* 親で生成された関数 */
  const clickHandler = () => {
    console.log('click!!');
  };
  /* 親で生成されたMemo化された関数 */
  const clickHandlerMemo = useCallback(() => {
    console.log('click!!');
  }, []);

  return (
    <div>
      <h1>React Memo</h1>
      {/* count up させてレンダリングさせる */}
      <button onClick={() => setCount(count + 1)}>count up</button>
      <br />
      {/* 以下の子コンポーネントはレンダリングされるか */}
      <NormalComponent name='1.normal' />
      <MemoComponent name='2.memo' />
      <MemoComponent name='3.memo prop: count' count={count} />
      <MemoComponent name='4.memo prop: constText' text={constText} />
      <MemoComponent
        name='5.memo prop: clickHandler()'
        handleClick={clickHandler}
      />
      <MemoComponent
        name='6.memo prop: clickHandlerMemo()'
        handleClick={clickHandlerMemo}
      />
    </div>
  );
};

/* 子コンポーネント */
const NormalComponent = (props) => {
  console.log(`render: ${props.name}`);
  return (
    <p>
      {props.name}
      {props?.count && props.count}
      {props?.text && props.text}
      {props?.handleClick && (
        <button onClick={props.handleClick}>click!!</button>
      )}
    </p>
  );
};
const MemoComponent = memo(NormalComponent);

export default ReactMemo;
