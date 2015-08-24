$(document).ready(function() {

  soundManager.setup({
    url: 'swf/',
    flashVersion: 9,
    preferFlash: false,
    onready: function() {
      
    }
  });

  function playSound(filename) {
    var sound = soundManager.createSound({
      url: 'sounds/' + filename
    });
    sound.play();
  }

  function playInstrumental() {
    var instrumental = soundManager.getSoundById('instrumental');
    if(typeof instrumental === 'undefined') {
      var sound = soundManager.createSound({
        id: 'instrumental',
        url: 'sounds/instrumental.mp3'
      });
      sound.play();
    } else {
      soundManager.togglePause('instrumental');
    }
  }

  var key = {
    113: 'q',
    119: 'w'
  };

  function highlightKey(keyCode) {
    $('li').removeClass('active');
    // $('ul.row').find('li').removeClass('active');
    $('#' + key[keyCode]).addClass('active');
  }

  function resetInstrumental() {
    soundManager.setPosition('instrumental', 0);
  }

  $(document).on('keypress', function(e) {
    // console.log(e.keyCode);
    switch(e.keyCode) {
      case 32:
        playInstrumental();
        break;
      case 113:
        highlightKey(e.keyCode);
        playSound('work it.wav');
        break;
      case 119:
        highlightKey(e.keyCode);
        playSound('harder.wav');
        break;
      case 109:
        resetInstrumental();
        break;
      default:
        console.log('no sound for you :/');
    }
  });
});