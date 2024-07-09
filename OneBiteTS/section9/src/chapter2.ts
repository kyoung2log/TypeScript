/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

// 타입변수에 타입 유니온 즉 여러개의 타입을 전달하게되면 아래와 같은 결과가 생성된다.
//StringNumberSwitch<number> | StringNumberSwitch<string>
let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean | number | string>;

/**
 * 실용적인 예제 1
 */

// 여기서 never는 공집합으로 처리됨 즉 결과에 never가 포함되어 있으면 삭제된다.
type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>;

/**
 * 실용적인 예제 2
 */

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
