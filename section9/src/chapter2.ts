/* infer 추론
조건부 타입 내에서 특정 타입만 투론해올 수 있는 기능 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;
// extends 앞 T에는 밑에 선언한 변수에 따라 FuncA나 FuncB가 들어간다
// () => R 이 참이 되도록 R값이 설정됨 -> string의 서브타입이 되려면?

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

type C = ReturnType<number>;
// 조건식이 거짓이 될 때에는 never반환됨

//예제

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
/* 1. T는 프로미스 타입이어야 한다
2. 프로미스 타입의 결과값 타입을 반환해야 한다 */

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string
