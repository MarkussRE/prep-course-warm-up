export {};
//good
/**
 * The first thing we will learn are functions.
 * Since you'll be relaying on using functions throughout the whole course,
 * it's important to get the basics down. For that we'll use exercises 00 to 15.
 * If you'd like to do some more reading on functions, here are some resources:
 *  - https://www.w3schools.com/js/js_functions.asp
 *  - https://javascript.info/function-basics
 * and if you prefer videos:
 *  - https://www.youtube.com/watch?v=xUI5Tsl2JpY (Modern JavaScript Tutorial #4 - Functions)
 */

// const helloWorld = function() {
//   return "Hello world";
// };
class Stack {
  n:number[] = []
  push(n: number) {
    return this.n.push(n)
    
  }

  pop():number | undefined {
    return this.n.pop()
  }

  peek() {}
}

  


const q = new Stack();
q.push(1)
q.pop()

  
  // const numToString:string = num.toString()
  // if(numToString.length === 1){
  //   return true
  // }
  // let newArray:string = []
  // const splitNumToString:string[]= numToString.split('')
  // for(let i = 0; i < splitNumToString.length;i++){
  //   return newArray = newArray + splitNumToString[i]
  // }


//console.log(longestWord("My name is Adam"))

//console.log(capitalize("hi there, how is it going?"))
//console.log(capitalize('I Love Breakfast At Bill Miller Bbq'))
// console.log(parse("The Road _Not_ Taken"))
// console.log(parse("The Road _Not_ Taken"))