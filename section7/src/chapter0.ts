/* 제네릭 
원하는대로 함수의 인수에 따라서 반환값의 타입을 가변적으로 정해줄 수 있음*/

// 제네릭 함수
function func<T>(value: T): T {
  // <T> 타입 변수
  return value;
}

let num = func(10);
// num.toUpperCase();

if (typeof num === "number") {
  num.toFixed();
}

let bool = func(true);

let str = func("string");

let arr = func<[number, number, number]>([1, 2, 3]);
