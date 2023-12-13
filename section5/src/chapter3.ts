/**
 * 선언 합침 : 동일한 이름으로 정의한 인터페이스들은 합쳐진다.
 */
interface Person {
  name: string;
}

interface Person {
  age: number;
}

interface Developer extends Person {
  name: 'hello';
}

const person: Person = {
  name: '',
  age: 25,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}
// 여기서 보강이 일어남
interface Lib {
  c: string;
}
const lib: Lib = {
  a: 1,
  b: 2,
  c: 'hello',
};
