"use strict";

/*

    개선된 객체 표현식에 대해서 알아본다.
      개선된 객체 프러퍼티 표현식
      개선된 객체 메서드 표현식
*/
var name = '홍길동';
var age = 20;
var p2 = {
  name: name,
  age: age,
  powderYell: function powderYell() {
    var yell = this.name.tollUpperCase();
    console.log("".concat(yell, "\n    ").concat(yell, " !!!"));
  },
  setAge: function setAge(mph) {
    this.age = mph;
    console.log('나이:', mph);
  }
};
p2.powderYell();