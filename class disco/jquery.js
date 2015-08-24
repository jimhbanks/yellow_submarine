function randomColourValue() {
  return math.floor(Math.random() * 255);
}

function randomColourValue () {
  var red = randomColourValue();
   var green = randomColourValue();
    var blue = randomColourValue();

return 'rgb(' + red ',' + blue + ',' + green + ')';
} 

$(document).ready(fucntion(){
  $('disco').each(function(index, element) {
    setInterval(function(){
      $(element).css('color', randomColour());
    }, 200)
    )
  }
})
}