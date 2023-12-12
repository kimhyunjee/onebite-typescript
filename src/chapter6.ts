//타입 단언 ( Type Assertion)

type Person = {
  name: string;
  age: number;
};

//빈 객체로만 변수의 값을 초기화 해놓고 나중에 프로퍼티 값들을 초기화시켜주고 싶을 수도?

let person = {} as Person;
person.name = "홍길동";
person.age = 5;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/*타입 단언의 규칙
값 as 단언 의 형태로 단언식을 작성한다. 
A as B
A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야한다.*/

// 10 as never가 가능한 이유 - never가 모든 타입의 서브 타입이라서
// num2도 마찬가지- unknown이 모든 타입의 슈퍼타입이라서 가능
let num1 = 10 as never;
let num2 = 10 as unknown;
//let num3 = 10 as string; //이건 불가 - 서로 겹치는 타입이 아님
let num3 = 10 as unknown as string; // 이건 또 가능
//다중단언으로 하면 불가능한 것도 가능하게 하긴 한데 좋은 방법x 권장x any같은 느낌

// const 단언 - 객체 타입과 함께 사용할 때 활용도가 좋음
let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // as const로 const단언을 하고 마우스 커서를 올려볼 시에는 모든 프로퍼티가 read-only가 된다 - 읽기전용 = 프로퍼티의 값을 수정할 수 x

// cat.name =''; //이렇게 수정 안됨

// Non Null 단언 : 어떤 값이 Non이나 Null이 아니라고 TS에게 알려주는 역할

type Post = {
  title: string;
  author?: string; //익명도 쓸 수 있어서
};

let post: Post = {
  title: "게시글1",
  author: "hyun",
};

//const len: number = post.author?.length; // 자동으로 옵셔널체이닝문법이 생겨서 ?가 붙는데 그럼 뒤에가 undefined가 될 수도 있게 되어 undefined는 number에 할당할 수 없다고 오류뜸
//해결방법 : Non Null 단언을 사용한다
const len: number = post.author!.length;

// 타입 단언은 그냥 TS에게 알려주는 역할 정도이지 업캐스팅과 다운캐스팅과는 다름
