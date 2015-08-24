$(function () {
  $.get("/todos").
    done(function (data) {
      // console.log("RECEIVING RESPONSE");
      // console.log("DATA", data);
      $(data).each(function (index, todo) {
        var $todo = $("<div class=todo>" + todo.title + " ---- " + todo.description + "</div>");
        $("div.todosCon").append($todo);
      });
    });
  $("#newTodo").on("submit", function () {
    var $this = $(this);
    var formData = $this.serialize();
    console.log(formData);
    $.post("/todos", formData).
      done(function (data) {
        $(data).each(function (index, todo) {
          var $todo = $("<div class=todo>" + todo.title + " ---- " + todo.description + "</div>");
          $("div.todosCon").append($todo);
        });
      });
  });
});

