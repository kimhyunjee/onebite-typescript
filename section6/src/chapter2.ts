/* 접근 제어자 access modifier 
클래스를 만들 때 특정 필드나 메소드에 접근할 수 있는 범위를 설정하는 문법
public, private, protected 3가지*/

class Employee {
  //필드
  // private name: string;
  // protected age: number;
  // public position: string; //아무것도 안 쓴 것과 동일. 기본접근제어자

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string // 이렇게 생자의 매개변수 앞에도 접근제어자를 달아줄 수 있음 //주의 : 오류가 뜨는데 이때 보면 식별자의 중복이라고 뜸 // -> 생성자의 매개변수에 접근제어자를 달아주면 자동으로 필드를 만들기 때문에 위의 필드가 필요 없다 // + 필드의 값 초기화도 자동으로 되기 때문에 this~도 삭제해도 오류x
  ) {
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  //메서드
  work() {
    console.log(`${this.name} 일함`); //내부에서는 접근가능
  }
}

class ExecutiveOfficer extends Employee {
  //필드
  officeNumber: number;

  //생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    //this.name; //파생클래스에서도 접근이 불가
    this.age; // 파생클래스에서는 protected는 접근가능
  }
}

const employee = new Employee("employee", 27, "developer");
//변경 가능 -> 객체이기도 하고 각각의 필드에 접근제어자가 기본적으로 public설정이라서
//employee.name = ""; //접근 제어자를 private로 바꿔주면 오류뜸
//employee.age = 0; // protected를 쓰면 외부에서는 접근불가/private과동일
employee.position = "asdf";

console.log(employee);
//Employee { name: 'employee', age: 27, position: 'asdf' }
