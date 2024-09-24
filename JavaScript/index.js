// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

function remove(string) {
    let word = string.split(""); // Converts string to an array of characters
    let filtered = word.filter(item => item !== "!"); // Filters out all exclamation marks
    let join = filtered.join("") + "!"; // Joins the filtered array back into a string and adds a single "!"
    console.log(join);
}

// Understanding the split
/* 
string.split(delimiter) => This is the character or substring where the original a=string will be divided. The delimiter itself does not appear in the resulting substring

Example
const s = "hello!!!world!!"
let result = s.split("!")
console.log(result)
// Output => ["hello ", "", "", "world", "", ""]

// If you don't specify a delimiter, it will use whitespace as a separator
*/

remove("Hi!!!!")

// Another Method is using Regular Expression
function remove(s) {
    return s.replace(/!+/g, '') + '!';
  }

  // Understanding the regular expression


  function howMuchILoveYou(nb) {
    let love = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    let index;
    if (nb > 6) {
         index = (nb -1)%6
        
    } else {
         index = nb - 1
    }

    return love[index]
  }

  console.log(howMuchILoveYou(336));

  /* 
  Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

 */

function findGrade(s1, s2, s3) {
    let mean = ((s1 + s2 + s3) / 3)
    console.log(mean);
    let score;

    if (mean >= 90) {
        return score =  'A'
    } else if (mean >= 80) {
       return score =  'B'
    } else if (mean >= 70) {
       return score =  'C'
    } else if (mean >= 60) {
       return score =  'D'
    } else {
       return score =  'F'
    }   
}

// Another method 
function getGrade (s1, s2, s3) {
    var s = (s1 + s2 + s3) / 3
    return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
  }
  

console.log(findGrade(48,55,52))

/* =========================================================================================================================================================================
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact. */

/* 

=============================================================================================================================================================================================================================================================================================================


Create a function that takes a number as an argument and returns a grade based on that number.

Score	Grade
Anything greater than 1 or less than 0.6	"F"
0.9 or greater	"A"
0.8 or greater	"B"
0.7 or greater	"C"
0.6 or greater	"D"
Examples:

grader(0)   should be "F"
grader(1.1) should be "F"
grader(0.9) should be "A"
grader(0.8) should be "B"
grader(0.7) should be "C"
grader(0.6) should be "D" */

function grader(score) {
  return score > 1 || score < 0.6 ? 'F' : score >= 0.9 ? 'A' : score >= 0.8 ? 'B' : score >= 0.7 ? 'C' : 'D'
}

console.log(grader(0.6));

// ========================================================================================================================================================================


/* 
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.


*/

let array = [1]

function minMax(arr) {
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  let newArr = []
  newArr.push(min, max)
  return newArr
}

console.log(minMax(array));

/* 
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

function findSmallestInt(arr) {
  return Math.min(...arr)
}

let arr = [34, -345, -1, 100]

console.log(findSmallestInt(arr));

// ==================================================================================================================


/* 
Find the last element of the given argument(s).

Examples
last([1, 2, 3, 4] ) // =>  4
last("xyz")         // => "z"
last(1, 2, 3, 4)    // =>  4
In javascript and CoffeeScript a list will be an array, a string or the list of arguments.

 */

//============================================================================================================================================


function last(list) {
  if (Array.isArray(list)) {
    return list[list.length -1]
    
  } else if(typeof(list) === 'string') {
    return list.charAt(list.length - 1)
  } else {
    return arguments[arguments.length - 1]
  }
}

let test = 'Abdulmajid'
console.log(test.charAt(test.length - 1));

console.log(last([1,2,3,4,5]));
console.log(last('aman'));
console.log(last(1,2,3,4,5));



// When you use the rest parameter, you receive the arguments as an array
// Argument object is an array-like object. This means it can be accessed using its indexed, has length property. However, it is not a true array, so you cannot use array methods like pop(), push() and forEach()

/* 
    Example
================

function foo(a, b) {
  console.log(arguments); // [a, b, c, d] (even though only a and b are defined)
  console.log(arguments[0]); // a
  console.log(arguments[1]); // b
  console.log(arguments[2]); // c
  console.log(arguments[3]); // d
}

foo(1, 2, 3, 4);

*/

function foo() {
  console.log(this);
  
}

let obj = {foo: foo}
obj.foo()

/* 
Object Methods:

Creating objects: let obj = { key: value, ... }; or let obj = new Object();
Accessing properties: obj.key or obj['key']
Adding properties: obj.newKey = value;
Deleting properties: delete obj.key;
Checking property existence: key in obj or obj.hasOwnProperty(key)
Iterating over properties: for...in loop or Object.keys(obj).forEach(...)
Merging objects: Object.assign(target, source); (shallow copy)
Cloning objects: let clone = { ...obj }; (shallow copy) or let clone = JSON.parse(JSON.stringify(obj)); (deep copy)
The this Keyword:

Global context: this refers to the global object (usually window or global)
Function context: this refers to the function's caller (e.g., an object that owns the function)
Method context: this refers to the object that the method is called on
Event context: this refers to the element that triggered the event
Arrow function context: this inherits the context from its surrounding scope
Binding this: func.bind(thisValue) or func.call(thisValue) or func.apply(thisValue)
*/

// Staircase and pyramid
/* 
The staircase problem
*/

function stairs() {
  let result = '';
  for (let i = 0; i < 9; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
      row += '*';
    }
    result += row + '\n';
  }
  console.log(result);
}
stairs();

// Reversing the staircase

function reverse_stairs() {
  let result = ''
  for(let i = 0; i < 9; i ++) {
    let rows = ''
    for (let j = 9 - i; j >= 0; j --) {
      rows += "*" 
    }
    result += rows + '\n'
  }
  console.log(result);
}

