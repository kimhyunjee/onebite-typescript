/*함수 오버로딩
하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 방법
JS에는 존재하지 않고 TS에만 존재함

하나의 함수 func
모든 매개변수의 타입은 number
ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
ver2. 매개변수가 3개 -> 이 매개변수들을 모두 더한 값을 출력

TS에서 오버로딩 구현 시에는 이 함수에 어떤 버전들이 있는지 먼저 알ㅇ려줘야 함
*/

/*버전들 명시해주기
{}을 사용하는 구현부 없이 바로 선언식 작성 : 오버로드 시그니처 */
function func(a: number): void;
function func(a: number, b: number, c: number): void;

//실제 구현부 : 구현 시그니처
//function func() {} // 여기까지 작성하면 위에 있던 오류가 사라짐
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

/* 매개변수가 없이 구현해서 1번 말고는 비정상적으로 보이는데 오히려 1,3번이 오류뜸
-> 오버로드 시그니처들을 만들어놨기 때문*/

// func()
func(1);
// func(1,2)
func(1, 2, 3);
