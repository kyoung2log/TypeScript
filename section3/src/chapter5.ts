/**
 * 타입 추론
 */

// 타입스크립트는 변수의 초기값을 통해 타입을 추론한다.
// 타입스크립트가 타입을 리터럴 값이 아닌 좀 더 넓은 타입으로 추론해 주는 방식을 타입 넓히기라고 한다.
let a = 10;
let b = 'hello';
let c = {
  id: 1,
  name: '햄버거',
  profile: {
    nickname: '경이',
  },
  urls: ['url'],
};

let { id, name, profile } = c;

let [one, two, three] = [1, 'hello', true];

function func(message = 'hello') {
  return 'hello';
}

// 암묵적인 any 타입은 명시적인 any 타입과 달리 진화가 가능하다.
let d;
d = 30;
d.toFixed();

d = 'hello';
d.toUpperCase();

// const는 상수이기 때문에 10 리터럴 타입으로 추론된다.
const num = 10;
const str = 'hello';

let arr = [1, 'string'];
