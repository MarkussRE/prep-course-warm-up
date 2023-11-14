export {};
//good
function truncateString(word:string, whereToReturn:number):string {
    //return  word.slice(0, whereToReturn); vai
    return word.substring(0,whereToReturn); 
}   
console.log(truncateString("CODELEX", 4)); // Expected output: CODE
