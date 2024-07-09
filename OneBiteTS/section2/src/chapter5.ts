// enum 타입 : 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 숫자열 enum, 문자형 enum
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user1 = {
  name: '햄버거',
  role: Role.ADMIN, // 0 <-관리자
};
const user2 = {
  name: '버거햄',
  role: Role.USER, // 1 <-사용자
};
const user3 = {
  name: '거햄버',
  role: Role.GUEST, // 2 <-게스트
};

console.log(user1, user2, user3);
