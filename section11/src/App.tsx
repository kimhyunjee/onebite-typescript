import { useEffect, useRef, useState } from "react";
import "./App.css";
import Editor from "./component/Editor";

interface Todo {
  id: number;
  content: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd} />
      {/* 처음에 오류가 뜨는데 Editor에서 props로 받을 타입 명시되어있지 않아서 */}
      {/* <div>child</div> */}
    </div>
  );
}

export default App;
