/* 프로미스 Promise */
/*  promise는 제네릭 클래스를 기반으로 타입이 선언되어 있기 때문에 타입변수로 비동기 처리의 결과값 타입을 정의해줄 수 있지만
 실패했을 때의 타입은 정해줄 수 x
 + 타입변수의 정의를 하지 않는다면 기본적으로 비동기작업 결과값은 unknown타입으로 추론된다.*/

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("~~실패");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10); //20 unknown으로 추론되기에 곱셈 불가/ 위에 Promise에 <number>해주면 가능
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/** 프로미스를 반환하는 함수의 타입을 정의 */

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  //가독성 측면에서 위에 써주는 게 좋을듯
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "title",
        content: "content",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
