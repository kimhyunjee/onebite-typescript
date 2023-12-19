/* 제네릭 타입 변수 응용사례  */

// 첫번째 사례 -> 타입 변수르 여러 개 선언하는 것도 가능

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2); // string으로 타입값으로 할당되어 뒤에 2가 넘버타입을 전달하는 것이 오류남-> U도 넣어주면 오류 해결

// 두 번째 사례

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
//0

let str = returnFirstValue([1, "hello", "mynameis"]);

// 세 번째 사례

function getLength<T extends { length: number }>(data: T) {
  //<T>만 해주면 밑에 return문이 오류뜸
  // number타입의 프로퍼티 length를 가지고 있는 객체를 확장하는 타입으로 T를 제한
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength("12345"); // 5

let var3 = getLength({ length: 10 }); // 10

//let var4 = getLength(10); // 오류가 안뜨는데 이런 값은 넘기지 못하도록 수정하려면? ->extends
