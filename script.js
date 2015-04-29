var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
  $('form').submit(function() {
  
  var text = $('#todo').val(), 
			html = template(text); 
  
  // console.log(html);     
    
   $('.list').append(html); 
   $('#todo').val(""); 


    return false;  
  
  }); 
  
  
};

// $('.glyphicon-star').click(function() {
// 	$(this).toggleClass("active"); 

// }); 

// $('.glyphicon-star').on("click",(function() {
// 	$(this).toggleClass("active"); 

// }); 

$(".list").on("click",".glyphicon-star",  function() {
	$(this).toggleClass("active"); 
}); 

$(".list").on(".click",".glyphicon-remove", function() {
  $(this).closet("p").remove(); 

  //.closet 
  //.find 


})

}; 


$(document).ready(main);