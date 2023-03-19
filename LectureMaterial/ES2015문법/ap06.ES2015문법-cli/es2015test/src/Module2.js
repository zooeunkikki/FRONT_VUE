/*
  CommonJS 모듈 방식 : require 사용
    var module = require('./MyModule'); -> 지금 안함대유


  ES2015 모듈 방식 : import/export 사용
    import React from "redux";
    import {Component} from "redux";
    import React, {Component} from "redux";
    import React as rd from "redux";
    import * as rd from "redux";
*/

// Module2.js
import b, { a, c } from './Module1.js';
debugger;
console.log(a);
console.log(c);

// Module3.js
