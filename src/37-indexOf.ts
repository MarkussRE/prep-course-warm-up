export {};
//good
/**
 * Write a function that removes an element form array.
 * The function must:
 *  - NOT change the original array
 *  - return a new array with the first item matching `valueToRemove` removed
 */
//**********JAUTĀJUMS, KĀPEC NEVAR FUNCTION LIKT NUMBER IEKŠĀ***********
// You are allowed to edit only this function
function remove(arr:string[], valueToRemove: string) {
  const toRemove: (number | string) = arr.indexOf(valueToRemove)
  if(toRemove !== -1) {
    const newArray:(number | string)[] = arr.slice()

    newArray.splice(toRemove,1) // splice(values, ko man vajadz idzēst, un cik reizes)

    return newArray
  }
}
const numbers:number[] = [1, 2, 3];
const newNumberArray:number[] = [...numbers]

const names:string[] = ["John", "Alice", "Ellen"];
const newNamesArray:string[] = [...names]

// const newNumbers = remove(newNumberArray, 2);
const newNames = remove(newNamesArray, "Ellen");

console.log(newNumberArray);
console.log(newNames);

/* 
  Expected output:
  
      [1, 3]
      [John, Alice]
*/
