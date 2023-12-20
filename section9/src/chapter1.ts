/* 분산적인 조건부 타입  Distributive Conditional Types 
조건부 타입을 유니온과 함께 사용할 때 조건부 타입이 분산적으로 동작하게 되는 문법*/

type StringNumberSwitch<T> = T extends number ? String : number;
// type StringNumberSwitch<T> = [T] extends [number] ? String : number;
// 분산방지하고싶다면 []를 작성해주면 된다

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
/* StringNumberSwitch<number> 과
StringNumberSwitch<string> 으로 이 유니온 타입의 모든 멤버 타입들이 분리됨
그러면 위의 결과는 string 아래는 number로 결과값이 나오는데 이 결과값이 유니온으로 묶임
-> 커서를 올려서 보는 것과 같이 결과값이 string | number 가 됨
*/

let d: StringNumberSwitch<boolean | number | string>;
/* 1단계 - 분리
StringNumberSwitch<boolean>
StringNumberSwitch<number> 
StringNumberSwitch<string>

2단계 - 결과값이 유니온으로 묶임
number
string
number

결과
number | string
*/

// 실용적인 예제1

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
/* 1단계
Exclude<number, string>
Exclude<string, string>
Exclude<boolean, string>

2단계
number
never
boolean

결과
number | never | boolean
number | boolean
*/

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
/* 1단계
Extract<number, string>
Extract<string, string>
Extract<boolean, string>

2단계
never
string
never

결과
string | string | string
string 
*/
