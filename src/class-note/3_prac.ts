let count = 0;
count += 1;
// count = '문자열';    // 에러 발생


const numbers: number[] = [1, 2, 3];  // 숫자 배열
const messages: string[] = ['hello', 'world'];  // 문자열 배열

let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefiend 일수도 있음
let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있음

let color: 'red' | 'orange' | 'yellow' = 'red';  // red, orange, yellow 중 하나임
color = 'yellow';
// color = 'green';  // 에러 발생


function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);


function returnNothing(): void {
  console.log('I am just saying hello world');
}


