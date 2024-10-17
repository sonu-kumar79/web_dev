// function fun(){
//   console.log("Hi my name is sonu kumar");
// }
// fun();


// function sum(a,b){
//   s = a + b;
//   return s;
// }
// let value = sum(7, 7);
// console.log(value);



// // arrow function
// const multiplication = (a, b) => {
//   return (a*b);
// }
// let value = multiplication(5 , 6);
// console.log(value);



//practice Q1 count vowel
function countVowel(str){
  let count = 0;
  for(const char of str){
    if( char === 'a' || 
        char === 'e' || 
        char === 'i' || 
        char === 'o' ||
        char === 'u'
      ) 
    count++;
  }
  return count;
}
let str = prompt("Enter a string :");
let value = countVowel(str);
console.log(value);