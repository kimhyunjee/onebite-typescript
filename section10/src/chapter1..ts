/* Partial<T> 
특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔줌 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  //  특정 객체 타입을 새로운 객체 타입으로 변환
  [key in keyof T]?: T[key];
  /* 타입 변수 T에 들어오는 객체 타입의 키들을 파셜타입이 갖게 됨
-> keyof : 특정 객체 타입으로부터 모든 키를 union타입으로 추출
=> T에 할당되는 타입이 post타입일 경우 keyof T : title | tag | thumbnailURL 
-> T[key] indexed access type 특정 객체나 배열로부터 특정 프로퍼티의 타입을 추출하는 타입
*/
};

const draft: Partial<Post> = {
  title: "나중에",
  content: "초안",
};

/* Required<T>>
특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입*/

const withThumbnailPost: Required<Post> = {
  title: "typescript",
  tags: ["ts"],
  content: "",
  thumbnailURL: "http://localhost", //주석처리하면 오류생김
};

/* Readonly<T>
읽기전용 - 수정불가
특정 객체 타입에서 모든 프로퍼티를 읽기전용 르포퍼티로 만들어주는 타입 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "readonly",
  tags: [],
  content: "",
};

// readonlyPost.content = ""
