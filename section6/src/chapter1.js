/**
 * 클래스
 */

let studentA = {
  name: '햄버거',
  grade: 'A+',
  age: 25,
  study() {
    console.log('열심히 공부함');
  },
  introduce() {
    console.log('하이요');
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log('열심히 공부함');
  }
  introduce() {
    console.log(`하이요 ${this.name}`);
  }
}

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = this.favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

// 클래스로 만든 객체 => 인스턴스
let studentB = new Student('햄버거', 'a+', 25);
studentB.study();
