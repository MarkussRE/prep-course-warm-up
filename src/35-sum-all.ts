export {};

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

const sumAll = (numberOne:number, range:number) => {
    let sum:number = 0
    for(let i = 0; i < range; i++){
       sum = numberOne + i
       console.log(sum)// izveido 1  2  3  4
        for(let j = 0; j <= i; j++){
            //console.log(j)
            sum = sum + j // 1 + 2 + 3 + 4 which is 10
            //console.log(sum)
        }
        
      
    
    }
     console.log(sum)
}
console.log(sumAll(1, 4)); // Expected output: 10
