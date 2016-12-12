// #1. Sum



console.log('SUM :');

function sum(a, b) {
    return sum = a + b;
}
sum(5, 5);

console.log(sum);



// #2. avg


console.log('AVG :');


function avg(num) {
    let sum = 0;
    for (let c = 0; c < num.length; c++) {
        sum = sum + num[c];
    }
    return sum / num.length;
}
let average = avg([3, 5, 4]);
console.log(average);



// -------- #3. Greater Than  --------------


console.log('GREATER THAN :');

function greaterThan(a, b) {
    if (a < b) {
        return true;

    } else {

        return false;
    }
}

let ans = greaterThan(4, 5)
console.log(ans);




//-------------------#4. secondLargest ---------


console.log('SECOND LARGEST :');

// 1. loop through array.
// 2. compare each value in the array to find the largest array. 
// 3. store that value in a variable.
// 4. repeat 1- 3
// 5 compare the values stored in step 4.
// print the smaller value.


//let arr = [1, 4, 8, 15, 2];
function secondLargest(arr) {
    let largest = 0;
    // this is finding the largest number;
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
        // console.log(largest);
        }    
}
    //this is copying over the largest
    // largest = 0;
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (largest !== arr[i]) {
            newArray.push(arr[i]);
        }
       // console.log(newArray);
            
}
     largest = 0;
    for (let i = 0; i < newArray.length; i++) {
        if (largest < newArray[i]) {
            largest = newArray[i];
        }
    }
        //console.log(largest);
    return largest;
    }
   

let firstLoser = secondLargest([1, 4, 8, 15, 2]);
console.log(firstLoser); 




//---------#5. Contains Vowels-----------

console.log('CONTAINS VOWELS :');


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

let word = containsVowel('exclamation');
    console.log(word);



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
}
let pigL = pigLatin('mass');
console.log(pigL);

/**
 * 07 | longestWord

Write a function called longestWord that takes a single string and returns the longest word in the string.

Hint: look into the split() function that you can call on strings.
 */

console.log('LONGEST WORD:');

function longestWord(sentence) {
    // 1. Convert sentence into an array
    // 2. Search through the words for the largest letter count
    // 3. once we've checked them all, return the longest one
    let words = sentence.split(' '); //array of strings
    let longest = 0; //the length of the longest word so far
    let keeper = 0;
    for (let i = 0; i < words.length; i++) {
       if (words[i].length > longest) {
            longest = words[i].length; // we have a new longest word
            keeper = words[i];
            //console.log('found new longest: ' + keeper);
       }
    }
    //return a string
    return keeper;
}
    let winner = longestWord( 'how much wood would a woodchuck chuck?');
    console.log(winner);
    


// 1. sort through the string.
// 2. count the letters in each word
// 3. store the longest word.


/**08 | divisors

Write a function called divisors that accepts a number and returns an array of all of the numbers that divide evenly into it.

/**
 * 1. assign a number
 * 2. divide assigned number by itself down to 1
 * 3. if the number returns no remainder, store number.
 */


console.log('DIVISORS');




let num = 20;
function divisors(num) {
let divide = [];
    for (let i = 1; i > num.length; i++) {
        divide = num / num[i];
    } console.log(divide);
    
console.log(divide);
//return divide
}


let factorialize = divisors(20);
//console.log(factorialize);


/**
 * 09 | weave

Write a function called weave() that accepts an input string and number. The function should return the string with every xth character replaced with an 'x'.
*/





/**
 * 1. assign string and number to a variable
 * 2. iterate through string
 * 3. put an x in place of number count. 
 */

console.log('WEAVE :')

function weave(str, num) {
    for (let i = 0; i < str.length; i++)
    if (i === num) {

    }
    console.log(str);
}







weave('hello there', 3)


/**
 * 1. iterate through string
 * 2. put an (x) at (num)
 */


/*
10 | bonus

Jeb eats out at restaurants all the time but is horrible at math. He decides to write a function called bonus() that accepts a single parameter (the cost of the meal), and should return the tip Jeb should give his waiter. Jeb uses two rules to calculate tips:

First he always tips 20% on the original bill.
He then rounds up to the nearest dollar. For example, if the total with tip is $22.78, he'd round up to $23.00.
*/

console.log('BONUS :')

