/* 인터페이스  
  : 객체 타입을 정의하는 데에 특화되어 있음
타입 별칭과 타입을 정의하는 문버정도만 다르고 기본적인 기능 동일함*/

interface Person {
  // interface 이름은 첫번째에 대문자I를 같이 넣는 관습도 있음 ( 하지만 논란도 있음)
  // 이렇게 붙이는 헝가리안 표기법을 JS에는 쓰지 않음 ( 보통 언더바나의 스네이크 문법이나 중간 첫글자를 대문자로 쓰는 카멜 표기법을 써서)
  readonly name: string;
  age?: number;
  // sayHi: () => void;  //함수 타입 표현식
  sayHi(): void; // 호출 시그니처로도 사용가능
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "lee",
  sayHi: function () {
    console.log("hi");
  },
  age: 27,
};

/* 함수 오버로딩을 sayHi()메서드에 구현하고 싶다면 호출 시그니처를 이용해야 한다
-> 함수 타입 표현식으로 쓰려고 하면 sayHi()식별자가 중복이라는 오류가 뜨게 됨 */
person.sayHi();
person.sayHi(1, 2);

/* 인터페이스는 객체 타입 정의에 특화되어있어 타입별칭과는 약간의 차이점 존재 */

/*타입별칭은 number와 string타입의 union타입을 만들 수도 있었고 intersection 타입도 만들 수 있었음
하지만 인터페이스에서는 불가능
그래서 타입별칭이나 타입주석에 활용해야함
*/

// type Type1 = number | string;
// type Type2 = number & string;
