/* 선언 합침 */

// 원래 타입별칭으로 만들면 중복선언 시 오류발생
// type Person = {
//   name: string;
// }

// type Person = {
//   name: string;
// }

// interface로 선언하면 오류뜨지 않음 -> 동일한 이름의 interface들은 합쳐지기 때문 : 선언합침
interface Person {
  name: string;
}

interface Person {
  //name: number; // 이렇게 동일명 인터페이스를 프로퍼티에 다른 타입 정의하면 오류뜸/충돌
  name: string;
  age: number;
}

interface Developer extends Person {
  //확장시엔 서브타입이기만 해도 괜찮음
  name: "hello";
}

//각각 프로퍼티가 합쳐진 것으로 확인됨
const person: Person = {
  name: "",
  age: 27,
};

/* 보통 모듈 보강 시에 사용됨 */

interface Lib {
  a: number;
  b: number;
}

//모듈 보강 -> 하지만 보통 라이브러리 코드의 경우 nodemodules파일에 있어서 가져와서 보강하거나 해야함
interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello", // 보통 라이브러리에는 이미 타입 정의가 끝나 임의대로 객체 추가가 불가하기에 interface를 재정의 후 추가하면 된다
};
