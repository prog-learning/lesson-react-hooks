import { useReducer, useState } from 'react';

const UseReducer = () => {
  console.log('useReducer page rendering!!');
  const initialState = {
    name: '',
    email: '',
    message: '',
  };
  const formReducer = (state, action) => {
    /* dispatchの実行時にそのときのstateと引数がactionに入る */
    // console.log(state, action);
    switch (action.type) {
      case 'test_set':
        console.log(action.payload);
        return action.payload;
      case 'name':
        return { ...state, name: action.payload };
      case 'email':
        return { ...state, email: action.payload };
      case 'message':
        return { ...state, message: action.payload };
      case 'reset':
        return initialState;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(formReducer, initialState);

  /* 同様の機能をuseStateで */
  const [inputForm, setInputForm] = useState(initialState);
  console.log(inputForm);

  return (
    <div>
      <h2>useReducer</h2>
      <button
        onClick={() =>
          dispatch({
            type: 'test_set',
            payload: { name: 'nob', email: 'nob@nob.com', message: 'hello.' },
          })
        }
      >
        test set
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'reset',
          })
        }
      >
        reset
      </button>
      <p>name: {state.name}</p>
      <p>email: {state.email}</p>
      <p>message: {state.message}</p>
      <hr />
      <h3>useReducerを使った場合</h3>
      <label>name</label>
      <input
        type='text'
        value={state.name}
        onChange={(e) => dispatch({ type: 'name', payload: e.target.value })}
      />
      <br />
      <label>email</label>
      <input
        type='text'
        value={state.email}
        onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
      />
      <br />
      <label>message</label>
      <input
        type='text'
        value={state.message}
        onChange={(e) => dispatch({ type: 'message', payload: e.target.value })}
      />
      <hr />
      <h3>useStateを使った場合</h3>
      <p>name: {inputForm.name}</p>
      <p>email: {inputForm.email}</p>
      <p>message: {inputForm.message}</p>
      <hr />
      <label>name</label>
      <input
        type='text'
        value={inputForm.name}
        onChange={(e) => setInputForm({ ...inputForm, name: e.target.value })}
      />
      <br />
      <label>email</label>
      <input
        type='text'
        value={inputForm.email}
        onChange={(e) => setInputForm({ ...inputForm, email: e.target.value })}
      />
      <br />
      <label>message</label>
      <input
        type='text'
        value={inputForm.message}
        onChange={(e) =>
          setInputForm({ ...inputForm, message: e.target.value })
        }
      />
    </div>
  );
};

export default UseReducer;
