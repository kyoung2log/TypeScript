/**
 * 인터페이스
 * 타입에 이름을 지어주는 또 다른 문법
 * 객체의 구조를 정의하는데 특화된 문법으로 상속, 합침의 특수한 기능을 제공함
 */

// 헝가리안 표기법
// 가끔 인터페이스임을 의미하는 I를 붙일수 도 있다.
interface Person {
  readonly name: string; // 읽기 속성으로 만들 수 있다.
  age?: number; // 선택적 프로퍼티로 만들 수 있다.
  // sayHi: () => void; // 함수 표현식
  sayHi(): void; // 호출 시그니쳐
  sayHi(a: number, b: number): void; //함수 오버라이딩
}

type Type1 = number | Person;
type Type2 = number & Person;

const person: Person = {
  name: '햄버거',
  // age: 25,
  sayHi: function () {
    console.log('Hi');
  },
};
