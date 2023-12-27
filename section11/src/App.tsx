import { useEffect, useRef, useState } from "react";
import "./App.css";

interface Todo {
  id: number;
  content: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");
  /* 이렇게만 작성해도 text는 string으로 추론됨
  초기값으로 전달한 인수의 타입에 따라 state변수와 state변호 함수의 타입을 자동으로 추론
  이러한 특징을 갖는 함수는 제네릭 함수
  useState();로 빈칸으로 두게 되면 undefined타입으로 추론됨 
  그러면 undefined밖에 넣을 수가 없어서 TS에서는 마땅히 값을 넣을 게 없다면 useState<string>();으로라도 써야함 -> undefined | string 으로 추론됨 -> 그래서 useSTate("")가 베스트
  */
  const idRef = useRef(0);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e를 any나 {target:{value:e.target.value }}라고 하는 건 위험
    setText(e.target.value);
  };

  const onClickAdd = () => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
    setText("");
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickAdd}>추가</button>
    </div>
  );
}

export default App;
