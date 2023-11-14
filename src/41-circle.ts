export {};

/**
 * The good ol' this.. Possibly the most confusing topic in the whole language
 * and one that interviewers often use to make you (me) feel miserable in interviews 😭
 * If you find the docs (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
 * also confusing, try some of these resources:
 *  - https://www.freecodecamp.org/news/javascript-this-keyword-binding-rules/
 *  - https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
 *  - https://www.youtube.com/watch?v=Pi3QC_fVaD0 (JavaScript this Keyword Explained In 3 Minutes)
 *  - https://www.youtube.com/watch?v=YOlr79NaAtQ (What is THIS in JavaScript? in 100 seconds)
 */

 
// class Circle{
//   radius:number;

//   constructor(radius:number){
//     this.radius = radius

//   }

//   area():number {
//     return Math.PI * this.radius * this.radius;
//   };
//   perimeter():number {
//     return Math.PI * 2 *this.radius;
//   }
// }
function Circle(this:any,radius:number) {
    this.radius = radius;
    this.area = function(this:any):number {
        return Math.PI * this.radius*this.radius;
    };
    this.perimeter = function(this:any):number {
        return Math.PI * this.radius * 2;
    };
  };

const c = new (Circle as any)(3);
console.log("Area =", c.area().toFixed(2)); // Expected output: Area = 28.27
console.log("Perimeter =", c.perimeter().toFixed(2))
 



/**
 * This was the last exercise in this repository.
 * Congratulations on getting this far!
 */
