/* 사용자 정의 타입가드 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

/* 타입 좁히기를 해야 하는데 객체가 여러가지 유형으로 나뉠 때에는 서로소 유니온 타입을 이용하겠지만
이번에는 서로소 유니온 타입을 이용하지 못한다고 가정할 때( 라이브러리라던가 다른사람의코드) */

//이 객체가 강아지인지 아닌지 정도만 확인해주는 함수
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined; // return animal.isBark는 오류가 남 아직 타입좁히기가 제대로 안된 상태라
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  // if ("isbBark in animal") {
  //   // 강아지
  // } else if ("isScratch" in animal) {
  //   // 고양이
  // } 이 코드는 가독성이 좋지 않음 혹여라도 프로퍼티가 변경된다면 바로 오류 뜰 코드라서 함수 하나를 더 만들어준다(바로 위의 isDog)

  if (isDog(animal)) {
    // 강아지
    animal;
  } else if ("isScratch" in animal) {
    // 고양이
  }
}
