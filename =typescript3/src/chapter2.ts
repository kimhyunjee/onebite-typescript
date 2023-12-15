// unknown 타입

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = " hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // 다운캐스팅은 불가
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

// never 타입

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }
  // never 타입은 모든 집합의 공집합이라 (서브) 모든 타입에 업캐스팅 가능
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운캐스팅은 불가능
  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
}

// void 타입
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined;
}

/* any 타입 : 치트키
모든 타입의 슈퍼타입으로 존재하기도하고, 모든 타입의 서브타입으로 존재하기도 한다.
* 단, never의 서브타입으로는 x
*/

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  //다운캐스팅 가능
  anyVar = unknownVar;
  undefinedVar = anyVar;

  // 그래도 never의 서브로는 안됨
  // neverVar = anyVar;
}
