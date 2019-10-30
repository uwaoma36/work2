 $(document).ready( 
function (){ 

function ada(){ $("#chem").css("color","red").animate( {top:"300px"},10000).animate( {top:"200px"},10000). css("color","pink").animate( {left:"350px"},10000). css("color","black").animate( {left:"150px"},10000). css("color","red").animate( {top:"40px",left:"100px"},10000). css("color","grey").animate( {top:"",left:"100px"},10000).css("color","yellow").slideDown(1000,function(){ada();});
 
 $("#phys").css("color","red").animate( {left:"100px"},10000).animate( {top:"200px"},10000). css("color","pink").animate( {left:"100px"},10000). css("color","black").animate( {right:""},10000). css("color","red").animate( {left:"40px",left:"100px"},10000).css("color","grey").animate( {top:"400px",right:"100px"},10000).css("color","yellow").slideDown(1000,function(){ada();});
 $("#math").css("color","red").animate( {left:"100px"},10000).animate( {top:"250px"},10000). css("color","pink").animate( {right:"100px"},10000). css("color","black").animate( {left:"350px"},10000). css("color","red").animate( {right:"40px",left:"100px"},10000).css("color","grey").animate( {top:"200px",left:"100px"},10000).css("color","yellow").slideDown(1000,function(){ada();});} 
ada();

}) ;

 