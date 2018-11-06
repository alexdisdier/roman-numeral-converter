"use strict";

/* main.js */

/* Roman Numeral Converter */
function convertToRoman(num) {
  var arrNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var arrRoman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var result = '';

  for (var i = 0; i < arrNum.length; i++) {
    while (arrNum[i] <= num) {
      result += arrRoman[i];
      num -= arrNum[i];
    }
  }

  return document.getElementById("result").innerHTML = result;
}