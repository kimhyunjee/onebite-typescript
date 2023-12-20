/* 인덱스드 엑세스 타입  Indexed Access Type  
다른 타입 내에 특정 프로퍼티의 타입을 추출하는 타입*/

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo(author: PostList[number]["author"]) {
  // [스트링 리터럴 타입] 인덱스를 이용해 특정 타입의 프로퍼티에 접근
  // 주의 : 인덱스에 들어가는 문자열은 값이 아니라 타입
  // 응용 : 객체 안의 id타입만 뽑고싶다면 똑같이 ["author"]["id"]뒤에 대괄호 열어 id를 넣어주면 된다
  console.log(`${author.name} - ${author.id}`);
}

const post: PostList[number] = {
  // PostList[0]e도 동일 여기서 0은 값이 아닌 타입
  title: "title",
  content: "content",
  author: {
    id: 1,
    name: "lee",
    age: 27,
  },
};

type Tup = [number, string, boolean];

type Typ0 = Tup[0];

type Typ1 = Tup[1];

type Typ2 = Tup[2];

//type Typ3 = Tup[3]; // 존재하지 않는 인덱스의 타입 추출 시에는 오류 발생

type TumNum = Tup[number];
//배열타입을 추출할 때처럼 인덱스에 넘버를 넣어도 가능/ 튜플타입 안의 모든 타입의 최적 공통 타입을 가져옴
//type TumNum = string | number | boolean
