/* 타입 좁히기
조건문 등을 이용해 넓은타입-> 좁은 타입으로 타입을 상황에 따라 좁히는 방법

*/

type Person = {
  name: string;
  age: number;
};

//value 가 number일 때 : toFixed적용
// value 가 string일 때 : toUpperCase 적용
// value 가 Date일 때 : getTime 적용
// value 가 Person 일 때 : age살입니다 적용
function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    // 여기서 typeof 는 타입 가드
    console.log(value.toFixed()); //커서로 보면 value의 타입이 number로 확인됨
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); //커서로 보면 value의 타입이 string으로 확인됨
  } else if (value instanceof Date) {
    // typeof가 좋은 건 아님. 유니온으로 null값도 들어온다고 쳤을 때 null값에 typeof를 해도 오브젝트를 반환하기 때문에 현재 이 조건문에 null값도 통과된다. 그래서 오류뜸
    //instanceof 는 왼쪽의 연산자가 오른쪽의 연산자이냐? 맞으면 true틀리면 false
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
  /*
  else if (value instanceof Person) {
  이건 오류뜸/ instaceof연산자는 오른쪽에 type이 들어오면 안됨
  왼쪽의 항이 오른쪽의 class의 instance인지 확인하는 연산자임
  }
  */

  // value;
  // value.toUpperCase(); //불가
  // value.toFixed(); //불가
}
