/**
 * 함수 타입 정의
 */

import { NONAME } from 'dns';

// 어떤 [타입]의 매개 변수를 받고, 어떤 [타입]의 결과값을 반환하는지
function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */
// 매개변수를 생략하고싶으면 ?를 사용해 선택적 매개변수를 사용한다.
// 반드시 필수 매개변수 뒤에 선택적 매개변수가 오도록 한다.
function introduce(name = '햄버거', tall?: number) {
  console.log(`name : ${name}`);
  console.log(`tall : ${tall}`);
}

introduce('햄버거', 155);

/**
 * rest 파라미터
 */
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
