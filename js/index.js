console.log("Your index.js file is loaded correclty!!");
$(document).ready(function() {
  // grab the initial top offset of the navigation 
     var stickyNavTop = $('.nav').offset().top;
     
     // our function that decides whether the navigation bar should have "fixed" css position or not.
     var stickyNav = function(){
      var scrollTop = $(window).scrollTop(); // our current vertical position from the top
           
      // if we've scrolled more than the navigation, change its position to fixed to stick to top,
      // otherwise change it back to relative
      if (scrollTop > stickyNavTop) { 
          $('.nav').addClass('sticky');
      } else {
          $('.nav').removeClass('sticky'); 
      }
  };

  stickyNav();
  // and run it again every time you scroll
  $(window).scroll(function() {
    stickyNav();
  });

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
});