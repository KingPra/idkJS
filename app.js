// #1. Sum



console.log('SUM');

function sum(a, b) {
    return sum = a + b;
}
sum(5, 5);

console.log(sum);



// #2. avg


console.log('AVG');


function avg(num) {
    let sum = 0;
    for (let c = 0; c < num.length; c++) {
        sum = sum + num[c];
    }
    return sum / num.length;
}
let average = avg([3, 5, 4]);
console.log(average);



// -------- #3. Greater Than . --------------


console.log('GREATER THAN');

function greaterThan(a, b) {
    if (a < b) {
        return "true"

    } else {

        return false;
    }
}

let ans = greaterThan(5, 4)
console.log(ans);




//-------------------#4. secondLargest ---------


let height = [20, 50, 100, 30, 75, 24, 99];
tallestMtn = 0;
for (i = 0; i < height.length; i++) {
    console.log([i]);

    // if hegiht of current item is bigger than height of tallest seen
    if (tallestMtn < height[i]) {
        tallestMtn = height[i];
    }

}
console.log(tallestMtn);
//console.log('tallestMtn') 


// 1. loop through array.
// 2. compare each value in the array to find the largest array. 
// 3. store that value in a variable.
// 4. repeat 1- 3
// 5 compare the values stored in step 4.
// print the smaller value.


console.log('SECOND LARGEST');
let arr = [1, 4, 8, 15, 2];
function secondLargest(arr) {
    let largest = 0;
    // this is finding the largest number;
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
        } console.log(largest)
    }
    //this is ccopying over the largest
    // largest = 0;
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (largest !== arr[i]) {
            newArray.push(arr[i]);
        
        console.log(newArray);
        }    
}
    let largest = 0;
    for (let i = 0; i < newArray.length; i++) {
        if (largest < newArray[i]) {
            largest = newArray[i];
        }
    }

    return largest;
}


//console.log(secondLargest);
//bigNum = 0;
/*
function secondLargest(arr) {
    let sorted = arr.sort();
    console.log(sorted);
    return sorted[arr.length - 2];

}
let it = secondLargest(4, 3, 5, 6)
console.log(it);
*/



//---------#5. Contains Vowels-----------

//console.log('CONTAINS VOWELS');

/*
// 1. variable containing Vowels
// 2. 

let vowels = ['a', 'e', 'i', 'o', 'u'];

function containsVowel(str) {
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                return true;
            }
        }
    }return false;
    
}

let word = containsVowel('wide');
    console.log(word);
/*

/*
//----------#6 PIG LATIN-------------

console.log('PIG LATIN');

function pigLatin(str) {
    let split = 0;
    let move = 0;
    for (let i = 0; i < str.length; i++){
     split = (str.split('')[0])
    }
    move = str.slice(1) + split + 'ay';
    return move;
 //console.log(move);
}
let pigL = pigLatin('yard');
console.log(pigL);
/*

//-------------PRACTICE--------------



/**
 * Fizzbuzz
 * Because I guess I kind of have to.
 * 
 * Print out all the numbers from 1-15.
 * If the number is divisible by 3, instead of printing the #, print 'fizz'
 * If the number is divisible by 5, instead of printing the #, print 'buzz'
 * If the number is divisible by 3 and 5, instead of #, print 'fizzbuzz'
 */

// Input: the number to count up to

 /*

function fizzbuzz(max) {
    // 1.print out all the numbers
    // 2. iterate through all the numbers, and print out each one
    for (let i = 1; i <= max; i++) {
        //if i is divisble by 3
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        }else console.log(i);
}
} .  /*

fizzbuzz(21); //call the function, print out 1-21




/**
 * 07 | longestWord

Write a function called longestWord that takes a single string and returns the longest word in the string.

Hint: look into the split() function that you can call on strings.
 */

/*

console.log('Longest Word');

function longestWord(sentence) {
    // 1. Convert sentence into an array
    // 2. Search through the words for the largest letter count
    // 3. once we've checked them all, return the longest one
    let words = sentence.split(' '); //array of strings
    let longest = 0; //the length of the longest word so far
    let keeper = 0;
    for (i = 0; i < words.length; i++) {
       if (words[i].length > longest) {
            longest = words[i].length; // we have a new longest word
            keeper = words[i];
            console.log('found new longest: ' + keeper);
       }
    }
    //return a string
    return keeper;
}
    let winner = longestWord( 'how much wood would a woodchuck chuck?');
    console.log(winner);
    
*/

// 1. sort through the string.
// 2. count the letters in each word
// 3. store the longest word.










/**
 * Problem #1: determine whether a string has more x's or o's.
 * Input: stringReturn 'x' if more x's, or 'o'
 if more 'o's 
 */



/**08 | divisors

Write a function called divisors that accepts a number and returns an array of all of the numbers that divide evenly into it.

 */
/*
console.log('DIVISORS');

function divisors(num) {
let divide = 0;
divide
}
console.log(num);

divisors(5);

*/


/**
 * 09 | weave

Write a function called weave() that accepts an input string and number. The function should return the string with every xth character replaced with an 'x'.
 */







/**
 * Cherokee Hare

There's a mythical species of rabbit called the Cherokee Hare that can reproduce at variable rates and never seem to die. Fortunately, some engineers figured out to write some code to describe it's future population. Wildlife experts rejoice! Create a variable called startingPopulation that keeps track of the initial population of hares, a variable called birthRate that keeps track of what percentage is born each week, and a variable called numberOfWeeks that represents how long we're trying to simulate. Print out "There will be x Cherokee Hares after y weeks" but replace x with the number of hares and y with the number of weeks.

Note: it's common practice to represent rates (like the birth rate) as decimal values, i.e. 10% would be 0.1 instead of 10.

For example, if:

let startingPopulation = 200;
let birthRate = 0.1;
let numberOfWeeks = 5;

... then you're trying to figure out how many hares will exist after five weeks if we start off with 200 and increase their population by 10% each week.
 */


//.1 create initial variables
//.2 multiply population by birth rate.
//.3 repeat step 2 per number of weeks.
/*
let startingPopulation = 200;
let birthRate = 0.1;
let numberOfWeeks = 5;
let babies = 0;

for(i = 0; i < numberOfWeeks; i++){
 babies = startingPopulation * birthRate;
startingPopulation = babies + startingPopulation;
} 
 console.log(Math.floor(startingPopulation));

*/