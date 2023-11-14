export {};

const count = (str:string[]) => {
   let countNumber:number = 0
   for(let i = 0; i < str.length; i++){
      if(str[i].toLocaleLowerCase().startsWith('t'))
      countNumber = countNumber + 1
   }
   return countNumber
}
console.log(count(["The quick brown fox jumps over the lazy dog", "the"])); // Expected output: 2
console.log(count(["The quick brown fox jumps over the lazy dog", "fox"])); // Expected output: 1
