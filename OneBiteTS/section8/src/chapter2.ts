/**
 * 인덱스드 엑세스 타입
 * 인덱스를 이용해 다른 타입 내에 특정 프로퍼티를 추출하는 기능
 */

// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     age: number;
//   };
// }

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo(author: PostList[number]['author']) {
  console.log(`${author.name} = ${author.id}`);
}

const post: PostList[number] = {
  title: '게시글 제목',
  content: ' 게시글 본문',
  author: {
    id: 1,
    name: '햄버거',
    age: 25,
  },
};

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
type TupNum = Tup[number];
