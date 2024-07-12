## 0️⃣ TS 세팅

**TS 세팅**

1. 패키지 초기화 : `npm init`
2. 타입스크립트 패키지 설치 : `npm i @types/node`
   - node.js의 기본 기능에 대한 타입정보
3. 타입스크립트 컴파일러 설치 : `npm i -g typescript`
   - **`tsc src/index.ts`** → 해당 TS 파일이 JS 파일로 컴파일됨
   - `node src/index.ts` → 생성된 JS 파일을 node로 실행
4. 타입스크립트 컴파일/실행 설치 : `npm i -g tsx`
   - `tsx src/index.ts` → TS 파일을 바로 실행시켜줌

**TS Config**

- 컴파일러 기본 옵션 자동 생성 : **`tsc —init`**

  ```tsx
  {
    "compilerOptions": {
  	  // 컴파일 결과 생성되는
      "target": "ESNext", // js의 버전 설정
      "module": "ESNext", // js의 모듈방식 설정
      "outDir": "dist", // js의 위치 설정
      // TS 컴파일러의 엄격도 설정. 무조건 true로
      "strict": true,
      // TS는 기본적으로 모든 파일을 전역 파일(모듈)로 취급 -> 같은 이름의 변수 선언 불가
      // 따라서 모든 파일에 모듈 시스템 키워드를 최소 하나 이상 사용해 독립 파일(모듈)로 취급해야 함
      // 이를 자동화 해준 옵션.
      // ts 컴파일러가 js파일로 변환할 때, export {} 키워드를 자동으로 추가
      "moduleDetection": "force"
    },
    // 컴파일 할 타입스크립트 파일의 범위와 위치를 알려주는 옵션
    // 아래 코드는 src 아래의 모든 파일을 한번에 컴파일 한다.
    "include": ["src"]
  }

  ```

## 1️⃣ TS 정의 및 동작원리

**TS 정의**

- TS는 C# 창시자 앤더스 하일스 버그가 만든 오픈소스로 JS의 유연한 문법으로 인해 생기는 문제점을 극복하기 위해 JS에 타입 관련 기능을 추가한 언어

**타입시스템**

![Untitled](imgs/1.png)

**JS 동작 과정**

- 자바스크립트 코드는 자바스크립트 컴파일러에 의해 AST로 변환된다.
- 컴파일러는 변환된 AST를 바이트코드로 변환하고 컴파일을 종료한다.

**TS 동작 원리**

- 타입스크립트 코드는 타입스크립트 컴파일러에 의해 AST(추상 문법 트리)로 변환된다.
- 이때 변환된 AST를 보고 코드 상 타입에 오류가 있는지 확인하는 타입검사를 진행한다.
- 타입검사에 실패한다면 컴파일이 종료되고, 검사에 성공한다면 변환된 AST를 자바스크립트 코드로 변환한다.
- 타입스크립트의 컴파일 결과로 만들어진 자바스크립트 코드는 자바스크립트의 동작과정을 거쳐 컴파일되어 실행된다.

## 2️⃣ **TS 타입 종류 정리**

**TS의 기본 타입**

- 타입스크립트가 자체적으로 제공하는 타입

**원시 타입 (Primitive Type)**

- 동시에 하나의 값만 저장할 수 있는값
- ex) `number`, `string`, `boolean`, `null`, `undefined`
- 값으로 만든 타입은 리터럴 타입이라고 한다.
- ex) `let num10 : 10 = 10;`

**배열 타입**

- 타입 어노테이션으로 정의 : `let numArr: number[] = [1, 2, 3];`
- 제네릭으로 정의 : `let boolArr: Array<boolean> = [true, false, true];`
- 유니온으로 다양한 타입을 갖는 배열 정의 : `let multiArr: (number | string)[] = [1, "hello"];`

**튜플 타입**

- 튜플 : 길이와 타입이 고정된 배열
- ex) `let tup1: [number, number] = [1, 2];`
- 길이와 타입이 고정되었다고 하지만 JS로 컴파일해보면 결국 배열로 변환되기 때문에 push나 pop을 사용할 수 있다. 그럼에도 불구하고 각 요소의 타입을 명시적으로 지정할 수 있기 때문에 튜플을 사용한다.
- ex) 이차원 배열로 0번 인덱스는번호, 1번 인덱스는 이름의 회원 정보를 관리할 때 ts 의 튜플을 사용해서 번호 이름이 거꾸로 배치 되는 경우를 막을 수 있음

