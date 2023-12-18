/* 제네릭 인터페이스 */

import { Key } from "readline";

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  // 제네릭 인터페이스를 사용할 때에는 반드시 타입변수에 할당할 타입을 꺾쇠와 함께 사용해야한다
  // 타입 변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/* 인덱스 시그니처 
generic interface와  index signature를 함께 사용하면 유연한 타입을 정의할 수 있다*/

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 123123,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/* 제네릭 타입 별칭 */

type Map2<V> = {
  [key: string]: V;
};

let stringMAp2: Map2<string> = {
  key: "hello",
};

/* 제네릭 인터페이스의 활용 예시 
- 유저관리 프로그램
  유저구분: 학생 유저/ 개발자 유저
*/

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  // if (user.profile.type !== "student") {
  //   // 개발자 유저도 들어올 수 있어서 if문으로 걸러줌
  //   console.log("잘못 오셨습니다");
  //   return;
  // }
  // interface USer에 <T>를 붙이고 goToSchool(user:User)에도 타입을 <Student>를 붙여주면 타입좁히기 필요x
  //user.profile; //(property) User.profile: Student 로 학생만 들어온 거 확인

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "lee",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "kim",
  profile: {
    type: "student",
    school: "seoul",
  },
};
