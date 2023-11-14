export {};
//good
function greatest(x:number, y:number):number {
    if (x < y) {
        return y;
    } else {
        return x;
    }
};

console.log(greatest(1, 2)); // Expected output: 2
console.log(greatest(5, 2)); // Expected output: 5
