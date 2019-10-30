//Time controller script. 
var subject;
var c=30; 
var t; 
var timer_is_on=0; 
var stoptim=0;
function timedCount() {
if(stoptim==30){
showScore();
stoptim=0;} document.getElementById('time').innerHTML=c; 
c=c-1; 
stoptim=stoptim+1;
setTimeout("timedCount()",
3000);
 } 

function doTimer() { 
if (!timer_is_on) { 
timer_is_on=1; 
timedCount(); 
}} 


$(document).ready(function(){
$('input:radio,p,label').hide();
alert("Welcome To The Onlineline Sience Subject Quiz. Please Endeavor To Attempt All The Questions Before Your Time Elapses.Click The Start Button To Begin Good Luck.")
});
$('#start').click(function(){
$('body').css("background","white");
$('input:radio,p,label').show();
$('#timer').show();
$('#start').hide();
doTimer();
} 

);
 