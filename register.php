/**registration script */
<?php
$subjects= array("maths","chemistry","physics", "biology", "geography"); 
$host="localhost";
$account="root";
$password="";
$connect= mysqli_connect($host,$account,$password)or die("server error"); 
$db =mysqli_select_db($connect,"science_quiz") or die("database error"); 
$firstname=$_POST['firstname'];
$lastname= $_POST['lastname'];
$username= $_POST['username'];
$password= $_POST['password'];
$firstname=trim($firstname);
$lastname=trim($lastname);
$username=trim($username);
$password=trim($password);
$checkuser=mysqli_query( $connect , "SELECT *  FROM users WHERE email='$username'");
if(mysqli_num_rows($checkuser)>0)
{
echo"<b>This Username already exists</b>";
}

else if (!preg_match("^[A-Za-z]+$^", $firstname))
{
echo"please names must only be alphabets";
}
else if (!preg_match("^[A-Za-z]+$^", $lastname))
{
echo"please names must only be alphabets";
}

else if (!preg_match("^[A-Za-z0-9]+$^", $username))
{
echo"Username  contain invalid character" ;
}
else {
$password=md5($password);
$date= date("Y/m/d");
  $result =mysqli_query($connect , "INSERT INTO users(fname,lname,email,password,date )VALUES('$firstname','$lastname','$username','$password', '$date')");	
  
 //replicate user data 
  foreach($subjects as $subject){ $result1=mysqli_query($connect ,"INSERT INTO scores(userid,subject)VALUES('$username','$subject')");} 	
  
  //If registration successful
echo" ".$firstname." ".$lastname." your registration into the science quiz platform was successful login to  play.";} 
?>