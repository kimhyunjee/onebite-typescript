// 인터페이스의 확장 ( 혹은 상속이라고도 함 )

interface Animal {
  // type Animal =  타입별칭이어도 확장가능
  name: string;
  color: string;
}

interface Dog extends Animal {
  // name: " hello"; // string literal로 정의할 수도 있음 -> 원본타입의 서브타입어야함
  isBark: boolean;
}

const dog: Dog = {
  name: "", // string literal로 정의되어서 오류뜸
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중 확장

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};

// TS의 interface는 객체 타입을 다룰 때 유용하게 사용 가능하여 타입 별칭보다 더 사용할 예정
