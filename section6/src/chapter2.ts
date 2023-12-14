/**
 * 타입스크립트의 클래스
 * 타입스크립트의 클래스는 하나의 타입으로도 여겨진다.
 */

const employee = {
  name: '햄버거',
  age: 25,
  position: 'developer',
  work() {
    console.log('일함');
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log('일함');
  }
}

class ExecutiveOfficer extends Employee {
  // 필더
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employee1 = new Employee('햄버거', 25, '개발자');

const employee2: Employee = {
  name: '',
  age: 0,
  position: '',
  work() {},
};
