/**
 * 프로미스
 * 제네릭 클래스를 기반으로 타입이 선언되어 있다.
 */

import { rejects } from 'assert';
import { resolve } from 'path';

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject('않되');
  }, 3000);
});

promise.then((response) => {
  console.log(response * 20);
});

promise.catch((err) => {
  console.log(err);
});

/**
 * 프로미스를 반환하는 함수의 타입 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: '제목',
        content: '컨텐츠',
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
