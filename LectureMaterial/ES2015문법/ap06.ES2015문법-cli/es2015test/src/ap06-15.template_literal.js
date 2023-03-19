/*

  ES2015의 template literal( 백틱, ` ) 에 대해서 알아본다.
  template literal 의 용도
  1. 다중 문자열(여러줄) 만들 때
  2. 변수 치환
*/
const string1 = '안녕하세요';
const string2 = '반갑습니다';
const greeting = `${string1}



${string2}`;

// 이렇게 사용하지 마세요

const value1 = 1;
const value2 = 2;
const value3 = value1 * value2;
const value4 = `${value1 == value2 ? '참' : '거짓'}`;

const student = {
  name: 'John Kagga',
  city: 'Kampala',
};

const msg = 'Hello' + student.name + 'form' + student.city;
console.log(msg);
