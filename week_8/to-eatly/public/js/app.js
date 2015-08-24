// this is called namespacing
var Food = Food || {};
var View = View || {};

$(document).ready(function() {
  // Looks like Rails!
  Food.all();
  View.initialise();
});

View = {
  initialise: function() {
    $('#food-form').on('submit', function(e) {
      e.preventDefault();
      Food.create($(this).serialize());
    });
    // Event delegation
    $('#food-ul').on('click', '.js-close', function(e) {
      Food.delete($(this).data('id'));
    });

  }
}

Food = {
  all: function() {
    $.get('/foods', function(response) {
      var foods = JSON.parse(response)
      $.each(foods, function(index, food) {
        var template = '<li class="list-group-item">';
        template += food.name;
        template += '<span class="label label-default">' + food.yumminess + '</span>';
        template += '<button data-id="' + food.id + '" type="button" class="js-close close" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
        template += '</li>';
        $('#food-ul').append(template);
      })
    });
  },
  create: function(foodParams) {
    $.post('/foods', foodParams)
    .done(function(response) {
      var food = JSON.parse(response);
      var template = '<li class="list-group-item">';
      template += food.name;
      template += '<span class="label label-default">' + food.yumminess + '</span>';
      template += '<button data-id="' + food.id + '" type="button" class="js-close close" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
      template += '</li>';
      $('#food-ul').append(template);
    })
    .done(function() {
      $('#food-form').trigger('reset');
    })
  },
  delete: function(foodId) {
    $.ajax({
      url: '/foods/' + foodId,
      type: 'DELETE'
    })
    .done(function(response) {
      console.log(response);
      $('#food-ul').empty();
      Food.all();
    });
  }

}















