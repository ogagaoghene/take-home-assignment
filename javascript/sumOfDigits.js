const sumOfDigits = (num) => {
    let sum = 0;
    while(num != 0) {
        sum = sum + (num % 10);
        num = parseInt(num / 10);
    }
    return sum;
}

console.log("Sum of digits is:", sumOfDigits(8278889));