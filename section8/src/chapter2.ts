/*keyof 연산자 keyof Operator */
/* 객체 타입에 적용하는 연산자  */

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;
// keyof typeof person이라고 쓰면 person의 타입을 추론해서 타입 별칭에 정의해줌
// typeof 연산자 : 어떤 type을 정의할 때 사용하면 어떤 변수의 type을 뽑아내는 용도로도 사용가능

function getPropertyKey(person: Person, key: keyof typeof person) {
  // key: string 불가 -> 모든 문자열값이 person객체 key라고 보기 어렵다
  // 해결 keyof연산자 -> person객체 타입으로부터 모든 프로퍼티의 키를 union타입으로 추출
  // ※ keyof 연산자 뒤에는 타입만 올 수 있음
  // typeof 연산자오 함께 쓰기도 가능 / key: keyof Person 대신 위처럼 써주기 가능
  return person[key];
}

const person = {
  // typeof를 사용하여 : Person 지워줌
  name: "lee",
  age: 27,
};

getPropertyKey(person, "name"); //  lee
