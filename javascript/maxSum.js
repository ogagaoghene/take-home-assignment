//Calculate maximum some of a subarray of size k using Sliding Window technique 
let getMaxSum = (function(arr, k) {
  if(arr.length < k) {
    return 'Invalid';
  }
  // find the maximum sum of the first subarray of size k
  let maxSum = 0;
  for (let idx = 0; idx < k; idx++) {
    maxSum += arr[idx];
  }
  let windowSum = maxSum;
  // for the rest of the array 
  for(let idx = k; idx < arr.length; idx++) {
    // slide the window up by one element
    windowSum += arr[idx] - arr[idx-k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
})([1,2,3,4,5,6,7], 3);

console.log(getMaxSum);