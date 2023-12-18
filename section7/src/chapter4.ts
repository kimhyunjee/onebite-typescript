/* 제네릭 클래스 */

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print(); //[ 1, 2, 4 ]

const stringList = new List(["1", "2"]);
// 제네릭 클래스는 제네릭 인터페이스나 제네릭타입 변수와는 다르게 클래스의 생성자를 호출할 때
//이 생성자의 인수로 전달하는 값을 기준으로 타입변수의 타입을 추론한다. ["1","2"]
//그래서 new List에 <T>처럼 타입을 반드시 명시해야만 하는 것은 x
stringList.push("hello");
