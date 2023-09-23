const reverseInteger = (num) => {
  const reversed = 
    num.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(num);
};

let numVar = -519;
console.log(reverseInteger(numVar));