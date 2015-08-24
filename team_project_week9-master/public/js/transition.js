$(document).ready(function(){
  var isAnimating = false,
    firstLoad = false;


  $('main').on('click', '[data-type="page-transition"]', function(event){
    event.preventDefault();
    //detect which page has been selected
    var newPage = $(this).attr('href');
    //if the page is not animating - trigger animation
    if( !isAnimating ) changePage(newPage, true);
  });

  function changePage(url, bool) {
    isAnimating = true;
    // trigger page animation
    $('body').addClass('page-is-changing');
    $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
      loadNewContent(url, bool);
      $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    });
    //if browser doesn't support CSS transitions
    if( !transitionsSupported() ) loadNewContent(url, bool);
  }

    function loadNewContent(url, bool) {
        url = ('' == url) ? 'index.html' : url;
        // debugger;
        var newSection = url;
        var section = $('<div class="cd-main-content '+newSection+'"></div>');
          
        section.load(url, function(event){
          // load new content and replace <main> content with the new one
          $('main').html(section);
          //if browser doesn't support CSS transitions - dont wait for the end of transitions
          var delay = ( transitionsSupported() ) ? 1200 : 0;
          
          setTimeout(function(){
            //wait for the end of the transition on the loading bar before revealing the new content
            ( section.hasClass('cd-about') ) ? $('body').addClass('cd-about') : $('body').removeClass('cd-about');
            $('body').removeClass('page-is-changing');
            $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
              isAnimating = false;
              $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
            });

            if( !transitionsSupported() ) isAnimating = false;
          }, delay);
          
          if(url!=window.location && bool){
            //no idea what used to be here ¯\_(ツ)_/¯
          }
        });
      }
  function transitionsSupported() {
    return $('html').hasClass('csstransitions');
  }

});


