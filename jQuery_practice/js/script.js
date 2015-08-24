// native js code
// var showPortfolio = function(){
//   document.getElementsByClassName('secret_message')[0].className = 'secret_message';
// };

// var setUpEventListeners = function (){
//   var helloButton = document.getElementById('helloButton');
//   helloButton.addEventListener('click', showPortfolio);
// };


// var initialize = function(){
//   document.getElementsByTagName('section')[0].className = '';
//   document.getElementsByClassName('message')[0].className = 'hidden';
// };

// initialize();
// setUpEventListeners();

// jquery conversion

//console.log($('section'), 'is the boooody selected?');

var showPortfolio = function(event){
  $('secret_message').toggleClass('hidden');
};  

var setUpEventListeners = function(){
  $('#helloButton').on('click', showPortfolio);
  $('li').on('mouseover', function(){
   $('li a').removeClass('active');
   debugger;
   $(this).addClass('active');  
  });

  $('li').on('mouseout', function(){
  $(this).removeClass('active');
  });
};

var initialize = function(){
  $('section').removeClass('no_js');
  $('.message').addClass('hidden');
};
$(document).ready(function(){
  setUpEventListeners();
initialize();
});