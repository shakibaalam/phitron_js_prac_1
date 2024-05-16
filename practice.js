// practice 02
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is even.");
    } else {
        console.log(number + " is odd.");
    }
}

let userInput = prompt("Please enter a number:");

let number = parseInt(userInput);

if (!isNaN(number)) {
    checkEvenOdd(number);
} else {
    console.log("Invalid input. Please enter a valid number.");
}

// practice 03
const arr=[1,5,4,8,9,15,17,11,13,2,7,6,12,16,19,20,3,10]
console.log(arr);
arr.sort((a,b)=>a-b);
console.log(arr);

// practice 04

function isLeapYear(year) {
    
    if (year % 4 === 0) {
        
        if (year % 100 === 0) {
            
            if (year % 400 === 0) {
                return true; 
            } else {
                return false; 
            }
        } else {
            return true; 
        }
    } else {
        return false;
    }
}
let year = 2024;
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

// practice 05
function findDivisibleBy3And5() {
    let result = [];
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push(i);
        }
    }
    return result;
}

console.log("Numbers between 1 and 50 divisible by both 3 and 5: ", findDivisibleBy3And5());

// practice 06

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

function findLongestName(names) {
    let longestName = "";

    for (const name of names) {
        if (name.length > longestName.length) {
            longestName = name;
        }
    }

    return longestName;
}
console.log("The longest name is: " , findLongestName(friends));

// practice 07
let numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);

// practice 08
let greatestNumber = Math.max(...numbers);
console.log("The greatest number is: " + greatestNumber);
