(function($){
  $(function(){

		if ( $(window).width() < 992) {
     $('.button-collapse').sideNav({
				menuWidth: 300, // Default is 240
				closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
				draggable: true // Choose whether you can drag to open on touch screens
			});
		} 
    
    $('.materialboxed').materialbox();
    
    $('.scrollspy').scrollSpy();

  }); // end of document ready
})(jQuery); // end of jQuery name space