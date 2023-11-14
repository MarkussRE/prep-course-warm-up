export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */
const protectEmail = (userEmailName:string) => {
    const splitsUser = userEmailName.split('@')
    const firstSide = splitsUser[0]
    
    const secondSide = splitsUser[1]
    //return firstSide.length
    if (firstSide.length <= 2) {
        return '...@' + secondSide
    }
    //good
    if (firstSide.length <= 5) {
        return firstSide.substring(0,2) + '...@' + secondSide;
    }
    
    if (firstSide.length >= 6) {
        return firstSide.substring(0,3) + '...@' + secondSide;
    }
    return userEmailName
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail('example@example.com')); // Expected result: exa...@example.com
console.log(protectEmail('12345@example.com')); // Expected result: 12...@example.com
console.log(protectEmail('12@example.com')); // Expected result: ...@example.com