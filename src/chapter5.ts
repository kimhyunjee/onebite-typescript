// 타입 추론

//이렇게 매개변수를 선언할 때에는 직접type을 정의해주지 않으면 추론 못함
// function func(param) {}

//변수의 초기값을 기준으로 추론함
let a = 10;
let b = "hello";
let c = {
  name: "hyun",
  id: 1,
  profile: {
    nickname: "purin",
  },
  urls: ["puringles.tistory.com"],
};

let { id, name, profile } = c;

//구조분해 할당도 잘 타입추론됨
let [one, two, three] = [1, "hello", true];

//함수의 반환값을 추론할 때는 초기화값이 아니라 return문 다음에 오는 반환값을 기준으로 추론한다.
function func(message = "hello") {
  return "hello";
}

/*초기값을 안 넣으면 커서 올려봤을 때 any로 추론됨.
그런데 다음에 d=10;으로 값을 주면 그 다음 줄에서 d는 number값으로 추론됨*/
let d;
d = 10;
d.toFixed();
// d. toUppercase() number값으로 추론돼서 toUppercase()는 사용불가

//다른 타입의 값을 할당하고나면 할당한 다음 라인에서는 또 타입이 바뀜
d = "hello";
d.toUpperCase(); //그래서 toUppercase() 사용가능
//d.toFixed(); //그래서 toFixed() 는 사용 불가해짐
//이러한 상황을 any의 진화 라고 부름
// 30번째 줄의 d가 암묵적any가 된 것

//const 를 사용할 때에는
const num = 10; // number literal type 으로 추론됨
const str = "hello"; // string literal type으로 추론됨

let arr = [1, "string"]; // union타입으로 자동추론

/* TS는 const같은 상수가 아니라면 let을 사용했을 때처럼 좀 더 범용적으로
타입 넓히기를 통해 타입을 추론한다*/
