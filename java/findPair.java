import java.util.HashMap;

public class findPair {
  public static void main(String[] arg) {
    int[] sample = new int[]{3,5,7,8,9};
    int target = 14;
    System.out.println(findPairSum(sample, target));
  }
  static boolean findPairSum(int[] arr, int k){
    HashMap<Integer,Boolean> visited = new HashMap<Integer,Boolean>();
    for(int element : arr){
      if(visited.containsKey(k-element)) return true;
      else visited.put(element, true);
    }
    return false;
  }
}