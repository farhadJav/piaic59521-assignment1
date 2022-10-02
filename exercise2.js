//written by: Farhad Javed
// Prints a string in lowercase,uppercase and title case
let name = 'farhad javed';
console.log (name.toUpperCase());
console.log (name.toLowerCase());
titlecase(name);


function titlecase(string){
var sentence = name.toLowerCase().split(" ");
      for(var i = 0; i< sentence.length; i++){
         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);

      }
  console.log(sentence.join(' '));
   }

