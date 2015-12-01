$(document).ready(function()
{
	/*
	//resize
	$(window).resize(function(){
        $(".full_height").height($(document).height());
    });
	*/

	
    $(document).on("scroll", onScroll);

     //smoothscroll src: http://jsfiddle.net/cse_tushar/Dxtyu/141/
    $('a[href^="#"]').on('click', function (e) {
    	var ypos_offset = 50;
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-ypos_offset
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });


//Set popup on grid items mouseenter
$('.tint').on('mouseenter', function() {
		$(this).addClass("tint_highlight");
		$(this).find('.grid_popup').fadeIn();
  });
	$('.tint').on('mouseleave', function() {
		$(this).removeClass("tint_highlight");
		$(this).find('.grid_popup').fadeOut();
  });
});

//Set active the correct sections in the nav-bar, src: http://jsfiddle.net/cse_tushar/Dxtyu/141/
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    var ypos_offset = 100;
    $('.href_content a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - ypos_offset <= scrollPos && refElement.position().top + refElement.height() - ypos_offset > scrollPos) {
            //$('#navbar ul li a').removeClass("active");
            //currLink.addClass("active");
            currLink.parent().addClass("active");
        }
        else{
            currLink.parent().removeClass("active");
        }
    });
}