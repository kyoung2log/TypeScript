// Object
// 물음표 붙은애는 값이 있어도, 없어도 상관없다
// 이런애들을 선택적  프로퍼티/옵셔널 프로퍼티라고 한다.
let user: { id?: number; name: string } = {
  id: 1,
  name: '햄버거',
};

// Object
// 구조적 타입 시스템 : 구조를 기준으로 타입을 정의한다.
let dog: { name: string; age: number; color: string } = {
  name: '햄버거',
  age: 25,
  color: 'brown',
};

// readonly 키워드를 사용하면 읽기 전용 프로퍼티를 생성할 수 있다.
let config: {
  readonly apiKey: string;
} = {
  apiKey: 'MY API KEY',
};
