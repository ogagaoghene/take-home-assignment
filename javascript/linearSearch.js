const linearSearch = (arr, target) => {
    for (let index = 0; index <= arr.length - 1; ++index) {
        if (arr[index] == target) 
            return `Found ${target} at arr[${index}]`;
    }
    return "Not found....";
}

let arr = [20, 23, 24, 45, 1, -1];
let target = -1;

console.log(linearSearch(arr,target));