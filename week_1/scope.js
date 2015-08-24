//  var foods = ["pizza", "tacos", "ice cream"];

// foods.forEach(function(food){
//    console.log('I ' + 'like ' + food);
//     return food;
// });




//      var instructors = ['Jeremy', 'James', 'Lauren', 'Mathilda'] 
//           var instructorsReversed =  instructors.map(function(instructors){
//                 console.log(instructors.toUpperCase().split('').reverse().join(''));
//                          return instructors.toUpperCase().split('').reverse().join('');
//         });


var numbers = [7, 8,  3, 45,  67,   345,  23,  890, 675];

     var sum = numbers.reduce(function(previousValue, currentValue) {
      
      return previousValue + currentValue;
      });    
               

      var mean =  sum / numbers.length;
        console.log(mean.toFixed(2));
          





// var hash = ''
// for (i = 0; i <7;i++){
//   hash = hash + "#" ;
//   console.log(hash);
// }