reverse_stairs();


function building_pyramid(n) {
  let result = ''
  for (let i = 0; i < n; i ++) {
    // Building the spaces inside each line
    let spaces = ''
    for(let j = 0; j < n - i - 1; j++) {
      spaces += ' '
    }
    let row = ''
    for (let r = 0; r < i * 2 + 1; r ++) {
      row += '*'
    }
    result += spaces + row + '\n'
  }
  console.log(result);
  
}

building_pyramid(5)


/* 
Function: add_numbers (2 points)

Write a Python function named add_numbers that takes two parameters num1 and num2, and returns the sum of the two numbers.
*/

function add_numbers(num1, num2) {
  console.log(num1 + num2);
  
}

// 2. Function: is_even (2 points)

/* Write a Python function named is_even that takes a single parameter number and returns True if the number is even, and False otherwise. */

function is_even(number) {
  if(number % 2 === 0) {
    console.log('true');
  } else {
    console.log('false');
    
  }
}


// 3. Function: count_vowels (2 points)

/* Write a Python function named count_vowels that takes a string text as input and returns the count of vowels (a, e, i, o, u) in the string. Ignore case sensitivity. */

function count_vowels(text) {
  let count = 0
  let vowels = 'aeiou'
  for (let char of text.toLowerCase()) {
    if (vowels.includes(char)) {
      count++
    }
  }
  console.log(count);
  
}




// 4. Function: reverse_string (2 points)

/* Write a Python function named reverse_string that takes a string text as input and returns the reversed version of that string. */

function reverse_string(text) {
  let reverse = text.split('').reverse().join('')
  console.log(reverse);
  
}

// 5. Function: calculate_factorial (2 points)

/* Write a Python function named calculate_factorial that takes a non-negative integer n as input and returns the factorial of that number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. */

function calculate_factorial(n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  console.log(product);
}


/* Write a function called findMax that takes an array of numbers as input and returns the maximum value in the array. If the array is empty, the function should return null. */

function findMax(arr) {
  if (arr.length === 0) {
    return null
  } else {
    return Math.max(...arr)
  }
}


/* Write a function called countDuplicates that takes an array of strings as input and returns an object with the count of each duplicate string. If a string appears only once, it should not be included in the output object. */

function findDuplicates(arr) {
  let obj = {};
  for (let item of arr) {
    if (item in obj) {
      obj[item]++
    } else {
      obj[item] = 1;
      console.log(obj);
      
    }
  }
  let duplicates = {};
  for (let item in obj) {
    if (obj[item] > 1) {
      duplicates[item] = obj[item];
    }
  }
  return duplicates;
}

// Example usage:
let arrray = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let duplicates = findDuplicates(arrray);
console.log(duplicates); // Output: {2: 2, 3: 3, 4: 4}

console.log(findDuplicates(['apple', 'banana', 'apple', 'orange', 'banana', 'banana']));

// returns { apple: 2, banana: 3 }
console.log(findDuplicates(['hello', 'world', 'hello', 'hello', 'world', 'world', 'world']));

// returns { hello: 3, world: 4 }
console.log(findDuplicates(['a', 'b', 'c', 'd', 'e']) );
// returns {}


function xor(a, b) {
  if ((a == true && b == false) || (a == false && b == true)) {
    return true
  } else if ((a == false && b == false) || (a == true && b == true)) {
    return false
  }
}


console.log(xor(false , true));






let sentence = 'Hey fellow warriors'

function reverse_words(str) {
  let result
  let words = str.split(' ')
  for(let i = 0; i < words.length; i++) {
    if(words[i].length > 5) {
      words[i] = words[i].split('').reverse().join('')
    } else {
      words[i] = words[i]
    }
  }
  result = words.join(' ')
  console.log(result);
}


reverse_words(sentence);


let arrays = [1,2,3,4,5,6]

console.log(arrays.sort((a, b) => b - a));


let x = 'Hello World'
let y = x.split(' ').reverse().join(" ")
console.log(y);

let xyz =[1,2,3,4,5,6,7,8]

console.log(xyz.sort((a, b) => a - b));




/* Your colleagues have been looking over your shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

Given an object ( meet ) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room ( boss ). Their score is worth double its face value (but they are still just one person!).

 */


function outed(meet, boss){
  let total = 0
  for(let key in meet) {
    if(key === boss) {
      meet[key] *= 2
    }
    total += meet[key]
  } 
  let average = total / Object.keys(meet).length
  
  if(average <= 5 ) {
    return 'Get Out Now!'
  } else {
    return 'Nice Work Champ!'
  }
}

console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'));
console.log(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'));
console.log(outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'));
console.log(outed({"tim":1,"jim":8,"randy":3,"sandy":7,"andy":3,"katie":5,"laura":7,"saajid":7,"alex":9,"john":1,"mr":2},"sandy"));



/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

 */

function getCount(str) {
  let count = 0
  let vowels = 'aeiou'
  let word = str.split("")
  for(let i = 0; i< word.length; i ++) {
   for(let letter of vowels) {
    if(word[i] === letter) {
      count++
    }
   }
  }
  console.log(count);
  
}

getCount("abracadabra")



/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
Input: "1 2 3 4 5"   =>  Output: "5 1"
Input: "1 2 -3 4 5"  =>  Output: "5 -3"
Input: "1 9 3 4 -5"  =>  Output: "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */


function highAndLow(numbers) {
  let num = numbers.split(" ")
  let maxValue = Math.max(...num)
  let minValue = Math.min(...num)
  return `${maxValue} ${minValue}`
}


console.log(highAndLow("1 2 3 4 5" ));







