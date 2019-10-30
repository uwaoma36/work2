<?php
session_start();
$subject =$_GET['subject'];
$host="localhost";
$account="root";
$password="";
$qst=array();
$connect =mysqli_connect($host,$account, $password);
$db= mysqli_select_db($connect,"science_quiz");
$result =mysqli_query($connect,"select * from questions");
while($row=mysqli_fetch_array($result)){
	array_push($qst,array('qst'=>$row['question'],'opt'=>[$row['optA'],$row['optB'],$row['optC'],$row['optD'],$row['optD']],'ans'=>$row['ans']));
}

echo (json_encode($qst));
?>