/**
 * Unknown 타입 : 전체 집합
 * 모든 타입의 부모타입이 될 수 있다.
 */
function UnknownExam() {
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

/**
 * Never 타입 : 공집합
 * 모든 집합의 부분 집합
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // let never1: never = 10;
  // let never2: never = 'string';
  // let never3: never = true;
}

/**
 * Void 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log('hello');
    return undefined;
  }

  let voidVar: void = undefined;
}

/**
 * any 타입 : 치트키 ㅋㅋ
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;
  neverVar: anyVar;
}
