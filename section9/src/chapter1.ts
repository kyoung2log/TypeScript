/**
 * 조건부 타입
 * 조건에 따라 타입을 결정하는 문법
 */

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

// 이렇게 쓰면안됨, 이럴 경우 함수의 리턴 타입은 string과 undefined의 유니온타입이 된다.
function removeSpaces<T>(text: T) {
  return typeof text === 'string' ? text.replaceAll(' ', '') : undefined;
}

let result = removeSpaces('hi im ham bur gur');
// 그래서 아래의 result2가 undefined로 추론되지 않고 string과 undefined의 유니온 타입으로 추론됨
let result2 = removeSpaces(undefined);

// : T extends string ? string : undefined

// 그런데 만약 이렇게 사용한다면 함수 내부에서는 조건부 타입의 결과를 알수 없다.
// 왜냐하면 타입스크립트는 런타임환경에서 타입을 검사하기 때문에 컴파일 환경에서는 T가 무슨값인지 알 수 없다.
// 즉 함수를 호출할 때 전달해주는 값의 타입에 따라 결과가 달라지기 때문
// 제네릭의 타입변수 T도 함수 내부에서는 unknown 타입이므로 사용할 수 없음
// 그래서 조건부에 사용되는 T의 타입을 알수 없기에 함수 내부에서 조건부 타입을 알 수 없다.
// 해결하기 위해서 any로 단언 가능 => 하지만 any를 사용하는 것은 좋지않음
// any를 사용하지 않고 해결하는 방법 => 오버로딩
// 가장먼저 오버로딩 시그니쳐를 생성
// 이렇게 되면 구현 시그니쳐 내부에서 조건부 타입의 결과를 추론할 수 있다.
function removeSpaces1<T>(text: T): T extends string ? string : undefined;
function removeSpaces1(text: any) {
  if (typeof text === 'string') return text.replaceAll(' ', '');
  return undefined;
}
