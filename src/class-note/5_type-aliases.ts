// interface Person {
//   name: string;
//   age: number;
// }

type Person2 = {
  name: string;
  age: number;
}

let seho2: Person2 = {
  name: '세호',
  age: 30,
}

type MyString = string;
let str: MyString = 'hello';


type Todo = { id: number; title: string; done: boolean };
function getTodo(todo: Todo) {

}