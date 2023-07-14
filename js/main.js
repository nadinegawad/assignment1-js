// // 1- Write a program that allow to user enter number then printit

var num = window.prompt("please enter  number :");
window.alert(num);





// // 2- Write a program that take number from user then print yes if that number can divide by 3 
// // and 4 otherwise print no


var num = Number(window.prompt("enter number:"));


if (num % 3 == 0 && num % 4 == 0) {
     window.alert("yes");
} else {
     window.alert("no");
}




// // 3- Write a program that allows the user to insert 2 integers then print the max

var num1 = Number(window.prompt("enter first number :"));
var num2 = Number(window.prompt("enter second number :"));

if (num1 > num2) {
     window.alert("max number : " + num1);
} else {
     window.alert("max number : " + num2);
}





// // 4- Write a program that allows the user to insert an integer then print negative if it is
// // negative number otherwise print positive.

var num = Number(window.prompt("enter number:"));

if (num > 0) {
     window.alert("positive");
} else {
     window.alert("negative");
}



// // 5- Write a program that take 3 integers from user then print the max element 
// // and the min element.


var num1 = Number(window.prompt("enter first number :"));
var num2 = Number(window.prompt("enter second number :"));
var num3 = Number(window.prompt("enter third number :"));

if (num1 > num2 && num1 > num3) {
     window.alert("max element = " + num1);
} else if (num2 > num1 && num2 > num3) {
     window.alert("max element = " + num2);
} else {
     window.alert("max element = " + num3);
}

if (num1 < num2 && num1 < num3) {
     window.alert("min element = " + num1);
} else if (num2 < num1 && num2 < num3) {
     window.alert("min element = " + num2);
} else {
     window.alert("min element = " + num3);
}





// // 6- Write a program that allows the user to insert integer number then 
// // check If a number is oven or odd

var num = Number(window.prompt("enter number:"));
if (num % 2) {
     window.alert("odd");

} else {
     window.alert("even");
}




// // 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) 
// // then print vowel otherwise print consonant


var char = window.prompt("enter character ");

if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ||
     char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
     window.alert("vowel");

} else {
     window.alert("Consonant");
}



// 9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to 
// that’s number

var num = Number(window.prompt("enter number:"));
var output = "";

for (var i = 1; i <= num; i++) {
     output += i + " ";
}


window.alert(output);


// 10- Write a program that allows userto insert integerthen print a multiplication table up to 12

var num = Number(window.prompt("enter number:"));
var res = "";
var finalRes = "";

for (var i = 1; i <= 12; i++) {
     res = num + " * " + i + " = " +  (num * i )+", ";

     finalRes += res;
}
window.alert(finalRes );




// 11- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers 
// between 1 to this number


var num = Number(window.prompt("enter number:"));
var res = "";
for (var i = 1; i <= num; i++) {
     if (i % 2 == 0) {
          res += i + " ";
     }
}
window.alert(res) ;


// 12- Writeaprogramthattaketwointegersthenprintthepower

var num1 = Number(window.prompt("enter  number :"));
var power = Number(window.prompt("enter power :"));
var res = 1;

for (var i = 0; i < power; i++) {
     res *= num1;

}

window.alert(res) ;


// 12- Write a program to enter marks of five subjects and calculate total, average and 
// percentage.


var res = 0;

for (var i = 0; i < 5; i++) {
     var marks = Number(window.prompt("Enter Marks of five subjects:"));
     res += marks;
}
window.alert('Total marks = ' + (res) +  '  Average Marks = ' + (res / 5) +'  Percentage= ' + (res * 100 / 500));




// 13-Write a program to input month number and print number of days in that 
// month.



var month = Number(window.prompt("Month Number: "));


if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
     window.alert("31 days");
}
else if (month == 4 || month == 6 || month == 9 || month == 11) {
     window.alert("30 days");
} else {
     window.alert("28 dayes");
}





// 14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade 


var Physics = Number(window.prompt("Enter Physics marks: "));
var Chemistry = Number(window.prompt("Enter Chemistry marks: "));
var Biology = Number(window.prompt("Enter Biology marks: "));
var Mathematics = Number(window.prompt("Enter Mathematics marks: "));
var Computer = Number(window.prompt("Enter Computer marks: "));


var percentage = (Physics + Chemistry + Biology + Mathematics + Computer) * 100 / 500;

if (percentage >= 90 && percentage <= 100) {
    window.alert("percentage " + percentage + " Grade : A ");
}
else if (percentage >= 80) {
     window.alert ("percentage " + percentage + " Grade : B ");
}
else if (percentage >= 70) {
    window.alert ("percentage " + percentage + " Grade : C ");
}
else if (percentage >= 60) {
     window.alert("percentage " + percentage + " Grade : D ");
}
else if (percentage >= 40) {
     window.alert("percentage " + percentage + " Grade : E ");
}
else if (percentage < 40) {
     window.alert ("percentage " + percentage + " Grade : F ");
}
else {
     window.alert("WRONG NUMBER ");
}





// 15- Write a program to print total number of days in month 

var month = Number(window.prompt("Month Number: "));

switch (month) {
     case 1:
     case 3:
     case 5:
     case 7:
     case 8:
     case 10:
     case 12: {
          window.alert("31 days");
     }
          break;
     case 4:
     case 6:
     case 9:
     case 11: {
          window.alert("30 dayes");
     }
          break;

     default:
          window.alert("28 dayes");
}




// // 16- Write a program to check whether an alphabet is vowel or consonant 

var char = window.prompt("enter character : ");
switch (char) {
     case "a":
     case "A":
     case "e":
     case "E":
     case "i":
     case "I":
     case "u":
     case "U":
     case "o":
     case "O": {
          window.alert("vowel");
     }
          break;
     default: {
          window.alert("consonant");
     }
}


// // 17- Write a program to find maximum between two numbers 


var num1 = Number(window.prompt("enter first number :"));
var num2 = Number(window.prompt("enter second number :"));

switch (num1 > num2) {
     case true:
          window.alert("max number : " + num1);
          break;
     default:
          window.alert("max number : " + num2);
          break;

}






// // 18- Write a program to check whether a number is even or odd 

var num = Number(window.prompt("enter number :"));
var check = false;


switch (num % 2 == 0) {
     case true:
          window.alert("number : " + num + " is even ");
          break;
     default:
          window.alert("number : " + num + " is odd ");
          break;
}





// // 19- Write a program to check whether a number is positive or negative or zero 

var num = Number(window.prompt("enter number :"));
switch (num > 0) {
     case true:
          window.alert("positive");
          break;
     case false:
          switch (num) {
               case 0:
                    window.alert("zero");
                    break;
               default:
                    window.alert("negative");

                    break;

          }
}








// 20- Write a program to create Simple Calculator 

var num1 = Number(window.prompt("enter first number :"));
var op = window.prompt("enter the operator :");
var num2 = Number(window.prompt("enter second number :"));

switch (op) {
     case '+':
         window.alert(num1 + " + " + num2 + " = " + (num1 + num2)) ;
          break;
     case '-':
          window.alert(num1 + " - " + num2 + " = " + (num1 - num2)) ;
          break;
     case '*': window.alert(num1 + " * " + num2 + " = " + (num1 * num2)) ;
          break;
     case '/':
          window.alert(num1 + " / " + num2 + " = " + (num1 /num2)) ;
          break;
     default:
          window.alert("wrong operator");
}
