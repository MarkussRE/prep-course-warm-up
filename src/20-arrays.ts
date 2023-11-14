export {};
//good
/**
 * So far you've been working with numeric and textual data using JS data types - numbers
 * and strings. But there are many more data types in JS. One of them is arrays.
 * Here are a few resources that might help to better understand what arrays are for:
 *  - https://www.w3schools.com/js/js_arrays.asp
 *  - https://javascript.info/array
 */
//const message:string = "John Doe"

//const stringToArray: string[] = message.split(' ');
function stringToArray(str: string[]):string[]{
    const newStr:string[] = str[0].split(' ')
    
    return newStr
}
console.log(stringToArray(["John Doe"]))
console.log(stringToArray(["John Doe"])); // Expected output: ['John', 'Doe']
//console.log(stringToArray);
