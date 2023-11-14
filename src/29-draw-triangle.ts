export {};

/**
 * If you find yourself stuck with this exercise, perhaps a more visual approach would help:
 *  - https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/
 */


    
    function draw(value: number) {
        for (let i = 1; i <= value; i++) {
            let row = "";
            
            for (let j = 1; j <= i; j++) { // repeat
                row += "*";
            }
            console.log(row);
        }
        // function draw(times: number) {
        //     for (let i = 0; i < times; i++) {
        //         const star = "*";
        //         console.log(`*${star.repeat(i)}`);          
        //     }
        // }
    }
    
  



 



draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
