// Q1. Write a function `isEven` that takes a number as an argument and returns true if the number is even and false if it is odd.


// function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(8));


// Q2. Create a function `countVowels` that takes a string and returns the number of vowels in that string.


// function countVowels(myString) {
//   let vowelList = "aeiouAEIOU";
//   let total = 0;

//   for (let letter of myString) {
//     if (vowelList.includes(letter)) {
//       total++;
//     }
//   }

//   return total;
// }
// console.log(countVowels("Javascript"));



// Q3. Write a function `reverseString` that takes a string and returns it reversed (e.g., "hello" becomes "olleh").


// function reverseString(myString){
//    return myString.split("").reverse().join("");
// }
// console.log(reverseString("helloworld"));



// Q4. Create a function `findMax` that takes an array of numbers and returns the largest number.


// function findMax(myarr){
//    return Math.max(...myarr)
// }
// console.log(findMax([3, 8, 2, 10, 6]));



// Q5. Write a function `isPalindrome` that checks if a given string is a palindrome (reads the same backward as forward).


//  function isPalindrome(mystr){
//    let revers = mystr.split("").reverse().join("");
//    return mystr === revers;

//  }
//  console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello")); 



// Q6. Create a function `fibonacci` that returns the nth Fibonacci number



// function fibonacci(nth){
//    if(nth < 0) return null ;
//    if(nth === 0) return 0;
//    if(nth === 1) return 1;

//    let a = 0;
//    let b = 1;

//    for(let i= 2; i<=nth; i++){
//       let c = a + b ;
//       a = b ;
//       b = c;
//    }
//    return b;
// }
// console.log(fibonacci(9));

// q7. Write a function `factorial` that calculates the factorial of a given number.
// function factorial(x){
//    if (x < 0) return null ;
//    if (x === 0 || x === 1) return 1;

//    let outPut = 1 ;
//    for(let i = 2 ; i <= x ; i++){
//       outPut *= i ;

//    }
//    return outPut;
// }

// console.log(factorial(8));



// q8. Create a function `removeDuplicates` that takes an array and returns a new array without duplicates.


// function removeDuplicates(myArr){
//    return [... new Set(myArr)]

// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));



// Q9. Write a function `sumArray` that takes an array of numbers and returns the sum.

// function sumArr(myArr){
//    return myArr.reduce((a , b) => a + b , 0)
// }

// console.log(sumArr([1,4,5,6,7,9]));



// Q,10. Create a function `sortArray` that takes an array of numbers and returns it sorted in ascending order.

// function sortArray(myArr){
//   return myArr.sort((a , b) => a - b);
// }

// console.log(sortArray([1,4,5,6,7,9]));



// Q11 Write a function `stringLength` that returns the length of a given string.



// function stringLength(mystr){
//    return mystr.length ;
// }

// console.log(stringLength("hello"));


// Q12. Create a function `toUpperCase` that takes a string and returns it in uppercase.

function toUpperCase(mystr){
   return mystr.toUpperCase();
}
console.log(toUpperCase("maheen"));

 

