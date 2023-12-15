// void - 공허=> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

// let a: void;
// a = 1;
// a = "hello";
// a = {};
// a = undefined;
/*void 타입 지정 시 undefined만 담을 수 있음 - "strictNullChecks": false라면 null값을 담을 수 있기는 함 ( 켜져있으면 담기 불가 )
그런데 굳이 왜 만들었는가? 어디에서 필요한가?
만약 함수 타입을 undefined로 설정 시 진짜로 undefined를 반환해야함 ( 리턴문 사용 )
null도 마찬가지 
=> 리턴문을 사용하지 않는 함수의 반환값 타임에 void 사용*/

// never -불가능한 타입

// 무한루프 함수의 경우엔 무언가를 반환하지x 이런 거에 void등을 넣기보단 불가능을 뜻하는 never 타입 지정
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

// let a: never;
// a = 1;
// a = "hello";
// a = {};
// a = undefined;
/*never도 void와 동일하게 어떤 값도 담을 수x
void는 undefined를 담을 수 있지만 never는 불가능
"strictNullChecks": false이어도 null담을 수 없음
*/
