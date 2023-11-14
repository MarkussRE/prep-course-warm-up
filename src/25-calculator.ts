export {};
//good
function add(numOne:number,numTwo:number):number {
    return numOne + numTwo
}

function subtract(numOne:number,numTwo:number):number {
    return numOne - numTwo
}

function sum(numbers:number[]):number {
    let result = 0;
    for (let num of numbers) {
        result += num;
    }
    return result;
}

function multiply(numbers:number[]):number {
    let result = 1;
    for (let num of numbers) {
        result *= num;
    }
    return result;
}
function power(numOne:number,numTwo:number):number {
    return Math.pow(numOne, numTwo);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
