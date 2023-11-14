export {};
//good
const repeatString = (wordString: string,  wordRepeat:number) => {
    return wordString.repeat(wordRepeat)
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
