/* 템플릿 리터럴 타입 Template Literal Type */

type Color = "red" | "green" | "blue";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;

// const coloredAnimal: ColoredAnimal =''
// 커서를 올려보면 만들 수 있는 모든 프로퍼티의 연결이 되어있음
