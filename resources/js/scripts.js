$(document).ready(function() {
    
    
    /* STICKY NAV */
   $('.jss--section-aboutme').waypoint(function(direction) {
     if (direction == "down") {
         $('nav').addClass('sticky');
     }  else {
         $('nav').removeClass('sticky');
     }
   })
    
    
    /* SCROLL ON BUTTONS */
    $('.jss-scroll-to-contact').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
    })
    
    $('.jss-scroll-to-aboutme').click(function(){
        $('html, body').animate({scrollTop: $('.jss--section-aboutme').offset().top}, 1000);
    })
    
    
    /* NAVIGATION SCROLL */
    
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });
    
    
    /* MOBILE NAVIGATION */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('js--nav-icon ion-icon')
        
        nav.slideToggle(200);
        
    })
    
    

});