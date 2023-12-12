// 서로소 유니온 타입 : 교집합이 없는 타입들로만 만든 유니온 타입

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};
type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin : {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member : {name}님 현재까지 {point} 모았습니다.
// Guest : {name}님 현재까지 {visitCount}번 방문하셨습니다.

function login(user: User) {
  if (user.tag === "ADMIN") {
    // ("kickCount" in user ) admin타입 -> 직관적이지는 x
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`);
  } else if (user.tag === "MEMBER") {
    // member
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
  } else {
    //guest
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다`);
  }

  // switch (user.tag) {
  //   case "ADMIN": {
  //     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`);
  //     break;
  //   }
  //   case "MEMBER": {
  //     console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
  //     break;
  //   }
  //   case "GUEST": {
  //     console.log(
  //       `${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다`
  //     );
  //     break;
  //   }
  // }
}

// 예제2 - 비동기 작업의 결과를 처리하는 객체

// 옵셔널 체이닝이나 non null 단원 사용 시 안전한 코드가 아닐 때 어떻게 해야할까?
type LoadingTask = {
  state: "LOADING";
};
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};
//위처럼 분할해서 타입을 만들면 이렇게 안해도 됨
// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

//간편하게 서로소 union타입으로 만들 수 있으며 밑에 옵셔널 체이닝이 들어가지 않아도 에러나지x
type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 로딩중일 때 : 콘솔에 로딩중 출력
// 실패 시 : 실패 m 출력
// 성공 시 : 성공 m 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("loading...");
      break;
    }
    case "FAILED": {
      console.log(`error:${task.error.message}`);
      break;
    }

    case "SUCCESS": {
      console.log(`success :${task.response.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "Error ",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "data",
  },
};
