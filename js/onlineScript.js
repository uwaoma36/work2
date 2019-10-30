$(document).ready(function(){
$('#chem').on('click',chem);
$('#phys').on('click',phys);
$('#math').on('click',math);	
	 
	 function chem(){document.location="CHEM.php"}
	 function phys(){document.location="PHYSICS.php"}
	 function math(){document.location="MATHS.php"}
} 
);