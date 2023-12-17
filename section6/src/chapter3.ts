/* 인터페이스와 클래스  */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string // private가 필요하면 이렇게 따로 정의필요 //주의 : interface로 정의하는 필드들은 무조건 public이라 동일하게 public으로 달아주어야 한다
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동 ! `);
  }
}
