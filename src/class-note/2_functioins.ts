// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}
sum(10, 20)


// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}


// 함수에 타입을 정의하는 방식 - 기본
function sum2(a: number, b: number): number {
  return a + b;
}
// sum2(10, 20, 30, 40);   // 타입스크립트는 자바스크립트보다 엄격하게 체크해서 인자 개수가 더 많기 때문에 에러가 발생한다.



// 함수의 옵셔널 파라미터 - ?를 사용하면 그 자리에 넣어도 되고 안넣어도 된다
function log(a: string, b?: string) {

}
log('hellow world');
log('hellow ts', 'abc');



