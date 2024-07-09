/**
 * 맵드 타입(Mapped Type)
 * 무조건 타입별칭에서만 사용해야 하며 실무에서 많이 쓰임
 */

interface User {
  id: number;
  name: string;
  age: number;
}
type PartialUser = {
  [key in keyof User]?: User[key];
};
type BooleanUser = {
  [key in keyof User]: boolean;
};
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  // ... 기능
  return {
    id: 1,
    name: '햄버거',
    age: 25,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}
