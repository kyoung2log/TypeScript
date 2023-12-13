// const add = (a: number, b: number): number => a + b;

/**
 * 함수 타입 표현식
 */
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;

/**
 * 호출 시그니처
 * (콜 시그니처)
 */

type Operation2 = {
  (a: number, b: number): number;
};

const add1: Operation = (a, b) => a + b;
const sub1: Operation = (a, b) => a - b;
const mul1: Operation = (a, b) => a * b;
const div1: Operation = (a, b) => a / b;
