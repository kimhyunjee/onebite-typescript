/* 클래스 */

let studentA = {
  name: "student",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부");
  },
  introduce() {
    console.log("안녕하세요");
  },
};

// JS의 클래스 - 보통 파스칼로 씀
class Student {
  //필드
  name;
  grade;
  age;

  // 생성자 - 클래스를 호출하면 실제로 객체를 생성하는 역할을 하는 함수(메서드)
  constructor(name, grade, age) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  // 메서드
  study() {
    console.log("열심히 공부");
  }
  introduce() {
    console.log(`안녕하세요 ${this.name}입니다`); //this 현재 객체의 프로퍼티값
  }
}

// 클래스를 이용해서 만든 객체 : instance
// let studentB = new Student("student", "A+", 27);
// console.log(studentB); // Student { name: 'student', grade: 'A+', age: 27 }
// studentB.study(); // 열심히 공부
// studentB.introduce(); //안녕하세요

// 예제 2
class StudentDeveloper extends Student {
  //필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    //상속으로 필드,메서드는 지워도 되지만 매개변수는 지우면x
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }
  // 메서드

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("kim", "b+", 27, "typescript");
console.log(studentDeveloper);
studentDeveloper.programming();
