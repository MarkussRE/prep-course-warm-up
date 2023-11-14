export {};
//good
/**
 * Complete the function to check if passed argument satisfies the following:
 *
 *  - is a number
 *  - is an integer (not a float)
 *  - is not equal to any of the numbers in the array `excludedNums`
 */

const excludedNums:number[] = [6, 14, 91, 111];

// You are allowed to edit only this function
function validate(num:number | string, excludedNums:number[]):boolean {
  if (typeof num !== 'number'){
    return false;
  }
    if (!Number.isInteger(num)) {
      return false;
  }

  if (excludedNums.includes(num)) {
    return false;
  } 
  return true
}

console.log(validate(6,excludedNums));
console.log(validate(10.5,excludedNums));
console.log(validate(101,excludedNums));
console.log(validate(-91,excludedNums));
console.log(validate("16",excludedNums));

/* 
  Expected output:
  
    false
    false
    true
    true
    false
*/
