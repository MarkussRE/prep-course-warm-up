export {};
//good
/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */

function isBlank(word:string | null) { // vai arii word:string | null
        // if (word === null) {
        //     return true;
        // } else if (word === ""){
        //     return true;
        // } else if (word === " "){
        //     return true;
        // }  else if (word === "abc"){
        //     return false;
        // }  else if (word === " abc "){
        //     return false;
        // }
        return word === null || word.trim().length === 0 
       
   
}
console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false
