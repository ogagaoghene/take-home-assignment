public class getMaximumSum {
  public static void main(String[] arg) {
    int[] sampleArr = new int[]{1,2,3,4,5,6};
    int windowSize = 2;
    System.out.println(findMaxSum(sampleArr, windowSize));
  }
  static int findMaxSum(int[] arr, int k) {
    if (arr.length < k) {
      System.out.println("Length of array is smaller than window size of the subarray k");
      return -1;
    }
    // find the initial maximum sum of the first subarray of size k
    int maxSum = 0;
    for(int idx = 0; idx < k; idx++) {
      maxSum += arr[idx];
    }

    int windowSum = maxSum;
    // for the rest of the array
    for(int idx = k; idx < arr.length; idx++) {
      // slide the window up by one element
      windowSum += arr[idx] - arr[idx-k];
      maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
  }
}