/* 대수 타입
여러개의 타입을 합성해서 새롭게 만들어낸 타입
합집합 타입과 교집합 타입이 존재
*/

// 1. 합집합 - Union 타입

let a: string | number | boolean; // string number union 타입 - 무한대로 추가가능
a = 1;
a = "hello";

// boolean 타입도 추가하고 싶다면? 위의 타입에 boolean도 넣어주기
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  Language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  Language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  Language: "",
};

//name 프로퍼티만 가진다면 dog와 person의 합집합이 아님
// let union4: Union1 = {
//   name: "",
// };

/* 2. 교집합 타입 - Intersection 타입
 */

let variable: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  Language: "",
};
