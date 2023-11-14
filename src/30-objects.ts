export {};
//good https://www.youtube.com/watch?v=hLwypx4OaHA&list=PLfDlEyepEMY3VM8eTeKVODcCerWG5vBnp&index=25 13.46
/**
 * Ah, objects...
 * One of the most important concepts to understand in programming,
 * especially in JavaScript since the whole language is pretty much just objects 🤯
 *
 * Luckily they're not so difficult to learn. As always w3schools will help:
 *  - https://www.w3schools.com/js/js_objects.asp
 */
// https://www.geeksforgeeks.org/how-to-access-array-of-objects-in-javascript/
interface Books {
  title: string,
  author: string
}
const books:Books[] = [
 {
    title: "4 hour work week",
    author: "Tim Ferris"
  },
 {
    title: "Tools of Titans",
    author: "Tim Ferris"
  }
];

const getTheTitles:string[] = books.map(titles => titles.title)
   

console.log(getTheTitles); // Expected output: ['4 hour work week', 'Tools of Titans']
//console.log(books.firstBook)