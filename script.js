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

// function toUpperCase(mystr){
//    return mystr.toUpperCase();
// }
// console.log(toUpperCase("maheen"));

// 13. Write a function `capitalizeFirstLetter` that capitalizes the first letter of each word in a string.

// function capitalizeFirstLetter(mystr){
//    return mystr.split("  ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join();
// }

// console.log(capitalizeFirstLetter("hello world"));

// Q14 Create a function `mergeArrays` that takes two arrays and merges them into one

// function mergeArrays(myArr1 , myArr2){
//    return [...myArr1, ...myArr2];
// }
// console.log(mergeArrays([1,2,4,5,6],[3,4,5,6]));

// Q15 Write a function `isPrime` that checks if a number is prime.

// function isPrime(myNum){
//    if( myNum <= 1) return false ;
//    if( myNum === 2) return true ;

//    for(let i = 2 ; i <= Math.sqrt(myNum) ; i++){
//       if(myNum % i === 0){
//          return false;
//       }

//    }
//    return true;

// }
//  console.log(isPrime(7));

// Q16. Create a function `countWords` that counts the number of words in a string.

// function countWords(myStr){
//    let words = myStr.trim().split(/\s+/);

//    return myStr.trim() === ""  ? 0 : words.length;
// }
// console.log(countWords("   This is   a test "));

// Q17. Write a function `arrayContains` that checks if an array contains a specific value.

// function arrayContains(myArr, value){

//    return myArr.includes(value);

// }
// console.log(arrayContains([1, 2, 3, 4], 5));

// Q8. Create a function `uniqueElements` that returns an array of unique elements from a given array.

// function uniqueElements(myArr){

//    return [... new Set(myArr)]

// }

// console.log(uniqueElements(["apple", "banana", "apple", "mango"]));

// Q19. Write a function `flattenArray` that flattens a nested array.

// function flattenArray(myArr){

//    return myArr.flat(Infinity);
// }

// console.log(flattenArray([[["a"]], ["b", ["c"]]]));

// Q20. Create a function `repeatString` that takes a string and a number, and returns the string repeated that many times.

// function repeatString(myStr , num){
//    return myStr.repeat(num);

// }

// console.log(repeatString("maheen", 4));

// Q21. Write a function `getRandomInt` that returns a random integer between two numbers.

// function getRandomInt(num1, num2) {
//   return Math.floor(Math.random() * (num2 - num1 + 1) + num1);
// }

// console.log(getRandomInt(2, 12));

// Q22. Create a function `average` that calculates the average of an array of numbers.

// function average(myArr){
//    if(myArr.length === 0) return 0 ;

//    let sum = myArr.reduce((accu , num) =>  accu + num , 0);

//    return sum / myArr.length
// }

// console.log(average([10,20,30]));

// Q23. Write a function `removeSpaces` that removes all spaces from a string.

// function removeSpaces(myStr){
//    return myStr.replace(/\s+/g , "");
// }
// console.log(removeSpaces("hello world maheen"));

// Q24. Create a function `difference` that returns the difference between the largest and smallest numbers in an array.

// function difference(myArr){
//    if(myArr.length === 0) return 0;
//    let largest = Math.max(... myArr);
//    let smallest = Math.min(... myArr);

//    return largest - smallest;
// }

// console.log(difference([10, 20, 30, 40]));

// Q25. Write a function `shuffledArray` that takes an array and returns it shuffled randomly.

// function shuffledArray(myArr){
//    let newArr = myArr.slice();

//    for(let i = newArr.length - 1 ; i > 0 ; i--){
//       let j = Math.floor(Math.random() * (i + 1));
//       [newArr[i],newArr[j]] = [newArr[j],newArr[i]];
//    }
//    return newArr;

// }
// console.log(shuffledArray([1, 2, 3, 4, 5]));

//  Q26. Create a function `longestWord` that returns the longest word in a string.

// function longestWord(myStr){

//    let words = myStr.match(/\w+/g, "");
//    if(!words) return "";

//    return words.reduce((longest , current) => current.length > longest.length ? current : longest , "" )

// }console.log(longestWord("JavaScript is amazing!!!"));

// Q27. Write a function `countDown` that takes a number and counts down to zero, logging each number.

// function countDown(myNum){
//    for(i = myNum ; i >= 0 ; i--){
//       console.log(i);

//    }
// }

// console.log(countDown(9));

// Q28. Create a function `firstNonRepeatingChar` that finds the first non-repeating character in a string.

// function firstNonRepeatingChar(myStr){
//    const nonRepeat = new Map();

//     for (const char of myStr) {
//     nonRepeat.set(char, (nonRepeat.get(char) || 0) + 1);
//   }
//     for (const [char, count] of nonRepeat) {
//     if (count === 1) {
//       return char;
//     }
//   }

//   return null;
// }
// console.log(firstNonRepeatingChar(""));

// Q29. Write a function `toTitleCase` that converts a string to title case.

// function toTitleCase(myStr) {
//   return myStr.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
// }
// console.log(toTitleCase("hello my name is maheen zuhra"));

// Q30. Create a function `removeElement` that removes a specified element from an array.

// function removeElement(myArr, element) {
//   return myArr.filter(item => item !== element);
// }
// console.log(removeElement([1, 2, 3, 4], 3));

// 31. Write a function `swap` that swaps the values of two variables.

// function swap(varA , varB){
//     [varA, varB] = [varB, varA]
//     return [varA, varB];
// }
// let [varA, varB] = swap(5, 10);
// console.log(varA, varB);

// Q32. Create a function `countOccurrences` that counts how many times a specific value appears in an array.

// function countOccurrences(myArr , value){
//     return myArr.filter(item  => item === value).length;
// }
// console.log(countOccurrences([1,2,4,5,6,4,6,3,4], 4));

