<?php
session_start();
$username=$_SESSION['username'];
unset($_SESSION['username']);
$score=$_GET['score'];
$time=$_GET['time'];
$subject=$_GET['subject'];
echo'
<DOCTYPE! html5>
<html >
<head><title> </title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet "  href="css/jquery.mobile-1.4.5.min.css "/>
 <script src=" js/jquery.min.js "></script >
<script  src="js/jquery.mobile-1.4.5.min.js "></script >
<script src=" js/form.js"></script>
<link rel="stylesheet" href="css/onlinehome.css"/>
</head>
<body>
<!-- homepage -->
<div id="home"data-role="page" >

<!--page header-->
  <div data-role="header" id="header" data-theme="e">
  <a data-rel="back" data-icon="arrow-l" data-iconpos="notext"></a><span><center><img src="img/header.gif"></img><center></span>
  </div>
  <div id="b"data-role="content">
  <!--Login form-->
<div data-role="" id="" data-theme="a" class="ui-corner-all">
    <form >
        <div style="padding:10px 20px;">
            <h3>Fill in Your Username and password to submit  score</h3>
            <label for="sub" class="ui-accessible">Subject:</label>
            <input type="text"  id="subject" value="'. $subject.'"  placeholder="subject" data-theme="a"  readonly>
            <label for="un" class="ui-accessible">Username:</label>
            <input type="text"  id="username" value="'.$username.'" placeholder="username" data-theme="a" readonly>
            <label for="pw" class="ui-accessible">Password:</label>
            <input type="password"  id="password" value="" placeholder="password" data-theme="a">
			<label  class="ui-accessible">TotalScore:</label>
            <input type="text"   id="score" style="font:20px " value="'. $score.'"placeholder="score" data-theme="a" readonly >		
           <label  class="ui-accessible">Time(min):</label>
            <input type="text"  id="time" style="font:20px " value="'.$time.'"  placeholder="time" data-theme="a" readonly >		 	
            <input type="button" class="ui-btn ui-corner-all ui-shadow ui-btn-b " data-theme="b" id="insert"  value="Submit"/>
      </div>
 </form>
  </div>
  </div>
 <div id="footer" data-role="footer">
 <span><center><img src="img/footer.gif"></img></center></span>
 </div> 
 </div>
 <script  src="Chem.js"></script >
 </body>
 <script src=" js/forms.js"></script>
 </html>';  
 ?>