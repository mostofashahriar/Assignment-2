// 1

//  function calculateDifference(a,b){
//     let num1=a
//     let num2=b
//     let num3=a - b

//     return(num3)
// }

// console.log (calculateDifference(30,20)); <br></br>


// 2

// function isOdd(num) {
//     return num % 2 !== 0;
// }

// console.log(isOdd(10));

// 3

// function findMin(num) {
//     return Math.min(...num);
// }

// let numbers = [3, 7, 1, 9, -5, 2];
// console.log(findMin(numbers));

// 4 

// function filterEvens(array) {
        
// return array.filter(num => num % 2 === 0 ) 
// }
 
// let numbers = [20, 15, 30, 40, -50]
// console.log(filterEvens(numbers))

// 5

// function sortArrayDescending(arr) {
//     arr.sort((a, b) => b - a);
//     return arr;
// }

// let numbers = [30, 40, 20, 15 ,25]
// console.log(sortArrayDescending(numbers))

// 6


// function lowercaseFirstLetter(str) {
//     return str.charAt(0).toLowerCase() + str.slice(1) || str;
// }
// let text = "Hello World!";
// console.log(lowercaseFirstLetter(text));

function countVowels(str) {
    return (str.match(/[aeiouAEIOU]/g) || []).length;
}

let text = "Hello World!";
console.log(countVowels(text));
