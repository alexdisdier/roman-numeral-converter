# Synopsis

This is a simple web application that converts integers to a Roman Numeral.

Learn about [Roman Numeral](https://en.wikipedia.org/wiki/Roman_numerals)

## Code Explanation
I created a function named convertToRoman that takes one argument num.
```javascript
function convertToRoman(num){}
```
Within that function, I created two arrays:
1. arrNum which represents decimals.
2. arrRoman which represents the Roman Numerals equivalent.
```javascript
var arrNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var arrRoman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
```
I initialized an empty string variable "result", which will house the final roman number.
```javascript
var result = '';
```
I then ran a for loop and a while loop. This will keep running until the current index will fit into num. Next, I add the roman numeral and decrease num by the decimal equivalent.
```javascript
for (var i = 0; i < arrNum.length; i++) {
  while (arrNum[i] <= num) {
    result += arrRoman[i];
    num -= arrNum[i];
  }
}
```
Finally we return the result to the web app
```javascript
return document.getElementById("result").innerHTML = result;
```

**Relevant Links**
For Loops
While Loops
1. [For Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
2. [While Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

## Usage example

See a live version - https://alexdisdier.github.io/roman-numeral-converter/

## Directory Structure

```bash

├── build
│   ├── images
│   ├── scripts
│   │   ├── main.js
│   │   ├── main.min.js
│   ├── styles
│   │   ├── bootstrap.css
│   │   ├── bootstrap.min.css
│   │   ├── grid.css
│   │   ├── grid.min.css
│   │   ├── main.css
│   │   ├── main.min.css
│   │   ├── normalize.css
│   │   ├── normalize.min.css
│   ├── .gitattributes   ##Forces the web app language to js
└── ├── index.html
    └──  README.md
```

## Built With

* html
* css
* JavaScript

## Authors

**Alex Disdier** - *Initial work* - [alexdisdier](https://github.com/alexdisdier)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

This is part of **JavaScript Algorithms and Data Structures Projects** in order to get the certification from [FreeCodeCamp](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter)
