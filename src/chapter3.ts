// 기본 타입간의 호환성

let num1: number = 10;
let num2: 10 = 10;

//number literal 타입의 값을 number타입 변수에 할당하는 건 가능 ( 업캐스팅 )
num1 = num2;
// number타입의 값을 number literal타입 변수에 할당하는 건 불가능
// num2= num1;

/*객체 타입간의 호환성
=> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은지 판단*/

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;

// 불가 ( 다운캐스팅 )
// dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

// book이라는 Book타입의 변수에 programmingBook이라는  ProgrammingBook타입 변수를 할당하는 건 가능
book = programmingBook;
// 불가
// programmingBook = book

// 프로퍼티를 기준으로 결정되는 객체 타입간의 호환성

/*초과 프로퍼티검사
변수를 초기화할 때 초기화하는 값으로 객체 리터럴을 사용하면 발동됨
객체 리터럴을 사용하면 밑에 skill같은 초과 프로퍼티를 작성하면 안되도록 막음
*/

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //skill: "reactjs", // skill안된다고함
};

let book3: Book = programmingBook;

function func(book: Book) {}

func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //skill: "reactjs", // 함수의 인수로 전달할 때도 불가
});

//이렇게 변수에 저장해뒀다가 인수로 변수를 전달해야 가능
func(programmingBook);
