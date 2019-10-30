<?php
session_start();
$subject =$_GET['subject'];
$host="localhost";
$account="root";
$password="";
$record =array();
$connect =mysqli_connect($host,$account, $password);
$db= mysqli_select_db($connect,"science_quiz"); 
$result=mysqli_query($connect, "SELECT users.fname, users.lname, scores.time, scores.score, scores.date FROM users,scores WHERE  users.email=scores.userid AND scores.subject='$subject' AND  scores.score>0 ORDER BY score,time DESC" );
while($row=mysqli_fetch_array($result)){
array_push($record,array("firstname"=>$row['fname'], "lastname"=>$row['lname'] ,
"time"=>$row['time'],
"score"=>$row['score'],
"date"=>$row['date'] ));
}
error_log(print_r($record,true));
echo json_encode(array("details"=>$record)); 
 ?>