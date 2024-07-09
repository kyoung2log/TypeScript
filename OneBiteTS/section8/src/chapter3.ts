/**
 * keyof 연산자
 * 객체타입의 프로퍼티들의 타입을 추출해줌
 * 무조건 타입에만 사용 가능하다
 * ex) keyof TYPE
 */

// typeof 를 사용해 변수의 타입을 추촌할 수 있다.
// type Person = typeof person;

// const person = {
//   name: '햄버거',
//   age: 25,
// };

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: '햄버거',
  age: 25,
};

getPropertyKey(person, 'name');
