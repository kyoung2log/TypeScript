// 타입 별칭
// 타입을 변수처럼 사용해 중복을 제거한다.
// 같읕 스코프 내에서 동일한 타입 별칭을 선언할 수 없다.
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: '햄버거',
  nickname: 'kyoung2',
  birth: '1999.05.07',
  bio: '하이',
  location: '머전팡',
};

let user2: User = {
  id: 2,
  name: '버거햄',
  nickname: 'kyoung2',
  birth: '1999.05.07',
  bio: '하이',
  location: '머전팡',
};

// 인덱스 시그니쳐
// key와 value의 규칙을 기준으로 객체의 타입을 정의하는 문법
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
  [key: string]: number;
  // 반드시 코리아는 있어야한다.
  Korea: number;
};
let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
