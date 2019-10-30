/* ignatius uwaoma project for mobile app quiz platform
 PHYSICS question module*/
var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
subject="physics";
// To add more questions, just follow the format below.

questions[0] = "<p><b>1)</b> A Palm fruit dropped to the  ground from the top of a tree 45m tall. How long does it take to reach the ground? </p><br><p>(g=10ms<sup>-1</sup>) </sup>";
choices[0] = new Array();
choices[0][0] = "<b>A.</b>9s";
choices[0][1] = "<b>B.</b>4s";
choices[0][2] = "<b>C.</b>6s";
choices[0][3] = "<b>D.</b>7.5s";
choices[0][4] = "<b>E.</b>3s"
answers[0] = choices[0][4];

questions[1] = "<p><b>2)</b>A piece of rubber  10cm long stretches  6mm when a load of 100N is hung from it. what is the stain? </p>";
choices[1] = new Array();
choices[1][0] = "<b>A.</b>60";
choices[1][1] = "<b>B.</b>6";
choices[1][2] = "<b>C.</b> 6*10<sup >-2</sup> ";
choices[1][3] = "<b>D.</b> 6*10<sup>-3</sup> ";
choices[1][4] = "<b>E.</b>0.6";
answers[1] = choices[1][2];

questions[2] = "<p><b>3)</b>A machine gun with mass of 5kg fires a 50g bullet at a speed of 100ms<sup>-1</sup> the recoil speed of the machine gun is</p>";
choices[2] = new Array();
choices[2][0] = "<b>A.</b>0.5m/sec";
choices[2][1] = "<b>B.</b>1.5m/sec";
choices[2][2] = "<b>C.</b>1m/sec";
choices[2][3] = "<b>D.</b>2m/sec";
choices[2][4] = "<b>E.</b>4m/sec";
answers[2] = choices[2][2];

questions[3] = "<p><b>4)</b>A temperature of 20&deg;C is the same as</p>";
choices[3] = new Array();
choices[3][0] = "<b>A.</b>36&deg;F";
choices[3][1] = "<b>B.</b>68&deg;F";
choices[3][2] = "<b>C.</b>11.1&deg;F";
choices[3][3] = "<b>D.</b>43.1&deg;F";
choices[3][4] = "<b>E.</b>25&deg;F";
answers[3] = choices[3][1];

questions[4] = "<p><b>5)</b>The heat from the sun reaches the earth by the process of </p>";
choices[4] = new Array();
choices[4][0] = "<b>A.</b>Insulation";
choices[4][1] = "<b>B.</b>precipitation";
choices[4][2] = "<b>C.</b>conduction";
choices[4][3] = "<b>D.</b>convenction";
choices[4][4] = "<b>E.</b>radiation";
answers[4] = choices[4][4];

questions[5] = "<p><b>6)</b>The amount of heat required to raise  the temperature  of body is</p>";
choices[5] = new Array();
choices[5][0] = "<b>A.</b>thermal energy ";
choices[5][1] = "<b>B.</b>thermal conduction";
choices[5][2] = "<b>C.</b>heat lost";
choices[5][3] = "<b>D.</b>specific heat capacity";
choices[5][4] = "<b>E.</b>thermal capacity";
answers[5] = choices[5][3];

questions[6] = "<p><b>6)</b>Two lamps rated 40W and 220W each are connected in series. The total power dissipated in both lamps is</p>";
choices[6] = new Array();
choices[6][0] = "<b>A.</b>10W";
choices[6][1] = "<b>B.</b>20W";
choices[6][2] = "<b>C.</b>40W";
choices[6][3] = "<b>D.</b>80W";
choices[6][4] = "<b>E.</b>none of the above";
answers[6] = choices[6][3];

questions[7] = "<p><b>7)</b>A guitar string is 75cm long. The wavelength of its fundamental note is</p>";
choices[7] = new Array();
choices[7][0] = "<b>A.</b>75cm";
choices[7][1] = "<b>B.</b>150cm";
choices[7][2] = "<b>C.</b>37.5cm";
choices[7][3] = "<b>D.</b>112.5cm";
choices[7][4] = "<b>E.</b>50cm";
answers[7] = choices[7][1];

questions[8] = "<p><b>8)</b>An object 1cm high placed on the axis 15cm from a converging lens forms an image 30cm from the lens. The size of the image is</p>";
choices[8] = new Array();
choices[8][0] = "<b>A.</b>0.5cm";
choices[8][1] = "<b>B.</b>1.5cm";
choices[8][2] = "<b>C.</b>3cm";
choices[8][3] = "<b>D.</b>2.5cm";
choices[8][4] = "<b>E.</b>2cm";
answers[8] = choices[8][4];

questions[9] = "<p><b>9)</b>If N.E.P.A charges 5k per Kwh, What is the cost of operating foe 24 hours a lamp requiring 1A on a 200V line</p>";
choices[9] = new Array();
choices[9][0] = "<b>A.</b>24K";
choices[9][1] = "<b>B.</b>55K";
choices[9][2] = "<b>C.</b>40K";
choices[9][3] = "<b>D.</b>26K";
choices[9][4] = "<b>E.</b>32K";
answers[9] = choices[9][0];

