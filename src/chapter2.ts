/* 함수 타입의 호환성
특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 것
1. 반환값의 타입이 호환되는가
2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b=a; // 다운캐스팅이라 호환되지 않는다고 판단

// 기준2. 매개변수가 호환되는가

// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: number) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d; // 매개변수 타입을 기준으로 함수타입의 호환성을 판단할 때에는 업캐스팅은 불가,다운캐스팅 가능( 평소와 반대 )
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

//animalFunc = dogFunc; // 업캐스팅인데도 불가

// 위 줄이 가능하다는 것은 마치 아래 함수를 만드는 것과 같다
let testFunc = (animal: Animal) => {
  console.log(animal.name);
  //console.log(animal.color) // 이렇게 animal.color 라는 코드가 나와버릴 수 있음
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때
// 타입은 같아야함/

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
//func2 = func1;//  할당하려고 하는 쪽의 함수의 타입에 매개변수갯수가 더 적을 때에만 호환가능
