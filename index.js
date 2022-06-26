// Import stylesheets
import './style.css';
"use strict"

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
// Write a JavaScript program to display the current day and time in the following format.
var today = new Date();
var day = today.getDay();
var daylist = [
  '1',
  'Monday',
  'Tuesday',
  'Wednesday ',
  'Thursday',
  'Friday',
  'Saturday',
];
console.log('Today is : ' + daylist[day] + '.');
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = hour >= 12 ? ' PM ' : ' AM ';

console.log(
  'Current Time : ' + hour + prepand + ' : ' + minute + ' : ' + second
);
// Write a JavaScript program to print the contents of the current window.
// window.print();
// Write a JavaScript program to get the current date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();

if (dd < 12) {
  dd = '0' + dd;
} else if (mm < 12) {
  mm = '0' + mm;
}
today = dd + '/' + mm + '/' + yyyy;
console.log(today);

// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

var side1 = 5;
var side2 = 6;
var side3 = 7;
var s = (side1 + side2 + side3) / 2;
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
console.log(Math.trunc(area));
console.log(Math.round(area));
// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 500);
}
// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.


for (var year=2014; year<=2050; year++){
  var d= new Date(year,0,1);
  if(d.getDay()===0 )
    console.log(year);
  
}


// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". 



// var input= Math.ceil(Math.random()*10);
// console.log(input);
// // var num= prompt("input a number ");
// if(num==input){

//   console.log("matched")
  
// }else{
//   console.log("not match . number is "+input)
// }

// Write a JavaScript program to calculate days left until next Christmas.
var today= new Date();
var show_date= new Date(today.getFullYear(),10,9);
if(today.getMonth()==10 && today.getDate()>9)
{
  show_date= setFullYear(show_date.getFullYear()+1);
}
var next=1000*60*60*24;
console.log(Math.ceil((show_date.getTime()-today.getTime())/(next)));
