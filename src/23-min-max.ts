export {};
//good
/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

// const min = (array:number[]) => {
//     return Math.min(...array); // ... paņem array jeb šajā gadījumā min array
// };

// const max = (array:number[]) => {
//     return Math.max(...array); // ... paņem array jeb šajā gadījumā max array
// };

// console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
// console.log(min([9, -3, 6])); // Expected output: -3
// console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
// console.log(max([9, -3, 6])); // Expected output: 9

// kur atradu https://www.geeksforgeeks.org/find-the-min-max-element-of-an-array-using-javascript/
let minValue = Infinity;
let maxValue = -Infinity;
const min = (array:number[]) => {
    for (let item of array) {
        if(item < minValue)
            minValue = item;

        
    }
    return minValue
}
const max = (array:number[]) => {
    for (let item of array) {
        if(item > maxValue)
        maxValue = item;

        
    }
    return maxValue
}       
console.log(min([1, 2, 3, 4, 5]));
console.log(min([9, -3, 6]));
console.log(max([1, 2, 3, 4, 5]));
console.log(max([9, -3, 6]));