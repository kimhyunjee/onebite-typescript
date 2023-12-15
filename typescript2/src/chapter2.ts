// 배열타입 정의 방식 1
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "hyun"];

// 배열타입 정의 방식 2
// ts에서 <>안에 다른 타입을 집어넣는 것을 generic문법이라고 함
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

/* 튜플
길이와 타입이 고정된 배열
*/
let tup1: [number, number] = [1, 2];
//  let typ1 = [1,2,3] 길이가 달라 오류발생

let tup2: [number, string, boolean] = [1, "2", true];

tup1.push(1);
//오류 안뜸 : tsc로 js코드로 변환되면 결국 배열로 되기 때문에

//튜플은 언제 사용하나요?
const users: [string, number][] = [
  ["이정환", 1],
  ["kim", 2],
  ["lee", 3],
  ["park", 4],
  // [5, "choi"], 눈치없는 동료가 이렇게 추가해버림 / 튜플타입을 설정해두면 이런 식으로 하면 오류발생하게 되어 막을 수 있음
];