questions[10] = "<p><b>10)</b>An electric charge could be transmitted through </p>";
choices[10] = new Array();
choices[10][0] = "<b>A.</b>Wood,rubber and stone. ";
choices[10][1] = "<b>B.</b>Paper,Clay and plastic.";
choices[10][2] = "<b>C.</b>glass acid, and cloth.";
choices[10][3] = "<b>D.</b>the human body, water and metal.";
choices[10][4] = "<b>E.</b>all of the above.";
answers[10] = choices[10][1];

questions[11] = "<p><b>11)</b>The heat from the sun reaches the earth by the process</p>";
choices[11] = new Array();
choices[11][0] = "<b>A.</b>Insulation";
choices[11][1] = "<b>B.</b>Precipitation";
choices[11][2] = "<b>C.</b>conduction";
choices[11][3] = "<b>D.</b>Convection";
choices[11][4] = "<b>E.</b>Radiation";
answers[11] = choices[11][4];

questions[12] = "<p><b>12)</b>Every house supplied with electricity is provided with a box of fuses so that</p>";
choices[12] = new Array();
choices[12][0] = "<b>A.</b>the consumption of electricity can be recorded. ";
choices[12][1] = "<b>B.</b>people residing in the house will not have an electric shock if they touch a live wire.";
choices[12][2] = "<b>C.</b>the totalcurrent drawn from the mains can be limited .";
choices[12][3] = "<b>D.</b>the voltage supply can be stabilised. ";
choices[12][4] = "<b>E.</b>it serves as a standby supply when there is a power failure.";
answers[12] = choices[12][3];

questions[13] = "<p><b>13)</b>A man walks 1KM due east and then 1Km deu north his displacement.</p>";
choices[13] = new Array();
choices[13][0] = "<b>A.</b>1KM 15 E";
choices[13][1] = "<b>B.</b>1KM N30&deg;E";
choices[13][2] = "<b>C.</b>&radic;2KM N45&deg;E";
choices[13][3] = "<b>D.</b>&radic;2KM N60&deg;E";
choices[13][4] = "<b>E.</b>2KM N75&deg;E";
answers[13] = choices[13][2];

questions[14] = "<p><b>14)</b>The internationally agreed system of units (SI) for physical measurement are </p>";
choices[14] = new Array();
choices[14][0] = "<b>A.</b>lb,ft,sec";
choices[14][1] = "<b>B.</b>g,m,sec";
choices[14][2] = "<b>C.</b>kg,m,sec";
choices[14][3] = "<b>D.</b>cm,g,sec";
choices[14][4] = "<b>E.</b>kg,cm,sec";
answers[14] = choices[14][3];

questions[15] = "<p><b>15)</b>The force required to make an object of mass <em>m</em> traveling with velocity V, turn in a circle of radius r is</p>";
choices[15] = new Array();
choices[15][0] = "<b>A.</b>mv<sup>2</sup>/r";
choices[15][1] = "<b>B.</b></b>mr<sup>2</sup>/v";
choices[15][2] = "<b>C.</b></b>mr/v";
choices[15][3] = "<b>D.</b></b>mv/r<sup>2</sup>";
choices[15][4] = "<b>E.</b>mv&frasl;r";
answers[15] = choices[15][2];

questions[16] = "<p><b>16)</b>Three 5 ohms resistors connected in parallel have apotential difference of 60v applied across the combination.The current in each resistor is </p>";
choices[16] = new Array();
choices[16][0] = "<b>A.</b>4A";
choices[16][1] = "<b>B.</b>36A";
choices[16][2] = "<b>C.</b>12A";
choices[16][3] = "<b>D.</b>24A";
choices[16][4] = "<b>E.</b>10A";
answers[16] = choices[16][0];

questions[17] = "<p><b>17)</b>In a D.C circuit, a 10 microfarad (mf) capacitor is placed series with a 10ohm resistor.The total resistance of the combination is </p>";
choices[17] = new Array();
choices[17][0] = "<b>A.</b>10 ohms";
choices[17][1] = "<b>B.</b> 1 ohm";
choices[17][2] = "<b>C.</b> Zero";
choices[17][3] = "<b>D.</b>20 ohms";
choices[17][4] = "<b>E.</b> infinite";
answers[17] = choices[17][2];

questions[18] = "<p><b>18)</b>A potential difference of 6v is used to produce a current of 5A for 200s through a heating coil.The heat produced is.</p>";
choices[18] = new Array();
choices[18][0] = "<b>A.</b>4800cal";
choices[18][1] = "<b>B.</b>6000cal";
choices[18][2] = "<b>C.</b>240J";
choices[18][3] = "<b>D.</b>240Kcal";
choices[18][4] = "<b>E.</b>6000J";
answers[18] = choices[18][4];

questions[19] = "<p><b>19)</b>A few grains of table salt were put in a cup of cold water, kept at constant temperature and left undisturbed.Eventually all the water tasted salty.This action is due to</p>";
choices[19] = new Array();
choices[19][0] = "<b>A.</b>convention";
choices[19][1] = "<b>B.</b>Osmosis";
choices[19][2] = "<b>C.</b>capillary";
choices[19][3] = "<b>D.</b>diffusion";
choices[19][4] = "<b>E.</b>conductivity";
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