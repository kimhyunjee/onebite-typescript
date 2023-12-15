/*object
object타입 주석을 사용하게되면 user.id등 점표기법으로 프로퍼티 접근 시 오류가 생긴다.
object타입주석은 객체라는 정보 외에는 정보가 없기 때문에
해결방법?
객체 리터럴과 같은 방식을 사용해 중괄호로 객체의 타입을 정의하는 방식을 사용 = 객체 리터럴 타입
=>구조를 기준으로 타입을 정의한다
=> TS의 이러한 특징을 구조적 Type System ㅇㅣ라고 부른다.
= 프로퍼티를 기준으로 타입을 결정하는 시스템
=> Property Based TS
* 이름을 기준으로 타입을 결정하는 건 명목적 타입 시스템 ex) C, JAVA
*/

let user: {
  id?: number; //선택적 프로퍼티 optional property
  name: string;
} = {
  id: 1,
  name: "hyun",
};

/*
// 실습
let dog: {
  name: string;
  color: string;
} = { name: "돌돌이", color: "brown" };

//새로운 유저 추가되는데 이름만 알고 id는 아직 모른다면?
user = {
  name: "홍길동",
};

*/

let config: {
  readonly apiKey: string; //값이 수정되면 안되는 프로퍼티
} = {
  apiKey: "My API Key",
};

// config.apiKey = "hacked";
