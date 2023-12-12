/**
 * 타입 단언 : assertion
 * 값의 타입을 프로그래머가 단언하는 방법을 타입 단언이라고 한다.
 */
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;

person.name = '햄버거';
person.age = 25;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: '햄버거',
  color: 'brown',
  breed: '진도',
} as Dog;

/**
 * 타입 단언의 규칙
 * 단언식 : 값 as 단언
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */
let num1 = 10 as never;
let num2 = 10 as unknown;

// 다중 단언
let num3 = 10 as unknown as string;

/**
 * const 단언
 * let으로 선언한 변수나 객체를 const로 선언한 것처럼 단언해줌
 * 객체를 초기화 할 때, 모든 프로퍼티 앞에 readonly 속성을 붙여줄 필요 없이 readonly 속성의 객체 프로퍼티가 정의됨
 */
let num4 = 10 as const;

let cat = {
  name: '야옹이',
  color: 'yellow',
} as const;

/**
 * Non Null 단언 => !
 * 어떤 값이 null이거나 undefined가 아니라고 타입스크립트에게 알려줌
 */
type Post = {
  title: string;
  author?: string; // 익명일 경우 author 프로퍼티에 값이 없을 수 있으므로 옵셔널 프로퍼티로 정의
};

let post: Post = {
  title: '게시글1',
  author: '햄버거',
};

// post.author이라는 값은 무조건 있을테니 length를 달라!
const len: number = post.author!.length;
