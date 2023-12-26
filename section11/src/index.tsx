import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);
//const root = ReactDOM.createRoot(document.getElementById("root")as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*JS -> TS 로 마이그레이션하는 방법
1. 타입선언 @types/~ 패키지 4개 설치
2. tsconfig.json 만들기
3. 모든 JS -> JSX
4. 개별 하나씩 TSX */
