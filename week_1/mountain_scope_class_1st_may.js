// var x = "outside";

// var f1 = function() {
//   var x = "inside f1";
// };
// f1();
// console.log(x);  //outside
  

// var f2 = function() {
//   x = "inside f2";
// };
// f2();
// console.log(x); //inside
  


var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());


// → ___/''''\______/'\_


var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(6);
  mountain(8);
  flat(15);
  mountain(2);
  flat(2);
  return result;
};

