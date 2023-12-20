/* 조건부 타입 Conditional Types */

type A = number extends string ? string : number; // false -> number

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // true -> number

/* 제네릭과 조건부 타입 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // true -> string

let varB: StringNumberSwitch<string>; // false -> number

function removeSpaces<T>(text: T): T extends string ? string : undefined; // 함수 오버로딩
function removeSpaces<T>(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi imkim");
result.toUpperCase();

let result2 = removeSpaces(undefined);
