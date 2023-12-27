import { ReactElement, useState } from "react";

interface Props {
  onClickAdd: (text: string) => void;
  // children: ReactElement;
}

export default function Editor(props: Props) {
  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e를 any나 {target:{value:e.target.value }}라고 하는 건 위험
    setText(e.target.value);
  };

  const onClickButton = () => {
    props.onClickAdd(text);
    setText("");
  };
  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
