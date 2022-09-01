// ### CHALLENGE 1: REVERSE A STRING
// // Return a string in reverse
// //  ex:
// reverseString('hello') === 'olleh'
console.log("-----CHALLENGE 1: REVERSE A STRING-----");

// const reverse = "hello"
// let newString = "";
// for (let i = reverse.length - 1; i >= 0; i--) {
//     newString += reverse[i];
// }

// console.log(newString);

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));


console.log("-----CHALLENGE 2: VALIDATE A PALINDROME-----");
// #### CHALLENGE 2: VALIDATE A PALINDROME
// // Return true if palindrome and false if not
// // ex:

function isPalindrome(str) {

        if (reverseString(str) === str) {
            return true
        }
        else {
            return false
        }

}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

// isPalindrome('racecar') === true;
// isPalindrome('hello') == false;

console.log("-----CHALLENGE 3: REVERSE AN INTEGER-----");
// ### CHALLENGE 3: REVERSE AN INTEGER
// // Return an integer in reverse
// // ex:

function reverseInt (num) {
    num = num + "";
    return num.split("").reverse().join("")
}
console.log(reverseInt(521));

console.log("-----CHALLENGE 4: CAPITALIZE LETTERS-----");
// ### CHALLENGE 4: CAPITALIZE LETTERS
// // Return a string with the first letter of every word capitalized
// //  ex:
function capitalizeLetters(str) {
    // const words = str.split(" ");
    // // for (let i = 0; i < words.length; i++) {
    // //     let word = words[i][0].toUpperCase() + words[i].substring(1)
    // //     let newString = words.join(" ")
     
    
    // // }
    // for (let i = 0; i < words.length; i++) {
    //     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    // }
    
    // words.join(" ");

    return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}



// capitalizeLetters('i love javascript')
console.log(capitalizeLetters('i love javascript'));

console.log("-----CHALLENGE 5: MAX CHARACTER-----");
// ### CHALLENGE 5: MAX CHARACTER
// // Return the character that is most common in a string
// // ex:

const maxCharacter = (str) => {
    let max = 0;
    let maxChar = "";
    str.split("").forEach((char) => {
      if (str.split(char).length > max) {
        max = str.split(char).length - 1;
        maxChar = char;
      }
    });
    return maxChar;
    //   return `The max letter is :${maxChar} and the max number of times it is seen is:${max} times`;
  };
  console.log(maxCharacter("javascript")); // 'a'

  console.log("-----CHALLENGE 6: FIZZBUZZ-----");
  
  // ### CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FIZZ BUZZ");
    }
    else if (i % 5 === 0) {
        console.log("BUZZ");
    }
    else if (i % 3 === 0) {
        console.log("FIZZ");
    }
    else console.log(i);

    
}


// ### CHALLENGE 7: LONGEST WORD
console.log("-----CHALLENGE 7: LONGEST WORD-----");
// Return the longest word of a string

function longestWord (str) {
    let newArray = str.split(" ");
    let maxlength = 0
    console.log(newArray);
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].length > maxlength){
           maxlength = newArray[i].length
            console.log(maxlength); 
           
           
        }
    // let array1 = str.split(" ");
    // let maxLength = 0;
    // let maxWord = "";
    // //   console.log(array1);
    // for (const item of array1) {
    //   if (item.length > maxLength) {
    //     maxLength = item.length - 1;
    //     maxWord = item;
    //   }
    //   // console.log(array1);
    // }
    // console.log(maxWord.toLowerCase());
        
    }
    return newArray
    // console.log(newArray);
}
// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string
// ex:
longestWord('Hi there, my name is Brad') // 'there,';
longestWord('My name is Brad') // ['name', 'brad'];
longestWord('Brad') // 'brad';

console.log("-----CHALLENGE 8: ARRAY CHUNKING-----");
// ### CHALLENGE 8: ARRAY CHUNKING
// // Split an array into chunked arrays of a specific length
// // ex:
function chunkArray(arr, idx) {
    const chunky = []
    while (arr.length > 0) {
        const newChunk = arr.splice(0, idx)
        // console.log(newChunk);
       chunky.push(newChunk)
    //  console.log(arr);  
    }
    console.log(chunky);;
    
}



chunkArray([1, 2, 3, 4, 5, 6, 7], 3) // [[1, 2, 3], [4, 5, 6], [7]];
chunkArray([1, 2, 3, 4, 5, 6, 7], 2) // [[1, 2], [3, 4], [5, 6], [7]];

console.log("-----CHALLENGE 9: FLATTEN ARRAY-----");
// ### CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex:


const nested = [[1, 2], [3, 4], [5, 6], [7]] // [1, 2, 3, 4, 5, 6, 7]
const single = [].concat(...nested)
console.log(single);

// console.log(nested.flat());

console.log("-----CHALLENGE 10: ANAGRAM-----");
// ### CHALLENGE 10: ANAGRAM
// Return true if anagram and false if not
function isAnagram(a, b) {

   if(a === b) {
       return false
   }

   return a.split("").sort().join("") === b.split("").sort().join("")
    
}

console.log(isAnagram('elbow', 'below')) // true
console.log(isAnagram('Dormitory', 'dirty room##')) // false

console.log("-----CHALLENGE 11: ADD ALL NUMBERS-----");
// ### CHALLENGE 11: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers
// ex:
function addAll(...numbers) {
    const reduce = numbers.reduce((total, current) => total + current, 0)
    return reduce
}

console.log(addAll(2, 5, 6, 7)) // 20;

console.log("-----CHALLENGE 12: SUM ALL PRIMES-----");

// ### CHALLENGE 12: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex.
function sumAllPrimes(num) {
    let total = 0;
    for (let i = 2; i <= num; i++) {
      if (num % i == 0) {
          total += i;
      }
      console.log(total);
    }
    
}

// console.log(sumAllPrimes(10)) // 17;
sumAllPrimes(10)

// ### CHALENGE 13: SEEK AND DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex:
// seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello'];

// ### CHALLENGE 14: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex:
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116];
