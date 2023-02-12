// node notes6.js

// Differentiate between ,(coma) and +

var a = 2;
var b = 3;
var c = "hello";
console.log(a,b,c); // 2 3 hello
console.log(a+b+c); // 5hello


// Case 2 : Integers
var a = 2;
var b = 3;
console.log(a+b); // 5
console.log(a,b); // 2 3

// Case 3 : Strings
var a = "Hello";
var b = "World";
console.log(a+b); //HelloWorld

// Case 4 : Integer with Strings
var a = 2;
var b = "hello";
console.log(a,b); // 2 hello
console.log(a+b); // 2hello

// Case 5 : "\n"
var a = 2;
var b = "hello";
// \n it will be used for new line
console.log(a,"\n",b); // line 1 ----> 2     and  line 2 ------> hello