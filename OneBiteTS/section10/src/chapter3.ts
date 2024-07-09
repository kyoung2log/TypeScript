/**
 * 맵드 타입 기반의 유틸리티 타입들
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

/**
 * Pick<T,K>
 * : 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

// K에 제약을 걸어야 하는 이유
// in 연산자 우측에는 string 리터럴로 만든 유니온 타입이 들어올 수 있다.
// 근데 지금 K에는 함수도, 객체도, never도 들어올 수 있다.
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: '옛날 글',
  content: '옛날 컨텐츠',
};

/**
 * Omit<T,K>
 * : 객체 타입으로부터 특정 프로퍼티만 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const noTitlePost: Omit<Post, 'title'> = {
  content: '',
  tags: [],
  thumbnailURL: '',
};

/**
 * Record<K,V>
 */

type ThumbnailLagacy = {
  large: { url: string };
  medium: { url: string };
  small: { url: string };
  watch: { url: string };
};

// keyof 를 사용해서 유니온 타입을 주 되, any를 사용해 어떤 객체가 올지는 정해주지 않음
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<'large' | 'medium' | 'small', { url: string }>;
