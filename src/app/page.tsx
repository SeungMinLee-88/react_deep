'use client'
import { useState } from 'react';
import {useReducer} from 'react';

interface MyButtonProps {
  /** 버튼 안에 보여질 텍스트 */
  title: string;
  /** 버튼이 상호작용할 수 있는지 여부 */
  disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
  console.log("title : " + title);
  console.log("disabled : " + disabled);
  return (
    <button disabled={disabled}>{title}</button>
  );
}

interface State {
  count: number
};

type CounterAction =
 | { type: "reset" }
 | { type: "setCount"; value: State["count"] }

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction): State {
  console.log("state : " + state.count);
  console.log("action : " + action.type);
  
 switch (action.type) {
   case "reset":
     return initialState;
   case "setCount":
     return { ...state, count: action.value };
   default:
     throw new Error("Unknown action");
 }
}

export default function MyApp() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });
  const failtest = () => dispatch({ type: "failtest" });

  return (
    <div>
      <h1>Welcome to my counter</h1>

      <p>Count: {state.count}</p>
      <button onClick={addFive}>Add 5</button>
      <button onClick={reset}>Reset</button>
      <button onClick={failtest}>failtest</button>
    </div>
  );
}