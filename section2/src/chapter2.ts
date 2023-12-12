// 배열

// 배열을 정의하는 방법 1
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['hello', 'im', 'kyoung'];

// 배열을 정의하는 방법 2 : 제네릭 문법
let boolArr: Array<boolean> = [true, false, true];

// 복합적인 요소를 가지고 있는 배열을 정의하는 방법 : 유니온
let multiArr: (string | number)[] = [1, 'hello'];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 : 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, '2', true];

const users: [string, number][] = [
  ['햄버거', 1],
  ['버거햄', 1],
  ['거햄버', 1],
];
