/* Exclude<T,U>
T에서 U를 제거하는 타입 */

type Exclude<T, U> = T extends U ? never : T;
// 조건부 타입에 타입변수union타입을 전달하면 분산적인 조건부 타입
// 1.  Exclude<string, boolean>
// Exclude<boolean, boolean>
// 2. string이 boolean을 extends하지 않아서 그냥 T ( string)
// boolean이 boolean을 extends하는 건 참이라서 never
// 결과
// string | never
// = string

type A = Exclude<string | boolean, boolean>;
// string | boolean 에서 boolean 제외하면 -> string타입

/* Extract<T<U>
T에서 U를 추출하는 타입 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;

/* ReturnType<T>
함수의 반환값 타입을 추출하는 타입 */

type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;
// funcA의 타입 string이 ReturnA에 들어감
// function funcA()가 T로 들어감 / 매개변수는 없고 반환값 타입이 string인 함수 / () => string
// ()=> string / 이 타입이 서브타입이 되도록 하는 R타입 추론 -> string

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
// funcA의 타입 string타입이 ReturnA에 들어가게됨

type ReturnB = ReturnType<typeof funcB>;
