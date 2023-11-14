export {};
// good https://bobbyhadz.com/blog/javascript-capitalize-first-letter-of-each-word-in-array
function tidyUpString(mentors:string[]) {
  //const firstCleaning = words.trim().toLowerCase().replace("/", "").substring(1))
  // let secondCleaning:string[] = firstCleaning.map(words => words.charAt(0).toUpperCase())
  let cleaning:string[] = mentors.map( words => {
    const firstPart = words.trim().toLowerCase().replace("/", "").charAt(0).toUpperCase()
    const secondPart= words.trim().toLowerCase().replace("/", "").slice(1)
    return firstPart + secondPart
  })
   return cleaning
    
};

// You are allowed to edit this function
// function capitalise(str:string[], mentors:string[]) {
//   return tidyUpString(mentors)
// }
// function capitalise(mentorsTidy:string[]) {
//       return tidyUpString(mentors)
// }

const mentors:string[] = ["/Daniel ", "irina ", " Gordon", "ashleigh "];

 

//const mentorsTidy:string[] =[] ; // You are allowed to edit this line
console.log(tidyUpString(mentors))
console.log(mentors);
//console.log(capitalise(mentorsTidy)); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
