// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var today = new Date();
  var day = today.getDay();
  var daylist = ["1","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);
2.
// window.print();
3.
var today = new Date();
var dd= today.getDate();
var mm= today.getMonth();
var yyyy=today.getFullYear();

if(dd<12){
  dd='0'+dd;
}
else if(mm<12){
  mm='0'+mm;
}


today=dd+"/"+mm+"/"+yyyy;

console.log(today);


var side1=5;
var side2=6;
var side3=7;
var s=(side1+side2+side3)/2;
var area= Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(Math.trunc(area));
console.log(Math.round(area));
