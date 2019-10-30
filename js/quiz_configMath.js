/* ignatius uwaoma project for mobile app quiz platform
MATH Qquetions module*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
subject ="maths";

// To add more questions, just follow the format below.

questions[0] = ")</b> if U={1,2,3,...,15,16}' T={1,3,6,10,15} and S={1,4,9,16} then (TUS)'=</p>";
choices[0] = new Array();
choices[0][0] = "<b>A.</b> {1,3,4,6,9,10,15,16}";
choices[0][1] = "<b>B.</b> {2,3,4,...,15,16}";
choices[0][2] = "<b>C.</b> {2,5,7,8,11,12,13,14}";
choices[0][3] = "<b>D.</b> {3,4,6,9,10,15,16}</b>";
choices[0][4] = "<b>E.</b> {3,6,10,15}"
answers[0] = choices[0][2];

questions[1] = ")</b> x varies directly with y and y varies inversly as the square of Z. which of the following is the relation between x and z</p>";
choices[1] = new Array();
choices[1][0] = "<b>A.</b> x&prop;/&radic;4";
choices[1][1] = "<b>B.</b>x&prop;&radic;z";
choices[1][2] = "<b>C.</b>x&prop;z";
choices[1][3] = "<b>D.</b>x&prop;1/&radic;x<sup>2</sup>";
choices[1][4] = "<b>E.</b>x&prop;z<sup>2</sup>";
answers[1] = choices[1][3];

questions[2] = ")</b>What is the smallest number by which 3<sup>3</sup>*7 can multiply to make a perfect square?</p>";
choices[2] = new Array();
choices[2][0] = "<b>A.</b>3";
choices[2][1] = "<b>B.</b>7";
choices[2][2] = "<b>C.</b>10";
choices[2][3] = "<b>D.</b>21";
choices[2][4] = "<b>E.</b>63";
answers[2] = choices[2][3];

questions[3] = ")</b>A beaker has mass of 205g and contains 180cm<sup>3</sup> of liquid of density 0.9g/cm<sup>3</sup>.What is the total mass of the beaker and liguid</p>";
choices[3] = new Array();
choices[3][0] = "<b>A.</b>162g";
choices[3][1] = "<b>B.</b>200g";
choices[3][2] = "<b>C.</b>205g";
choices[3][3] = "<b>D.</b>367g";
choices[3][4] = "<b>E.</b>405g";
answers[3] = choices[3][3];

questions[4] = ")</b>Find the sum of all the multiples of 7 between 0 and 300.</p>";
choices[4] = new Array();
choices[4][0] = "<b>A.</b>42";
choices[4][1] = "<b>B.</b>294";
choices[4][2] = "<b>C.</b>2058";
choices[4][3] = "<b>D.</b>2107";
choices[4][4] = "<b>E.</b>6321";
answers[4] = choices[4][4];

questions[5] = ")</b> Find &radic;11001<sub><em>two</em></sub>,  expressing the answer in base two</p>";
choices[5] = new Array();
choices[5][0] = "<b>A.</b>100";
choices[5][1] = "<b>B.</b>101";
choices[5][2] = "<b>C.</b>110";
choices[5][3] = "<b>D.</b>111";
choices[5][4] = "<b>E.</b>1001";
answers[5] = choices[5][1];

questions[6] = ")</b>  simplify0.6+0.75/0.6*0.75</p>";
choices[6] = new Array();
choices[6][0] = "<b>A.</b>0";
choices[6][1] = "<b>B.</b>0.18";
choices[6][2] = "<b>C.</b>1";
choices[6][3] = "<b>D.</b>2";
choices[6][4] = "<b>E.</b>3";
answers[6] = choices[6][4];

questions[7] = ")</b> The sides of a triangle are 3cm , 4cm and 4cm .Find the size of its smallest angle, correct to the nearest whole degree</p>";
choices[7] = new Array();
choices[7][0] = "<b>A.</b>22&deg;";
choices[7][1] = "<b>B.</b>42&deg;";
choices[7][2] = "<b>C.</b>44&deg;";
choices[7][3] = "<b>D.</b>56&deg";
choices[7][4] = "<b>E.</b>68&deg";
answers[7] = choices[7][2];

questions[8] = ")</b> Solve the inequality 3(2-3x)<1-2/3x</p>";
choices[8] = new Array();
choices[8][0] = "<b>A.</b>x>3/5";
choices[8][1] = "<b>B.</b>x<3/5";
choices[8][2] = "<b>C.</b>x<-5/3";
choices[8][3] = "<b>D.</b>x<-3/5";
choices[8][4] = "<b>E.</b>x>-3/5";
answers[8] = choices[8][0];

questions[9] = ")</b> Simplify 0.0664*0.025, expressing the answer in standard form.</p>";
choices[9] = new Array();
choices[9][0] = "<b>A.</b>1.66*10<sup>-3</sup>;";
choices[9][1] = "<b>B.</b>1.66*10<sup>-4</sup>;";
choices[9][2] = "<b>C.</b>1.66*10<sup>-5</sup>;";
choices[9][3] = "<b>D.</b>1.66*10<sup>-6</sup>";
choices[9][4] = "<b>E.</b>1.66*10<sup>-7</sup>";
answers[9] = choices[9][0];

questions[10] = ")</b> if 4<sup>x-1</sup>=8, what is x?</p>";
choices[10] = new Array();
choices[10][0] = "<b>A.</b>2<sup>1</sup>&frasl;<sub>4</sub>";
choices[10][1] = "<b>B.</b>2<sup>1</sup>&frasl;<sub>2</sub>";
choices[10][2] = "<b>C.</b>3";
choices[10][3] = "<b>D.</b>5";
choices[10][4] = "<b>E.</b>33";
answers[10] = choices[10][1];

questions[11] = ")</b>Evalute log<sub>2</sub>8-log<sub>3</sub><sup>1</sup>&frasl;<sub>9</sub></p>";
choices[11] = new Array();
choices[11][0] = "<b>A.</b>-1&frac12;";
choices[11][1] = "<b>B.</b>-1";
choices[11][2] = "<b>C.</b>1";
choices[11][3] = "<b>D.</b>1&frac12;";
choices[11][4] = "<b>E.</b>5";
answers[11] = choices[11][4];

questions[12] = ")</b>If (x-a) is a factor of bx-ax+x<sup>2</sup>-ab, what is the other factor?</p>";
choices[12] = new Array();
choices[12][0] = "<b>A.</b>(x+b)";
choices[12][1] = "<b>B.</b>(b-a)";
choices[12][2] = "<b>C.</b>(x-a)";
choices[12][3] = "<b>D.</b>(a+b)";
choices[12][4] = "<b>E.</b>(a-b)";
answers[12] = choices[12][0];

questions[13] = ")</b>In a right-angled triangle, tan &theta;=<sup>4</sup>&frasl;<sub>3</sub>;. what is the value of sin &theta;-cos&theta;?</p> ";
choices[13] = new Array();
choices[13][0] = "<b>A.</b><sup>1</sup>&frasl;<sub>5</sub>";
choices[13][1] = "<b>B.</b><sup>1</sup>&frasl;<sub>4</sub>";
choices[13][2] = "<b>C.</b><sup>1</sup>&frasl;<sub>3</sub>";
choices[13][3] = "<b>D.</b><sup>5</sup>&frasl;<sub>12</sub>";
choices[13][4] = "<b>E.</b><sup>3</sup>&frasl;<sub>4</sub>";
answers[13] = choices[13][0];

questions[14] = ")</b>point X and Y are respectively 20km north and 9km east of a point O.<br> What is the area of &#9651;XOY in km<sup>2</sup>? </p>";
choices[14] = new Array();
choices[14][0] = "<b>A.</b>81km<sup>2</sup>";
choices[14][1] = "<b>B.</b>90km<sup>2</sup>";
choices[14][2] = "<b>C.</b>180km<sup>2</sup>";
choices[14][3] = "<b>D.</b>400km<sup>2</sup>";
choices[14][4] = "<b>E.</b>481km<sup>2</sup>";
answers[14] = choices[14][1];

questions[15] = ")</b>point X and Y are respectively 20km north and 9km east of a point O.<br>Find the bearing of Y from X to the nearest whole degree.</p>";
choices[15] = new Array();
choices[15][0] = "<b>A.</b>024&deg;";
choices[15][1] = "<b>B.</b>114&deg;";
choices[15][2] = "<b>C.</b>154&deg;";
choices[15][3] = "<b>D.</b>204&deg;";
choices[15][4] = "<b>E.</b>336&deg;";
answers[15] = choices[15][3];

questions[16] = ")</b>if x+<sup>1</sup>&frasl;<sub>x</sub>=3,evaluate x<sup>2</sup>+<sup>1</sup>&frasl;<sub>x<sup>2</sup></sub></p>";
choices[16] = new Array();
choices[16][0] = "<b>A.</b>3";
choices[16][1] = "<b>B.</b>5";
choices[16][2] = "<b>C.</b>7";
choices[16][3] = "<b>D.</b>9";
choices[16][4] = "<b>E.</b>11";
answers[16] = choices[16][2];

questions[17] = ")</b> A trader buys <em>t</em> tins of <em>n</em> naira and sells at <em>m</em> naira each.What is her profit</p>";
choices[17] = new Array();
choices[17][0] = "<b>A.</b>m-n";
choices[17][1] = "<b>B.</b>tm-n";
choices[17][2] = "<b>C.</b>n-mt";
choices[17][3] = "<b>D.</b>n-m";
choices[17][4] = "<b>E.</b>m-n";
answers[17] = choices[17][1];

questions[18] = ")</b>A square field has an area of 2<sup>1</sup>&frasl;<sub>2</sub> hectares.Find the lenght of a side in metres. to the nearest metres</p>";
choices[18] = new Array();
choices[18][0] = "<b>A.</b>16m";
choices[18][1] = "<b>B.</b>50m";
choices[18][2] = "<b>C.</b>158m";
choices[18][3] = "<b>D.</b>500m";
choices[18][4] = "<b>E.</b>1581m";
answers[18] = choices[18][2];

questions[19] = ")</b>The diagonals of a rhombus are 16cm and 30cm long.What is the parimeter of the rhombus?</p>";
choices[19] = new Array();
choices[19][0] = "<b>A.</b>68cm";
choices[19][1] = "<b>B.</b>72cm";
choices[19][2] = "<b>C.</b>80cm";
choices[19][3] = "<b>D.</b>88cm";
choices[19][4] = "<b>E.</b>92cm";
answers[19] = choices[19][4];



// response for getting 100%
response[0] = "Excellent, top marks!";
// response for getting 90% or more
response[1] = "Excellent, try again to get 100%!"
// response for getting 70% or more
response[2] = "Well done, that is a good score, can you do better?";
// response for getting over 50%
response[3] = "Nice one, you got more than half of the questions right, can you do better?";
// response for getting 40% or more
response[4] = "You got some questions right, you can do better!";
// response for getting 20% or more
response[5] = "You didn't do too well, why not try again!?";
// response for getting 10% or more
response[6] = "That was pretty poor!  Try again to improve!";
// response for getting 9% or less
response[7] = "Oh dear, I think you need to go back to school (or try again)!";