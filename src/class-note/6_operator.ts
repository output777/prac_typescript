// function logMessage(value: any) {
//   console.log(value);
// }

// logMessage('hello');
// logMessage(100);


// Union Type

var seho3: string | number | boolean;

function logMessage(value: string | number) {
  // 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는 (필터링 하는) 과정
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);


interface Developer2 {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// function askSomeone(someone: Developer2 | Person) {
//   // someone.name;
//   // someone.skill;
//   // someone.age;
// }
// askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
// askSomeone({ name: '캡틴', age: 100 })

function askSomeone(someone: Developer2 & Person) {
  someone.name;
  someone.skill;
  someone.age;
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 34 });