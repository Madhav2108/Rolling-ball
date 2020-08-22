(function($) { "use strict";
              
 	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});
              
  $(document).ready(function() {    			document.getElementById("switch").addEventListener('click', function(e) {
			document.getElementById("link").play();
	  	});    
			document.getElementById("portfolio").addEventListener('click', function(e) {
			document.getElementById("link").play();
	  	});      
  });  
              
})(jQuery);