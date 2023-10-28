public class search {
    static String linearSearch(int[] arr, int target) {
        for (int idx = 0; idx < arr.length; idx++) {
            if(arr[idx] == target) {
                return "Found ";
            }
        }
        return "Not found...";
    }
    public static void main(String[] argc) {
        int[] arr = new int[]{23, 22, 24, 25};
        int target = 25;

        System.out.println(linearSearch(arr, target));
    }
}