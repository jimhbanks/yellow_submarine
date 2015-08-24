var eventClickButton = document.getElementById('clicker');

eventClickButton.addEventListener('click', function() {
  alert('I have been clicked!');
});

var eventMouseOver = document.getElementById('mouser');

eventMouseOver.addEventListener('mouseover', function(){
  this.style.backgroundColor = 'yellow';
});

var eventMouseOut = document.getElementById('mouser');

eventMouseOut.addEventListener('mouseout', function(){
  this.style.backgroundColor = 'green';
});

var subform = document.getElementById('former');
subform.addEventListener('submit', function(){
  event.preventDefault();
  alert(this.term.value);
});

var clickList = document.getElementById('vegetables');

clickList.addEventListener('click', function(event){
 alert(event.target);
});








     
