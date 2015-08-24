$( document ).ready(function() {
  $('.gameshow').hover(function(){
    $(this).find("p").toggleClass('invisible').fadeIn(500);
  })

  $('#searchClicked').on('click',function(e){
    e.preventDefault();
    $.get("/gamesearch/"+$('#searchQuery').val(), function(response) {
      $('#main-games-container').empty();
      $('#main-games-container').html(response);

      $('.gameshow').on('click',function(){
         $.get("/show/"+$(this).children()[0].id, function(response) {
          $('#showGame').html(response);
        });
      });
    });
  });

  $('#platforms-clicked').on('click',function(e){
    e.preventDefault();
    $.get("/platforms/", function(response) {
      $('#main-games-container').empty();
      $('#main-games-container').html(response);
    });
  });

  $('#animateGame').on('click',function(e){
    console.log('clicked');
  });
  setTimeout(function(){
    $('.game-tile-div').toggleClass('animated fadeInDown');
   
    // $("#logo").show().delay(5000);
  }, 200);
  setTimeout(function(){
    $("#logo").toggleClass('invisible');
    $("#logo").toggleClass('animated fadeIn');
  }, 2500);
  setTimeout(function(){
    $("#search").toggleClass('invisible');
    $("#search").toggleClass('animated fadeIn');
  }, 3500);
});


