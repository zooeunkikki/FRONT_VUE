/*


  변수의 호이스팅




  함수의 호이스팅

*/
console.log(aaa);
var aaa;
aaa = '변수의 호이스팅';

console.log(bbb);
const bbb = '변수의 호이스팅2';

// 함수 스코프, 블락 스코프
var msg = 'global scope';
if (true) {
  var msg = 'block scope';
}

let msg2 = 'global scope';
if (true) {
  let msg2 = 'block scope';
}

// 함수의 호이스팅
debugger;
console.log(aaa(1, 2));
// function add(a, b) {
//   return a + b;
// }

const add = (a, b) => {
  return a + b;
};
