//Find pair that sums up to target using a Hash table and IIFE mechanism in JavaScript
let findPair = (function(arr, target) {
  let visited = {};
  for(element of arr) {
    if(visited[target-element]) return true;
    else visited[element] = true;
  }
  return false;
})([3,5,7,8,9], 14);

console.log(findPair);