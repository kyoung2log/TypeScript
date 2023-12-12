/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: 'yello',
};

let dog: Dog = {
  name: '햄버거',
  color: 'brown',
  breed: '진도',
};

// animal = dog;
// dog = animal;

/**
 * 초과 프로퍼티 검사
 * 어떤 변수를 객체 리터럴로 초기화 할 때,
 * 프로퍼티가 객체 타입에 정의된 프로퍼티인지 검사한다.
 */

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skills: string;
};

let book1: Book;
let programmingBook: ProgrammingBook = {
  name: '한입리액트',
  price: 33000,
  skills: 'react.js',
};

book1 = programmingBook;

let book2: Book = {
  name: '한입리액트',
  price: 33000,
  // skills: 'react.js',
};
