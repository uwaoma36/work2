<!--This script is for the mouse in form inputs operation-->

$(document).ready(function(){
$("#ruser").change(function(){
var reuser
=document.querySelector('#ruser').value;
if(reuser.length<5||reuser==""||reuser==null){
 $('#ru').css("color", "red").text ("username required ");}
 else if (reuser.length==5||reuser.length>30){
 $('#ru').css("color", "red").text ("invalid username (6-30)");
 }else
 { $('#ru').css("color", "red").text(""); } 
   } ) ;
   
   
 $('#rpw').change( function(){
   var repass=document.querySelector('#rpw').value;    if(repass.length<7||repass==""||repass==null){
 $('#rp').css("color", "red").text("password required "); } 
else if (repass.length==7||repass.length>30){
 $('#rp').css("color", "red").text ("invalid password(8-30)");
 }
else { $('#rp').css("color",
 "red").text("");}
 } 
 ) ;
 
 $('#fn').change(function(){
 var first=document.querySelector('#fn').value;
if (first.length<2||first==""||first==null){
 $('#f').css("color", "red").text ("  firstname required "); 
 } 
else if
(first.length==2||first.length>36){ 
 $('#f').css("color", "red").text ("invalid firstname (3-36)");}
 else { $('#f').css("color","red").text("");}
 } );
 
 $('#ln').change(function(){
 var last=document.querySelector('#ln').value;
 if (last.length<2||last==""||last==null){
 $('#l').css("color","red").text ("lastname required "); 
 } 
else if
(last.length==2||last.length>36){
 $('#l').css("color", "red").text ("invalid lastname (3-36)"); }
 else { $('#l').css("color","red").text("");}

});

$('#un').change(function(){
var suser=document.querySelector('#un').value;
 if (suser.length<5||suser==""||suser==null){
 $('#u').css("color", "red").text ("username required");
 } 
 else if (suser.length==5||suser.length>30){
 $('#u').css("color", "red").text ("invalid username (6-36)");}
 else { $('#u').css("color","red").text("");}
} );


$("#pw").change(function(){
var spass
=document.querySelector
('#pw').value;
if (spass.length<7||spass==""||spass==null){
 $('#p').css("color", "red").text ("password required ");}
 else if (spass.length==8||spass.length>30){
 $('#p').css("color", "red").text ("invalid password (8-36)");
} 
else{ $('#p').css("color", "red").text(""); } 
   } ) ;});