let tip = 0.2;
let total = 0;
//function bonus(tip = meal * 0.2 ) {
    function bonus (arr) {
    //console.log(total= tip + meal);
    total = tip * arr;
     total = total + arr;
     return Math.ceil(total);
}
let Jeb = bonus (22.78);
console.log('Big tipper Jeb owes a total of $' +Jeb);




/*
11 | pokemon

Write a function called pokemon that accepts an array of numbers. Each element in the array represents a day, and the number represents the number of Pokemon caught on that day. Return an array of the same length that contains the number of total Pokemon caught up to that day.

For example,

pokemon([1, 2, 5, 1, 3]); // returns [1, 3, 8, 9, 12]
*/

console.log('POKEMON :');



let lotsOfPoke = [];
let totalCaught = 0;
function pokemon(arr) {
    for (let i = 0; i <arr.length; i++) {
       totalCaught = totalCaught + arr[i];
       lotsOfPoke[i] = totalCaught;
        //need a way to store this point in return...
     //console.log(lotsOfPoke);
       }
return lotsOfPoke;
}

let bigPoke = pokemon([1, 2, 5, 1, 3]);
console.log(bigPoke);
/*
Hard mode

12 | hamming

Write a function called hamming that accepts two strings. If the lengths of the strings are not equal, the function should return zero. Otherwise, return the number of letters that are in the same position in both words.
*/
console.log('HAMMING:')

/**
 * 1. pick two strings
 * 2. iterate through strings
 * 3. compare each letter in string to see if they're the same.
 * 4. if they are not the same, return '0'.
 * 5. if they are the same. count how many letters are the same         from each word. 
 * 6. return total number of letters that are the same.
 */



function hamming(arr) {
    for(let i = 0; i < arr.index; i++) {
        if (arr[0] !== arr[1]) {
        
    }
}         
         return '0'; 
        }    




let bigHammie = hamming(['this', 'this'])
console.log(bigHammie);
/*
13 | multiples

Write a function called multiples that accepts two numbers and returns an array of all numbers from 1 - 100 that are evenly divisible by both.

14 | blackjack

Write a function called blackjack that accepts an array containing a hand of cards represented by the digits 2 - 9 and the values J, Q, K, and A. Return true if the hand busts (the value of the cards is > 21) or false if it hasn't busted.

According to the rules of blackjack, an ace can be worth either 1 or 11. You should make it 11 unless that causes the hand to bust, in which case it should be 1 (just like if you play in person).
*/

console.log('BLACKJACK :')

//function blackjack(num, b) {
let J = 10;
let Q = 10;
let K = 10;
let A = 0; // currently not changing values. 
function blackjack(b, c, d, e){
    if (b + c + d + e > 11) {
     let   A = 1;
    } else {
        if (b + c + d + e <= 11) {
            A = 11;
        }
    }
 if  (b + c + d + e <= 21) {
     console.log(b + c + d + e)
     return false;
 } 
 console.log(b + c + d + e);
 return true; 
 }


let itRide = blackjack(10, A, 0, 0 )
console.log(itRide);
/*
15 | sprint

Write a function called sprint that accepts a single array of objects representing Olympic sprinters, each which has a name (string) and time (in seconds, so a number). Return the name of the athlete with the fastest time.

Nightmare mode

16 | charFreq

Write a function called charFreq that takes a single string and returns an object with each letter in the string as a property and each value as the number of times that letter appears in the string.

Hint: in addition to dot notation (album.title) you can use bracket notation like arrays if the property name is a variable (album['title']).

17 | map

Write a function called map that accepts an array and a function as arguments. You should return an array containing the values of the array after the function has been applied to each one.

Note: there is a built-in function called map. You can't use that ;-)

18 | filter

Write a function called filter that accepts an array and a function as arguments. You should return an array containing the values of the array that return true after the function is applied.

19 | find

Write a function called find that accepts two parameters: the first is an array of numbers and the second is a single number. Return the index of the first time you find the second parameter in the first parameter.

20 | scrabble

Write a function called scrabble that accepts a string and an object containing a property for each letter and a value representing the number of scrabble points its worth. Return the number of points that the whole word is worth.

Hint: strings have a split() function that might be useful.
 */






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

 console.log('FIZZBUZZ :')

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


