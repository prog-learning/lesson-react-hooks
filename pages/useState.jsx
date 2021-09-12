import { useState } from 'react';

const UseState = () => {
  const [state, setState] = useState('initial');
  /* 
    state...状態を保存する変数の名前を指定
    setState...変数を変更する関数の名前を指定
    'initial'を初期値として指定
  */

  /* stateの'initial'を'changed!!'に変更する関数を作成 */
  const changeState = () => {
    setState('changed!!');
  };

  /* useStateの変数が変更される度にこのComponentは再レンダリングされる */
  console.log('useState page rendering!!');

  /* 実用例 */
  const [inputText, setInputText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>useState</h1>
      <h2>使い方</h2>
      <h3>stateを表示</h3>
      <p>{state}</p>
      <h3>stateを変更する関数をbuttonを押すことで実行</h3>
      <button onClick={changeState}>change</button>
      {/* 以下のように書いても良い */}
      {/* <button onClick={() => setState('changed!!')}>change</button> */}
      <h2>シンプルな実用例</h2>
      <input
        type='text'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <br />
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      {isOpen && <div className='box'>Open</div>}
      <br />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <style jsx>{`
        .box {
          background-color: #ccc;
          border: 1px solid #444;
          border-radius: 8px;
          width: min-content;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default UseState;
