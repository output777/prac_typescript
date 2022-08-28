
// TS 문자열 선언
const message: string = 'hellow world';

// TS 숫자
let num: number = 10;

// TS 배열
const arr: Array<number> = [1, 2, 3];
let items: number[] = [1, 2, 3]
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];


// TS 튜플 - 각각의 index의 타입을 지정해준 배열
let address: [string, number] = ['gangnam', 100]

// TS 객체
let obj: object = {};
let person1: object = {
  name: 'Capt',
  age: 100
}
let person2: { name: string, age: number } = {
  name: 'Thor',
  age: 1000
}

// TS 진위값
let show: boolean = true;