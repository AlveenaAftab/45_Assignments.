/**24. More Conditional Tests: 
You don’t have to limit the number of tests you create to 10. If you want to try more 
comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in an array
• Test whether an item is not in an array */

//• Tests for equality and inequality with strings
const string1: string = "hey";
const string2: string = "life";

console.log(string1 === string2); //false
console.log(string1 !== string2); //true

//• Tests using the lower case function
const upperCase: string = "HELLO";
const lowerCase: string = "hello";

console.log(upperCase.toLowerCase() === lowerCase.toLowerCase()); //true

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal

const number1: number = 10;
const number2: number = 20;

console.log(number1 === number2); //false
console.log(number1 !== number2); //true

console.log(number1 > number2); //false
console.log(number1 < number2); //true

console.log(number1 >= number2); //false
console.log(number1 <= number2); //true

//• Tests using "and" and "or" operators

const a: number = 10;
const b: number = 20;
const c: number = 30;

console.log(a < b && b < c); //true
console.log(a > b || b < c); //true

//• Test whether an item is in an array //method use index off include,error old but new index

const array1: number[] = [1,2,3,4,5,6];
const itemToFind : number = 3;

console.log(array1.indexOf(itemToFind) !== -1 ); //true

//• Test whether an item is not in an array //when no array found -1 returns so result will be true

console.log(array1.indexOf(10) === -1); //true

