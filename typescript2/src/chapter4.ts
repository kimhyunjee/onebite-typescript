//타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};
/*타입 별칭 사용 시 주의점
같은 스코프 내에서는 중복으로 변수명을 사용하게 되면 x
type User = {};

//함수 내부 스코프에서는 ㅇㅋ
function func() {
  type User = {};
}
*/

let user2: User = {
  id: 1,
  name: "hyun",
  nickname: "purin",
  birth: "950723",
  bio: "hi",
  location: "부천시",
};

/*인덱스 시그니처
key와 value의 규칙을 기준으로 객체의 type정의 문법
*주의점 : 객체 안에 모든 key  value 지워도 오류가 안 남
=>인덱스 시그니처 타입은 설정한 키밸류 규칙을 위반하지만 않으면 ㅇㅋ
*/

//예제1
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  unitedState: "us",
  unitedKingdom: "uk",
};

//예제2
type countryNumberCodes = {
  [key: string]: number;
  //korea: number; // korea 프로퍼티는 반드시 가지도록 규칙 설정
  // 또한 새로 추가한프로퍼티의 value타입이 반드시 인덱스 시그니처의 value타입과 일치하거나 호환되어야함
};

let countryNumberCodes: countryNumberCodes = {
  Korea: 410,
  unitedState: 840,
  unitedKingdom: 826,
};
