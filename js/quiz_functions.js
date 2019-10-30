<!-- Paste this code into an external JavaScript file named: quiz_functions.js  -->

/* The script for ignatius uwaoma sciencequiz platform*/

var useranswers = new Array();
var answered = 0;

function renderQuiz() {
//timer objects.
document.writeln('<div id="header"  ><center><center><img src="img/header.gif"></img></center></div>');
document.writeln('<div id="timer"  hidden="true" ><b><span id="time"></span>min remaining</b></div><br>');
document.writeln('<center><img  id="start" src="img/startapp.gif" ></img><br></center><br>') ;
document.writeln('<div id="footer"><center><img src="img/footer.gif"></img></center></div>'); 

  for(i=1;i<questions.length+1;i++) {
 c = Math.floor( Math.random() *20) ;
    document.writeln('<p class="question"><b>'+i + questions[c] + ' <span id="result_' + i + '"><img src="blank.gif" style="border:0" alt="" /></span></p>');
    for(j=0;j<choices[c].length;j++) {
      document.writeln('<input type="radio" name="answer_' + i + '" value="' + choices[c][j] + '"  class="question_' + i + '" onclick="submitAnswer(' +i + ',' +c+', this, \'question_' + i + '\', \'label_' + i + '_' + j + '\')" /><label id="label_' + i + '_' + j + '" for="answer_' + i + '_' + j + '"> ' + choices[c][j] + '</label><br />');
    }
  }
  document.writeln( '<p><img src="img/submitbtn.gif" id="submit"  onclick="showScore()" /> </p><p style="display:none"><img src="correct.gif" style="border:0" alt="Correct!" /><img src="incorrect.gif" style="border:0" alt="Incorrect!" /></p>');
}
function resetQuiz(showConfirm) {
  if(showConfirm)
    if(!confirm("Are you sure you want to reset your answers and start from the beginning?"))
      return false;
  document.location ="index.php";
}
function submitAnswer(questionId,Das, obj, classId, labelId) {
  useranswers[questionId] = obj.value;
  document.getElementById(labelId).style.fontWeight = "bold";
  disableQuestion(classId);
  showResult(questionId, Das);
  answered++;
}
function showResult(questionId, Das) {
  if(answers[Das] == useranswers[questionId]) {
    document.getElementById('result_' + questionId).innerHTML = '<img src="correct.gif" style="border:0" alt="Correct!" />';
  } else {
    document.getElementById('result_' + questionId).innerHTML = '<img src="incorrect.gif" style="border:0" alt="Incorrect!" />';
  }
}
function showScore() {
  if(answered != answers.length) {
 var a=  confirm("You have not answered all of the questions yet! are you sure you want to submit and view your score");
   if (stoptim==30&& a==false) {resetQuiz(false);}
   if (stoptim==30&& a==true) {resetQuiz(false);}
   if(stoptim<30&& a==false){return false;} 
  }
  questionCount = answers.length;
  correct = 0;
  incorrect = 0;
  for(i=1;i<questionCount+1;i++) {
   for(j=0;j< questionCount;j++){
    if(useranswers[i] == answers[j])
      correct++;
    else
      incorrect++;
  }} 
  pc = Math.round((correct / questionCount) * 100);
  alertMsg = "You scored " + correct + " out of " + questionCount + "\n\n";
  alertMsg += "You correctly answered " + pc + "% of the questions! \n\n";
  if(pc == 100)
    alertMsg += response[0];
  else if(pc >= 90)
    alertMsg += response[1];
  else if(pc >= 70)
    alertMsg += response[2];
  else if(pc > 50)
    alertMsg += response[3];
  else if(pc >= 40)
    alertMsg += response[4];
  else if(pc >= 20)
    alertMsg += response[5];
  else if(pc >= 10)
    alertMsg += response[6];
  else
    alertMsg += response[7];
 if(pc <= 100) {
    if(confirm(alertMsg)){document.location="submitscore.php?score="+correct+"&time="+stoptim+"&subject="+subject;   
        } 
    else
      return false;
  } else {
    alert(alertMsg);
  }
}
function disableQuestion(classId) {
  var alltags=document.all? document.all : document.getElementsByTagName("*")
  for (i=0; i<alltags.length; i++) {
    if (alltags[i].className == classId) {
      alltags[i].disabled = true;
    }
  }
}
