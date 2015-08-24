var string = 'scaffolding';
var reversedString = '';
 
for(var i = string.length - 1; i >= 0; i--) {
  reversedString += string[i];
}
 
console.log(reversedString);