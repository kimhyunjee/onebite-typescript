// 함수의 타입 정의

/*함수를 설명하는 가장 좋은 방법
JS -어떤 매개변수를 받고 어떤 결과값을 반환하는지 말하는것 
TS - 어떤 [타입의] 매개변수를 받고 어떤 [타입의] 결과값을 반환하는지 말해주면됨
-*/
function func(a: number, b: number) {
  // 반환값의 타입은 자동추론가능하여 생략가능
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법

const add = (a: number, b: number) => a + b;

// 함수의 매개변수

function introduce(name = "hyun", tall?: number) {
  //선택적 매개변수 뒤에 필수매개변수가 오면 x
  console.log(`name:${name}`);
  if (typeof tall === "number") {
    console.log(`tall:${tall + 10}`);
  }
}

introduce("hyun", 160);
introduce("hyun");

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
