var express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path");

var app = express();

var todos = [
    {
      index: 0,
      title: "Finish Laundry",
      description: "two loads left"
    },
    {
      index: 1,
      title: "Go To Gym",
      description: "Leg Day"
    }
  ];

app.use(express.static("public"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var views = path.join(process.cwd(), "views");

app.get("/", function (req, res) {
  var homePath = path.join(views, "home.html");
  res.sendFile(homePath);
});

app.get("/todos", function (req, res) {
  res.send(todos);
});

app.post("/todos", function (req, res) {
  var todo = req.body.todo;
  todo.index = todos.length;
  todos.push(todo);
  res.send(todo);
});

app.listen(3000, function () {
  console.log("Running");
});