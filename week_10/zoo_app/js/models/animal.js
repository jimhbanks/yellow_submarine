
//defining our zoo app object
var zooApp = zooApp || {};

zooApp.Animal = Backbone.Model.extend({
    defaults: {
      ecosystem: 'sahara',
      stripes: 0,
      gender: 'female'
    },
    initialize: function(){
      console.log('initialize run');
      this.set('animalID', zooApp.id++);
      this.on('change:stripes', function(instance){
        alert('I am a ' + instance.get('type') + ' with' + instance.get('stripes') + ' stripes')
      })
    }
  });