**객체 타입**

- 객체는 객체 리터럴 타입으로 표기해야함 → ts의 구조적 타입 시스템이라는 특성
- 선택적 프로퍼티, 읽기전용 프로퍼티 사용 가능
- 초과 프로퍼티 검사
- 인덱스 시그니쳐 : 객체의 키와 타입을 정의하는 문법으로 객체의 속성이 어떤 이름을 가질지 미리 알 수 없을 때 사용
  ```tsx
  type CountryCodes = {
    [key: string]: string;
  };
  ```

**열거형 타입(Enum type)**

- 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
- 숫자형과 문자형이 있으며, js로 컴파일 시 객체로 변환됨
- 사용하지 않는것이 좋다고 함 ([참고링크](https://velog.io/@sensecodevalue/Typescript-Enum-%EC%99%9C-%EC%93%B0%EC%A7%80-%EB%A7%90%EC%95%84%EC%95%BC%ED%95%98%EC%A3%A0)1, [참고링크2](https://techblog.woowahan.com/9804/#toc-1), [참고링크3](https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking))

**any/Unknown 타입**

- `any`
  - 모든 타입을 허용하는 타입.
  - `any`사용시 런타임에 발생할 수 있는 타입 오류를 예방하지 못하므로 사용을 지양해야 한다.
  - 타입계층도를 무시해버리는 타입 모든타입의 슈퍼타입이 될 수 있고 모든 타입의 서브 타입이 될 수 있다.
- `unknown`
  - `any`와 마찬가지로 모든 타입을 허용하지만, `unknown` 타입의 값은 값을 저장하는 행위만 허용하고 사용할 수 없기 때문에 예상치 못한 타입 오류를 방지할 수 있다.
  - 타입 계층도의 최 상단에 위치

**void/never/undefined/null 타입**

- `void`
  - 아무런 값도 없음을 의미하는 타입
  - 함수의 반환값이 없을 때 사용한다.
  - 참고로 함수의 반환값이 null 일 경우 null값을 반환해야됨 안그러면 오류
  - 이때 tsconfig.json에 `strictNullChecks` 옵션을 `False`로 설정하면 `void`타입의 변수에 `null`값도 담을 수 있다.
  - undefined 타입의 슈퍼 타입
- `never`
  - 불가능을 의미하는 타입으로 그 어떤 타입의 값도 `never`로 정의된 변수에 할당할 수 없다.(any 포함)
  - 반대로 모든 타입의 값에 never를 할당할 수 있다.
  - 함수 내부에서 무한반복을 하는 경우 반환을 할 수 없기 때문에 이런경우 함수의 반환값으로 `never`를 지정한다.
  - 타입 계층도의 최 하위에 위치
- `undefined`
  - 초기화되지 않은 값을 의미하는 타입
  - 함수의 반환값이 없을 때 자동으로 undefined 가 반환됨
- `null`
  - 의도적으로 null 값을 할당한 타입
- 타입스크립트가 코드의 문맥을 파악해 타입을 추론하는 경우인 문맥적 타이핑을 이용해 함수를 정의할 때는 아래의 상황에서 오류가 발생하지 않음. 버그가 아닌 TS의 타입 추론 기능. 이렇게 설계된 이유는 JS의 메서드를 사용해야 하기 때문.

  ```tsx
  // sample 함수의 반환값 타입을 명시적으로 void로 정의 함
  function sample(): void {
    return 1; // ^^^ 오류 발생!
  }

  type Sample = () => void;

  const sample: Sample = () => {
    return '123123'; // void 타입임에도 오류가 발생하지 않음
  };
  ```

- 예를들어 배열의 forEach 메서드의 경우 요소를 순회하기만 할 뿐 뭔가를 반환하지 않기 때문에 1번처럼 구현되어 있음. 하지만 보통 2번처럼 사용하곤 하는데 이 경우 문제가 된다. 따라서 js의 기존 여러 메서드나 기능을 문제없이 이용할 수 있도록 값을 반환하는 것을 허용한다.

  ```tsx
  // 1번
  (callbackfn: (...) => void, thisArg?: any): void

  // 2번
  const oldArr=[1,2,3];
  const newArr=[];

  // forEach의 콜백함수에서 배열의 새로운 길이를 반환하고 있음
  oldArr.forEach((item)=> newArr.push(item))
  ```

**함수 타입**

- 어떤 [타입]의 매개 변수를 받고, 어떤 [타입]의 결과값을 반환하는지 명시(반환값은 자동 추론되므로 생략 가능)
- 매개변수의 기본값, 선택적 매개변수, 나머지 매개변수 모두 사용 가능
- 타입 별칭/호출시그니쳐로 정의 가능
- 함수 오버로딩

  ```tsx
  // 버전들 -> 오버로드 시그니쳐
  // 구현부 없이 선언부만 만들어둔 함수
  function func(a: number): void;
  function func(a: number, b: number, c: number): void;

  // 실제 구현부 -> 구현 시그니쳐
  function func(a: number, b?: number, c?: number) {
    if (typeof b === 'number' && typeof c === 'number') {
      console.log(a + b + c);
    } else {
      console.log(a * 20);
    }
  }
  ```

  - 하나의 함수를 매개변수의 개수나 타입에 따라 다르게 동작하도록 만드는 문법
  - 함수 오버로딩을 구현하려면 먼저 위과 같이 버전별 오버로드 시그니쳐를 미리 생성해야함

## 3️⃣ TS 개념

![Untitled](imgs/2.png)

**타입은 집합**

- 타입스크립트에서 타입은 동일한 속성과 특징들을 가지는 여러 값을 모아놓은 집합

**타입 호환성**

- 어떤 타입을 다른 타입으로 취급해도 괜찮은지 판단하는 것

**슈퍼타입과 서브타입**

- 슈퍼타입 : 부분집합 관계에 속하는 타입 중 부모 타입
- 서브타입 : 부분집합 관계에 속하는 타입 중 자식 타입

**업캐스팅과 다운캐스팅**

- 업캐스트 : 서브타입의 값을 슈퍼타입의 값으로 취급하는 것
- 다운캐스트 : 슈퍼타입의 값을 서브타입의 값으로 취급하는 것

**대수 타입(Algebraic type)**

- 여러개의 타입을 합성해서 만드는 타입
- `Union` : `|` 를 사용해 하나의 변수에 여러 타입이 허용되도록 정의하는 방법으로 다양한 타입의 값을 처리할 수 있지만, 타입가드를 해주지 않으면 런타임시 타입 오류가 날 수 있다.
- `Intersection` : `&`를 사용해 여러가지 타입을 합쳐 모든 속성을 가지는 하나의 타입을 정의하는 방법

**타입 추론**

- 타입스크립트는 변수의 초기값을 통해 타입을 추론
- 주의할 점
  - 변수 선언시 초기값 생략하면 any 타입으로 추론됨. 그 후로 변수에 값을 할당할 때마다 할당된 타입으로 추론하는데 이를 any의 진화라고 표현
  - const로 선언된 상수는 변경 불가하기 때문에 가장 좁은 타입으로 추론됨. 예를들어 `const num = 10;`은 `number` 타입이 아닌 `10 Number Literal` 타입으로 추론
- 타입스크립트가 타입을 리터럴 값이 아닌 좀 더 넓은 타입으로 추론해 주는 방식을 타입 넓히기라고 한다.
- 최적 공통 타입 : 다양한 타입의 요소를 담은 배열을 변수의 초기값으로 설정하면 최적의 공통 타입으로 추론되다.

**타입 단언 (Type assertions)**

- 값의 타입을 프로그래머가 단언하는 방법
- 다중 단언 : `let num3 = 10 as unknown as string;`
- const 단언

  ```tsx
  let num4 = 10 as const; // 10 Number Literal 타입으로 단언됨

  let cat = {
    name: '야옹이',
    color: 'yellow',
  } as const; // 모든 프로퍼티가 readonly를 갖도록 단언됨
  ```

  - let으로 선언한 변수나 객체를 const로 선언한 것처럼 단언해줌
  - 객체를 초기화 할 때, 모든 프로퍼티 앞에 readonly 속성을 붙여줄 필요 없이 readonly 속성의 객체 프로퍼티가 정의됨

- Non Null 단언
  값 뒤에 `!`를 붙여이 값이 `undefined`이거나 `null`이 아닐것으로 단언

**타입 좁히기**

- 조건문 등의 Type Guard을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법
- `instanceof` 타입가드 : 어떤 클래스의 인스턴스일 때 사용
- `in` 타입가드 : 객체 내부에 특정 프로퍼티가 존재하는지 확인할 때 사용
- 타입단언 : as 연산자를 통해 변수의 타입을 직접 명시

**서로소 유니온 타입**

- 교집합이 없는 타입들로만 만든 유니온 타입을 말함

## 4️⃣ 타입별칭과 인터페이스

**타입 별칭(Type Alias)**

- 타입을 선언하는 기본적인 방법
- 타입을 변수처럼 사용해 중복을 허용하지 않음
- 에디터에서 마우스 오버시 타입 리터럴이 띄워짐

**인터페이스(Interface)**

- 타입 별칭과 동일하게 타입에 이름을 지어주는 방법
- 타입 별칭과 동일하게 선택적 프로퍼티, 읽기전용 프로퍼티 사용 가능
- 메서드 타입정의/오버로딩
  ```tsx
  interface Person {
    readonly name: string; // 읽기전용 프로퍼티
    age?: number; // 선택적 프로퍼티
    sayHi1: () => void; // 메서드 타입 정의 : 함수 표현식
    sayHi2(): void; // 메서드 타입 정의 : 호출 시그니쳐
    sayHi1: (a: number, b: number) => void; // 메서드 오버로딩 : 함수 표현식 ❌
    sayHi2(a: number, b: number): void; // 메서드 오버로딩 : 호출 시그니쳐
  }
  ```
- 타입 별칭과 동일하게 동작하지만 인터페이스는 `|`나 `&`을 사용하지 못함

**인터페이스 확장(상속)**

- 인터페이스는 `extends` 키워드를 통해 확장(상속)할 수 있다.
- 확장을 하면서 프로퍼티를 재 정의할 수 있는데 재 정의할 때 원본타입은 새로 정의될 타입의 슈퍼타입이여야 한다.
- 인터페이스끼리의 확장이 아닌 타입별칭으로 정의된 객체도 확장받을 수 있고 다중확장도 가능

**인터페이스 선언 합침**

- 타입 별칭은 동일한 스코프 내에 중보된 이름으로 선언할 수 없는 반면 인터페이스는 가능함
- 중복된 이름의 인터페이스 선언은 모두 하나로 합쳐진다. → 이를 선언합침이라고 함
- 중복된 이름의 인터페이스 내부에서 동일한 이름의 프로퍼티를 서로 다른 타입으로 정의하면 오류 발생

## 5️⃣ 클래스

**클래스 타입 선언**

- 클래스의 필드를 선언할 때 타입을 함께 정의해줘야 한다.
- TS에서의 클래스는 타입으로도 사용할 수 있다.

**상속**

타입스크립트에서 클래스의 상속을 이용할 때 파생 클래스(확장하는 클래스)에서 생성자를 정의 했다면 반드시 super 메서드를 호출해 슈퍼 클래스(확장되는 클래스)의 생성자를 호출해야 하며, 호출 위치는 생성자의 최상단 이어야만 합니다.

```tsx
class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
```

**접근제어자**

- public : 모든 범위에서 접근 가능(기본값)
- private : 클래스 내부에서만 접근 가능
- proteced : 클래스 내부 또는 파생 클래스(extends) 내부에서만 접근 가능

**필드 생략**

- 생성자 접근제어자를 설정하면 자동으로 필드가 선언되기 때문에 필드 생략 가능

## 6️⃣ 제네릭

**제네릭**

- 타입에 변수를 제공하는 방법으로 선언 시점이 아닌 생성 시점에 타입을 명시할 수 있게 해주는 기능
- 제네릭 타입으로 선언하면, 하나의 선언 코드로 다양한 타입을 사용 가능 → 재사용성 ⬆️
- 꺽쇠(`<>`) 안에 타입을 명시 & 타입명은 관용적으로 `T`, `K`, `D` 등을 사용

**응용**

- 타입변수 2개 필요하면 2개 사용 가능
- 배열 타입의 제네릭 함수 사용 가능
- 배열의 첫번째 요소의 타입이 반환값의 타입이 되도록 하려면 튜플 타입과 나머지 파라미터를 이용

  ```tsx
  function returnFirstValue<T>(data: [T, ...unknown[]]) {
    return data[0];
  }

  let str = returnFirstValue([1, 'hello', 'mynameis']);
  ```

- `extends`를 사용해 타입변수 제한

  ```tsx
  function getLength<T extends { length: number }>(data: T) {
    return data.length;
  }

  getLength('123'); // ✅
  getLength([1, 2, 3]); // ✅
  getLength({ length: 1 }); // ✅

  getLength(undefined); // ❌
  getLength(null); // ❌
  ```

- keyof 키워드를 이용한 제약조건

  ```tsx
  // 객체의 키를 하드코딩하지 않고도 타입 안전성을 유지하면서 객체의 속성에 접근할 수 있다고 함.
  let user = {
    name: 'Alice',
    age: 25,
  };

  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  let userName: string = getProperty(user, 'name'); // Alice
  let userAge: number = getProperty(user, 'age'); // 25
  ```

**제네릭 인터페이스/타입별칭**

- 인터페이스에서도 제네릭 사용 가능

  ```tsx
  interface KeyPair<K, V> {
    key: K;
    value: V;
  }

  let keyPair: KeyPair<string, number> = {
    key: 'key',
    value: 0,
  };

  let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ['1'],
  };
  ```

- 인덱스 시그니쳐 사용

  ```tsx
  interface Map<V> {
    [key: string]: V;
  }

  let stringMap: Map<string> = {
    key: 'value',
  };

  let booleanMap: Map<boolean> = {
    key: true,
  };
  ```

- 응용

  ```tsx
  interface Student {
    type: 'student';
    school: string;
  }

  interface Developer {
    type: 'developer';
    skill: string;
  }

  interface User<T> {
    name: string;
    profile: T;
  }

  function goToSchool(user: User<Student>) {
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
  }

  const developerUser: User<Developer> = {
    name: '이정환',
    profile: {
      type: 'developer',
      skill: 'TypeScript',
    },
  };

  const studentUser: User<Student> = {
    name: '홍길동',
    profile: {
      type: 'student',
      school: '가톨릭대학교',
    },
  };
  ```

**제네릭 클래스/프로미스**

```tsx
// 제네릭 클래스
class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }
}

const numberList = new List<number>([1, 2, 3]);
const stringList = new List<string>(['1', '2']);

// 제네릭 프로미스
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: '게시글 제목',
      });
    }, 3000);
  });
}
```

- 제네릭을 사용하여 클래스 정의가능
- 제네릭 프로미스는 클래스로 타입이 선언되어 있음

## 7️⃣ 타입 조작

**타입조작**

- 기본타입이나 타입별칭, 인터페이스로 만든 타입을 상황에 따라 유동적으로 변환하는 기능
- 제네릭, 인덱스드 엑세스 타입, keyof 연산자, Mapped(맵드) 타입, 템플릿 리터럴 타입, 조건부 타입

**인덱스드 엑세스**

- 인덱스를 이용해 다름 타입내의 특정 프로퍼티를 추출하는 타입
- 객체, 배열, 튜플에 사용 가능

**keyof 연산자**

- 객체 타입으로부터 프로퍼티의 모든 key를 String Literal Union 타입으로 추출하는 연산자
- 타입에만 적용할 수 있는 연산자. 따라서 값에 사용하고 싶을때는 typeof 키워드를 사용해 값의 타입을 먼저 추론하면 keyof 연산을 사용할 수 있다.

**Mapped(맵드) 타입**

- 기존의 객체를 기반으로 새로운 객체 타입을 만드는 기능

  ```tsx
  interface User {
    id: number;
    name: string;
    age: number;
  }

  type PartialUser = {
    // [key in "id" | "name" | "age"]?: User[key];
    [key in keyof User]?: User[key];
  };
  ```

**템플릿 리터럴 타입**

- 템플릿 리터럴을 사용해서 특정 패턴을 만드는 타입을 정의

  ```tsx
  type Color = 'red' | 'black' | 'green';
  type Animal = 'dog' | 'cat' | 'chicken';

  // type ColoredAnimal = `red-dog` | 'red-cat' | 'red-chicken' | 'black-dog' ... ;
  type ColoredAnimal = `${Color}-${Animal}`;
  ```

**조건부 타입**

- 조건에 따라 타입을 결정하는 문법
- 제네릭 조건부 타입 : [함수에서 매개변수의 타입을 조건부 타입으로 정할 때는 함수 오버로딩 사용이 나음](https://ts.winterlood.com/129fe6ed-953c-4ee1-a4c4-ba64f2b127c4)
- 분산적인 조건부 타입 : 타입변수에 할당한 Union 타입 내부의 모든 타입이 분리되어 다음과 같이 분산됨

  ```tsx
  StringNuberSwitch<number | string>; // 타입이 분리되어 분산됨

  StringNumberSwitch<number>; // number
  StringNumberSwitch<string>; // string

  // number와 string 두 결과를 모아서 다시 Union으로 묶음
  ```

  ```tsx
  // 응용 : Exclude 조건부 타입
  // 1. 타입 분리
  // Exclude<number, string>, Exclude<string, string>, Exclude<boolean, string>
  // 2. 분리된 타입 계산후 Union으로 묶음
  // number | never | boolean
  // 3. 타입 최적화
  // never는 Union으로 묶일 경우 사라짐 따라서 최종 결과는 number | boolean
  type Exclude<T, U> = T extends U ? never : T;

  type A = Exclude<number | string | boolean, string>;
  ```

- infer : 조건부 타입 내에서 특정 타입을 추론하는 문법으로 infer R 에서 조건식이 참이 될 수 있는 최적의 R을 추론해라 라는 의미

  ```tsx
  type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
  // 1. T는 프로미스 타입이어야 한다.
  // 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

  type PromiseA = PromiseUnpack<Promise<number>>; // number
  type PromiseB = PromiseUnpack<Promise<string>>; // string
  ```

## 8️⃣ 유틸리티 타입

**유틸리티 타입**

- 타입스크립트가 타입 조작 기능을 이용해 실무에서 자주 사용되는 타입을 미리 만들어 자체적으로 제공하는 특수 타입
- 맵드타입 기반 : `Partial<T>`, `Pick<T,K>`, `Required<T>`, `Omit<T, K>`, `Readonly<T>`, `Recore<K, V>`
- 조건부 타입 기반 : `Exclude<T, U>`, `Extract<T, U>`, `ReturnType<T>`

## 9️⃣ ETC

**namespace**

ES6 모듈시스템이 도입되기 전에 사용된 기능으로 타입스크립트에서 코드를 재사용하기 위해 제공하는 모듈 기능이다. 타입스크립트의 type 키워드는 컴파일시 사라지지만, namespace는 컴파일 시 즉시실행함수에 의해 객체로 변환된다. 현재는 모듈 시스템 사용을 권장한다.

**d.ts / declare**

- 기본개념 : 기본적으로 ts 파일은 브라우저나 node.js환경에서 실행시 ts 컴파일러를 통해 js로 변환하는 과정이 필요함. 이 과정에서 TS파일에서 실행이 가능한 부분은 JS로 변환되고 타입을 정의하는 부분은 사라진다.
- d.ts 파일
  - 타입 정의만 담겨있는 타입 선언 파일
  - JS로만 작성된 모듈/패키지을 TS에서 불러오거나 사용하면 import 만으로는 모듈 내부의 타입을 알 수 없어 any 타입으로 불러온다. 이때 패키지와 함께 타입 정의만을 담은 .d.ts 파일을 함께 만들어서 제공하면 사용할 수 있다.
  - 혹은 내 코드베이스에서 타입 정의를 분리하여 관리하고 싶을 때 사용
- declare 키워드
  - TS로 작성하지 않은 코드의 타입 정보를 컴파일러에게 알려주는 선언.
  - declare 키워드가 붙은 코드들은 JS로 컴파일 되지 않고 TS 컴파일러에게 타입 정보를 알리기만 함
  - TypeScript에게 특정 변수, 함수, 클래스, 모듈 등의 존재와 타입을 선언하지만, 실제 실행 코드에는 포함되지 않음.
- 타입 선언을 분리하고, 코드의 명확성과 유지보수성을 높임
- ex) [Tanstack Router의 `declare`를 이용한 router 등록](https://tanstack.com/router/latest/docs/framework/react/guide/creating-a-router#router-type-safety)
