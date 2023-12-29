import { ReactElement, useContext, useState } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";

interface Props {}

export default function Editor(props: Props) {
  // const dispatch = useContext(TodoDispatchContext);
  // 이렇게 써줘도 가능하지만 dispatch마다 ?옵셔널체이닝 작성해주긴 번거로움

  // App.tsx에서 만들어 둔 custom hook 사용
  const dispatch = useTodoDispatch();

  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e를 any나 {target:{value:e.target.value }}라고 하는 건 위험
    setText(e.target.value);
  };

  const onClickButton = () => {
    // dispatch?.onClickAdd(text);  // dispatch마다 ? 어려움
    dispatch?.onClickAdd(text);

    setText("");
  };
  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
