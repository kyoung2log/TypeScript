/**
 * 제네릭 인터페이스
 */

// 타입 변수 = 타입 파라미터 = 제네릭 타입변수 = 제네릭 타입 파라미터
interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스를 타입으로 정의할 때
// 반드시 타입변수에 할당할 타입을 꺽쇠와 함께 사용한다.
let keyPair: KeyPair<string, number> = {
  key: 'key',
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ['1'],
};

/**
 * 인덱스 시그니쳐
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = { key: 123, key2: 456 };

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: 'value',
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: 'hello',
};

/**
 * 제네릭 인터페이스의 활용 예시 : 유저 관리 프로그램
 */

interface Student {
  type: 'student';
  school: string;
}

interface Developer {
  type: 'developer';
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: '햄버거',
  profile: {
    type: 'developer',
    skill: 'TS',
  },
};

const studentUser: User<Student> = {
  name: '헴버거',
  profile: {
    type: 'student',
    school: 'cbnu',
  },
};
