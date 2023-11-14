export {};
//good
/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

// You are allowed to change this function
// function convertToUSD(price:number):number {
//     return Number((price * 1.4).toFixed(2)); // Number("123");  returns the number 123
// }
// // You are allowed to change this function
// function convertToBRL(price:number):number {
//     return (convertToUSD(price) * 5.50)+(convertToUSD(price)*0.01);
// }
function fee(price:number):number{
    return price * 0.01
}
function convertToUSD (price: number):number {
    return price * 1.4 + fee(price)
}
function convertToBRL (price:number):number {
    return price * 5.50 + fee(price)
}


const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToUSD(price);
const priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD.toFixed(2));
console.log("Price: R$" + priceInBRL.toFixed(2)); // 5.50 BRL
console.log(typeof priceInBRL)
/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
