// ********************** Assignment no 2 **************************

// ====================== Question no 1 ============================


// var num = 10;
// console.log(num);


// var num1 = 10;
// num1 = ++num1;
// console.log(num1); 

// var a = 11;
// a = ++a;
// console.log(a);

// var num2 = 11;
// num2 = num2--;
// console.log(num2);

// var num3 = 11;
// num3 = --num3;
// console.log(num3);


// ====================== Question no 2 ============================


// var a = 2;  //  1  
// var b = 1;  //  0  1 

// var result = --a - --b + ++b + b--;
// //            1  -   0  + 1  + 1
// console.log(result);

// a = --a ; // 1
// console.log(a);

// result1 = --a - --b; //  1  -  0
// console.log(result1);


// result2 = --a - --b + ++b; //  1 -  1  +  2
// console.log(result2);


// result3 = --a - --b + ++b + b--; //   1 - 0  + 1 + 1
// console.log(result3);


// ====================== Question no 6 ============================
var yourName = prompt("Enter your Name");
var subject1 = prompt("Enter your first suject" , "English");
var subject2 = prompt("Enter your first suject2" , "urdu");
var subject3 = prompt("Enter your first suject3" , "math");
// 
console.log ("first subject " + subject1 );
console.log ("second subject " + subject2 );
console.log ("third subject " + subject3 );

var totalMarks = 100 * 3;
var marks1 = parseInt(prompt("First subject marks"));
// console.log(marks1);
var marks2 = parseInt(prompt("First subject marks"));
// console.log(marks2);
var marks3 = parseInt(prompt("First subject marks"));
// console.log(marks3);
var obtainedMarks = marks1 + marks2 + marks3;
console.log(obtainedMarks);

var percentage = (obtainedMarks / totalMarks) * 100;
// console.log(percentage);
console.log(yourName + " " + "your marks is" + " " + obtainedMarks + " " + "and total marks is" + " " + totalMarks + " " + "and your percentage is" + " " + percentage);











