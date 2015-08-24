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
  },
  render: function(templateElement, object, parentElement) {
    var template = templateElement.html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, object);
    parentElement.append(rendered);
  }
}

Food = {
  all: function() {
    $.get('/foods', function(response) {
      var foods = JSON.parse(response);
      $.each(foods, function(index, food) {
        View.render($('#food-item-template'), food, $('#food-ul'));
      })
    });
  },
  create: function(foodParams) {
    console.log('foodParams');
    $.post('/foods', foodParams)
    .done(function(response) {
      var food = response;
      View.render($('#food-item-template'), response, $('#food-ul'));
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
