<?php
session_start();
if(!$_SESSION['username']){
header("location:index.php");
} 
?>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.2">
<link rel="stylesheet " href="css/timer.css"></link>
<script type="text/javascript" src="js/quiz_configPhysics.js "></script>
<script type="text/javascript" src="js/quiz_functions.js"></script>
<script type="text/javascript">
<!--
  renderQuiz();
//-->
</script>
</head>
<body>
</body>
<script src="js/jquery.js "></script>
<script src="js/timer.js "></script >
</html>