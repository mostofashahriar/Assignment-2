 /*Question 1*/

 function calculateDifference(a,b){
    let num1=a
    let num2=b
    let num3=a - b

    return(num3)
}

console.log (calculateDifference(30,20)); <br></br>


/*Question 2 */

function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(10));

/* Question 3 */

function findMin(num) {
    return Math.min(...num);
}

let numbers = [3, 7, 1, 9, -5, 2];
console.log(findMin(numbers));

/* Question 4 */ 

function filterEvens(array) {
        
return array.filter(num => num % 2 === 0 ) 
}
 
let numbers = [20, 15, 30, 40, -50]
console.log(filterEvens(numbers))

/* Question 5 */

function sortArrayDescending(arr) {
    arr.sort((a, b) => b - a);
    return arr;
    
}

let numbers = [30, 40, 20, 15 ,25]

console.log(sortArrayDescending(numbers))

/*Question 6 */


function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1) || str;
}
let text = "Hello World!";
console.log(lowercaseFirstLetter(text));

/*Question 7 */

function countVowels(string) {

let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; 


return string.split('').filter(char => vowels.includes(char)).length;
}

console.log(countVowels("Hello World!"));

/* Question 8 */

function findAverage(numbers) {
    if (numbers.length === 0) {
        return 0; 
    }
    
    
    const sum = numbers.reduce((total, num) => total + num, 0);
    

    return sum / numbers.length;
}

console.log(findAverage([1, 2, 3, 4, 5]));
