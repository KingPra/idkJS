// #1. Sum



console.log('SUM');

function sum(a, b) {
    return sum = a + b;
}
sum( 5, 5);

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
   
 }else{

     return false;
 }
}

let ans = greaterThan(5, 4)
console.log(ans);




//-------------------#4. secondLargest ---------


// 1. loop through array.
// 2. compare each value in the array to find the largest array. 
// 3. store that value in a variable.
// 4. repeat 1- 3
// 5 compare the values stored in step 4.
// print the smaller value.

/*
console.log('SECOND LARGEST');

bigNum = 0;

function secondLargest(arr) {
    for (let i = 0; i < arr.length; i++) {
    }
    
}


secondLargest([3, 4, 5, 6])

*/

//---------#5. Contains Vowels-----------

console.log('CONTAINS VOWELS');


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

let word = containsVowel('wrd');
    console.log(word);



//----------#6 PIG LATIN-------------

console.log('PIG LATIN')

function pigLatin(str) {
    let split = 0;
    let move = 0;
    for (let i = 0; i < str.length; i++){
     split = (str.split('')[0])
    }
    move = str.slice(1) + split + 'ay';
 console.log(move);

 //console.log(move);
}
pigLatin('iron');


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
}

fizzbuzz(21); //call the function, print out 1-21

*/
