
// Returns var list as "I LIKE xxxxx"
//  var foods = ["pizza", "tacos", "ice cream"];

// foods.forEach(function(food){
//    console.log('I ' + 'like ' + food);
//     return food;
// });



//  makes all names CAPITAL and reverses them
//      var instructors = ['Jeremy', 'James', 'Lauren', 'Mathilda'] 
//           var instructorsReversed =  instructors.map(function(instructors){
//                 console.log(instructors.toUpperCase().split('').reverse().join(''));
//                          return instructors.toUpperCase().split('').reverse().join('');
//         });



  // finds the median to 2 decimal places
// var numbers = [7, 8,  3, 45,  67,   345,  23,  890, 675];

//      var sum = numbers.reduce(function(previousValue, currentValue) {
      
//       return previousValue + currentValue;
//       });    
               

//       var mean =  sum / numbers.length;
//         console.log(mean.toFixed(2));
          




// lines the hash from one at 'line 1' and 7 # at 'line 7'
// var hash = ''
// for (i = 0; i <7;i++){
//   hash = hash + "#" ;
//   console.log(hash);
// }


// filter the array to only contain the numbers bigger than 53

var numbers = [12, 5, 8, 130, 44]; {
var biggerThanNumber = number.filter(function(number)
return number > 53;
});

console.log(biggerThanNumber);

var numbersDoubled = numbers.map(function(number){
  return number * 2;
   )};

console.log(numbersDoubled)

var totalNums = numbersDoubled. reduce(function(initialNumber, currentNumber) {
return initialNumber +currentNumber;

}));






