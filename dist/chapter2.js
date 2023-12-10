// 배열타입 정의 방식 1
let numArr = [1, 2, 3];
let strArr = ["hello", "im", "hyun"];
// 배열타입 정의 방식 2
// ts에서 <>안에 다른 타입을 집어넣는 것을 generic문법이라고 함
let boolArr = [true, false, true];
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "hello"];
// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
/* 튜플
길이와 타입이 고정된 배열
*/
let tup1 = [1, 2];
//  let typ1 = [1,2,3] 길이가 달라 오류발생
let tup2 = [1, "2", true];
export {};
