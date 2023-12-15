/*any
특정 변수의 타입을 우리가 확실히 모를 때
*/

let anyVar: any = 10; // any로 설정 시 밑에 코드가 오류가 뜨지 x
// anyVar = "hello";

// anyVar = true;
// anyVar = {};
// anyVar = () => {};

// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar;

/*
오류가 뜨지 않아 ts-node src/chapter6.ts 를 돌려보면 오류가 뜸
타입 검사를 다 건너뛰는 JS같은 코드임. 하지만 TS의 이점을 모두 내팽개치고 오류가능성 높아지기 때문에 사용 권장x*/

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// any타입과 다르게 number 타입에 집어넣을 수는 없음(모든 타입에 집어넣기 불가능)
// num = unknownVar;

//toUpperCase()등의 메서드를 쓰는 것도 불가
// unknownVar.toUpperCase();

// 타입 정제 ( 타입 좁히기 ) 만 가능
if (typeof unknownVar === "number") {
  num = unknownVar;
}

/* 최종 정리
any 와 unknown 타입은 변수의 타입으로 지정 시 이 변수는 모든 타입의 값을 할당받을 수는 있으나,
any타입은 반대로도 가능한 반면 unknown타입은 반대로는 불가능하다
변수에 저장할 값의 타입이 확실하지 않을 때에는 any타입보다는 그래도 unknown이 낫다
*/
