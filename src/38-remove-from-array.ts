export {};

const removeFromArray = function(array: number[], ...numberToRemove: number[]) { //...numberToRemove taisa masīvu
    const filteredArr = array.filter(num => !numberToRemove.includes(num));
    return filteredArr;
    
   
    //  if (array.indexOf(numberToRemove) !== -1) {
    //     toRemove = numberToRemove;
    // } else if (array.indexOf(numberToRemove) !== -1 ) {
    //     toRemove =  numberToRemove;
    // }

     

    //  const newArray: number[] = array.slice();
    //  const indexToRemove = newArray.indexOf(toRemove);

    //  if (indexToRemove !== -1) {
    //     newArray.splice(indexToRemove, 1);
    //  }

    //  return newArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]

/*
 * Want another challenge similar to this one?
 * Go back to exercise 15-greatest-number and refactor your previous solution so that
 * the function can accept unlimited number of arguments and still return the largest number.
 */