// 타입스크립트는 타입을 지정하지 않아도 초기화 하는 값을 기준으로 변수의 타입을 자동으로 추론한다.
// 특정 변수의 타입을 우리가 확실히 모를때 any와 unknown을 사용

// any : 모든 타입을 허용한다.
// 문제점 : 컴파일시는 오류가 발생하지 않지만, 런타임환경에서 오류가 발생할 수 있으므로 사용을 지양한다.
let anyVar: any = 10;
let num: number = 10;
num = anyVar;

// unknown : 무슨 타입인지 모르겠다.
let unknownVar: unknown;
