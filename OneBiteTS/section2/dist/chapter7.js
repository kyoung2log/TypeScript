function func1() {
    return 'hello';
}
// void : 아무것도 없음을 의미하는 타입
function func2() {
    console.log('hello');
}
// never : 존재하지 않는 불가능한 타입
function func3() {
    while (true) { }
}
function func4() {
    throw new Error();
}
export {};
