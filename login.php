<?php

$host="localhost";
$account="root";
$password="";
$connect= mysqli_connect($host,$account,$password)or die("server error"); 
$db =mysqli_select_db($connect,"science_quiz") or die("database error"); 

$username= $_POST['username'];
$password= $_POST['password'];
$username=trim($username);
$password=trim($password);

 if (!preg_match("^[A-Za-z0-9]+$^", $username)&& !preg_match("^[A-Za-z0-9]+$^", $password) )
{
echo"<b>Username  contain invalid character</b>" ;
}
else{
$password=md5($password);
$checkuser=mysqli_query( $connect , "SELECT *  FROM users WHERE email='$username' AND password='$password'");
if(mysqli_num_rows($checkuser)==0)
{
echo"<b>This Username does not exist please register with us</b>";
}
else{
session_start();
$_SESSION['username']=$username;
echo"ok";
}
} 

 ?>