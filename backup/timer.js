var stoptim=0;

var c=30; 
var t; 
var timer_is_on=0; 
function timedCount() { document.getElementById('time').innerHTML=c; 
c=c-1; 
stoptim=stoptim+1;
t=setTimeout("timedCount()",60000); } 

function doTimer() { 
if (!timer_is_on) { 
timer_is_on=1; 
timedCount(); 
} }
$(document).ready(function(){
$('input:radio,p,label').hide();
alert("Welcome To The Offline Sience Subject Quiz. Please Endeavor To Attempt All The Questions Before Your Time Elapses.Click The Start Button To Begin Good Luck.")
});
$('#start').click(function(){
$('body').css("background","white");
$('input:radio,p,label').show();
$('#timer').show();
$('#start').hide();
doTimer()
} 
);

function ajax(){
var xml=new XMLhttpRequest();
var url="localhost/sciencequiz/submitscore.php?score="+correct+"time="+stoptim;
xml.onreadystatechange=function( ){
if(xml.readyState==4) {
document.location= submitscore.php?score="+correct+"time="+stoptim;
} 

} 
xmlhttp.open("GET",url,true);
xmlhttp.send(null);	
	
}
if( stoptim==30 ) ajax();