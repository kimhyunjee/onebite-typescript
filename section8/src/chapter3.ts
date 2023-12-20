/* 맵드 타입  Mapped Type 
  : 기존의 객체 타입을 기반으로 새로운 객체 타입을 만드는 문법
*/

interface User {
  id: number;
  name: string;
  age: number;
}

//맵드 타입은 interface에서는 사용할 수 없어 타입별칭으로 진행
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

// 맵드 예시2
type BooleanUser = {
  [key in "id" | "name" | "age"]: boolean;
};
// 프로퍼티의 갯수가 많아져서 일일이 쓰기 힘들다? -> keyof 연산자 사용
// [p in keyof User] : boolean; // 18번째 줄과 동일

// fetchUser()함수가 반환하는 유저타입의 모든 프로퍼티가 readonly로 바뀐 객체를 반환해야한다면?
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 유저정보가 서버에 저장되어있다고 가정
// 한명의 유저 정보를 불러오는 기능

function fetchUser(): User {
  // ....기능이 있다고 치고
  return {
    id: 1,
    name: "lee",
    age: 27,
  };
}

// const user = fetchUser();
// user.id = 1; // readonly로 변경되어 변경 불가능

// 한명의 유저정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정하는 기능이 있다고 치고
}

updateUser({
  // id: 1, //age의 값만 바꿀건데 id와 name까지 중복으로 보내야하는 건 아닌 것 같음
  // name: "lee", // PartialUser라는 프로퍼티를 모두 ?를사용하여 선택적 값만 넣게 해도 User와 완전 중복이 됨 / 맵드 타입 사용 필요
  age: 25,
});
