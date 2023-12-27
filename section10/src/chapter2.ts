/* Pick<T, K>
객체 타입으로부터 특정 프로퍼티만 골라내는 타입  */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  /*extends keyof T가 없으면 오류뜸
  맵드타입의 in연산자 우측에는 키가 뭐가 있는지 표현하기 위해 스트링 리터럴로 만든 union타입들이 들어올 수 있는데
  제약이 없으면 함수도 객체타입도 네버타입도 다 들어올 수 있어서 오류뜸
  k extends 'title' | 'tags' | 'content' | 'thumbnails' 
  "title" | "content" extends 'title' | 'tags' | 'content' | 'thumbnails' -> 참
*/
  //T타입에는 Post등의 객체가 들어옴/ K타입에는 프로퍼티등를 나열한 union타입 들어옴
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

/* Omit<T, K>
객체 타입으로부터 특정 프로퍼티를 제거하는 타입 / Pick과 반대 
Omit<객체, 빼야할 프로퍼티>*/

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/* 해석
밑에 Omit<Post, "title">정의된 대로라면 T에는 Post타입이,K에는 title이 들어온다
-> 이대로 우측을 해석해보자면 Pick<Post, Exclude<keyof Post, "title">>
= Pick<Post, Exclude< 'title' | 'tags' | 'content' | 'thumbnailURL', 'title'>>
keyof Post -> Post의 모든 키 나열
EXclude<T,K> -> utility타입으로도 제공됨 / 두 개의 타입변수를 받고 T타입 변수에서 K타입 변수를 제거한 타입을 반환함
=> Pick<Post,  'tags' | 'content' | 'thumbnailURL' >
-> Post에서 뒤의 union타입에 해당하는 프로퍼티들만 골라옴
 */

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/* RecordMK, V>
  객체 타입을 새롭게 정의할 때 인덱스 시그니처처럼 유연하지만 조금 더 제한적인 객체 타입 정의할 때 사용
  실무에서 자주 사용됨

*/

// type ThumbnailLegacy = {
//   //중복되는 코드들
//   large: {
//     url: string;
//   };
//   medium: {
//     url: string;
//   };
//   small: {
//     url: string;
//   };
//   watch: {
//     url: string;
//   };
// };

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;
// Thumbnail에 커서를 올려보면 맨위의 ThumbnailLegacy와 같음
/*객체 타입을 만들어주는 유틸리티 타입
  첫번째 타입의 변수로는 객체의 프로퍼티 키를 union으로 받고 두 번째 타입 변수로는 이 키들의 value타입을 받음 */
