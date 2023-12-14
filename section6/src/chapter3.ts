/**
 * 접근 제어자 : access modifier
 * 클래스를 만들 때 특정 필드나 메서드에 접근할 수 있는 벙위를 정의하는것
 * : public private proteced
 */
class Employee {
  // 필드
  public name: string;
  private age: number;
  protected position: string;

  // 생성자
  // 생성자에 접근 제어자를 붙이면 필드의 정의는 삭제해야한다.
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${name}일함`);
  }
}

const employee = new Employee('햄버거', 25, 'developer');
