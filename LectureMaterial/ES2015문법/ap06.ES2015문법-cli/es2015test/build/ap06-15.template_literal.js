"use strict";

/*

  ES2015의 template literal( 백틱, ` ) 에 대해서 알아본다.
  template literal 의 용도
  1. 다중 문자열(여러줄) 만들 때
  2. 변수 치환
*/
var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greeting = "".concat(string1, "\n\n\n\n").concat(string2);

// 이렇게 사용하지 마세요

var value1 = 1;
var value2 = 2;
var value3 = value1 * value2;
var value4 = "".concat(value1 == value2 ? '참' : '거짓');
var student = {
  name: 'John Kagga',
  city: 'Kampala'
};
var msg = 'Hello' + student.name + 'form' + student.city;
console.log(msg);