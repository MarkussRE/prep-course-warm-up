export {};

/**
 * So far you've learned all about functions, arrays, objects and that's a lot already!
 * The rest of the exercises here are for you to practice some more before moving on to
 * the more complicated exercises in this course.
 */

/**
 * How to convert temperature -> https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature
 *
 * Create two functions fahrenheitToCelsius & celsiusToFahrenheit
 *
 * Temperature should be rounded to one decimal place: i.e., fahrenheitToCelsius(100) should return 37.8 and not 37.77777777777778.
 */
//good
const fahrenheitToCelsius = (fahrenheit:number) => {
    if (fahrenheit === 32) {
        return 0;
    } else {
       return ((fahrenheit - 32) * 5/9).toFixed(1)
    }
};  //°C = (°F − 32) × 5/9.
const celsiusToFahrenheit = (celsius:number) => (celsius * (9/5) + 32).toFixed(1);
  

console.log(fahrenheitToCelsius(32)); // Expected result: 0
console.log(celsiusToFahrenheit(18.6)); // Expected result: 32
