/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
  name: string;
  age: number;
};

// value => number => toFixed
// value => string => toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  value;

  if (typeof value === 'number') {
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && 'age' in value) {
    console.log(`${value.name}은 ${value.age}살 입니다. `);
  }
}

/**
 * type quard를 사용해 조건문 내부에서 타입을 좁힐 수 있다.
 */

// instanceof : 어떤 클래스의 인스턴스일 때 사용
// in : 객체 내부에 특정 프로퍼티가 존재하는지 확인할 때 사용
