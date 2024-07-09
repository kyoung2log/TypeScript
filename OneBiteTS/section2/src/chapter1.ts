// TS가 가지고 있는 기본적인 5개의 원시타입

// 1. number
// 숫자 리터럴이 가지고 있는 메서드만 사용 가능
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// 2. string
// 문자열 리터럴이 가지고 있는 메서드만 사용 가능
let str1: string = 'hello';
let str2: string = `hello`;
let str3: string = `hello ${num1}`;

// 3. boolean
let bool1: boolean = true;
let bool2: boolean = false;

// 4. null
let null1: null = null;

// 5. undefined
let unde1: undefined = undefined;

// 리터럴 타입
// 값으로 만든 타입으로 해당 리터럴 값만 올 수있다
let numA: 10 = 10;

let strA: 'A' = 'A';

let boolA: true = true;
