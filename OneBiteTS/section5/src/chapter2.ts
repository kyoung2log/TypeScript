/**
 * 인터페이스의 확장 (상속)
 */

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  // 서브타입에서 프로퍼티를 재정의 할 수 있지만
  // 원본 프로퍼티의 타입을 만족해야 한다.
  name: 'hello';
  isBark: boolean;
}

interface Cat extends Animal {
  name: 'hello';
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

const dog: Dog = {
  name: 'hello',
  age: 25,
  isBark: true,
};

/**
 * 다중 확장
 */
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: 'hello',
  age: 10,
  isBark: true,
  isScratch: true,
};
