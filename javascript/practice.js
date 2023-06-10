const getSum = (...args) => {
    let sum = 0;
    for (let idx = 0; idx < args.length; ++idx) {
        sum += args[idx];
    }
    return sum;
}


const arr = [1,2,3,4];
const result = arr.map(item => {
    return item * 2;
})

function multiplyBy2(arr) {
    let result = [];

    for (let i = 0; i < arr.length; ++i) {
        result.push(arr[i]*2);
    }
    return result;
}

const multiplyByTwo = (arr) => {
    let result = [];

    for (let index = 0; index < arr.length; index++) {
        result[index] = arr[index] * 2;
    }
    return result;
}

console.log(getSum(1,2,3));
console.log(result);
console.log(multiplyBy2(arr));
console.log('a', multiplyByTwo(arr))
