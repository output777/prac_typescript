enum Shoes {
  Nike,
  Adidas = '아디다스'
}

let myShoes = Shoes.Adidas;
console.log(myShoes);


// 예제
enum Answer {
  Yes = 'Y',
  No = 'N'
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다');
  }
  if (answer === Answer.No) {
    console.log('오답입니다');
  }
}
// enum에서 제공하는 데이터만 집어넣을 수 있게 된다
// 드롭다운 등에서 enum을 사용하면 좋다.
askQuestion(Answer.Yes);
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');
