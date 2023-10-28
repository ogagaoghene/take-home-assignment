public class search {
    static String linearSearch(int[] arr, int target) {
        for (int idx = 0; idx < arr.length; idx++) {
            if(arr[idx] == target) {
                return "Found ";
            }
        }
        return "Not found...";
    }

    static int linearSearch2(int[] arr, int target) {
        for (int index = 0; index <= arr.length - 1; index++) {
            if (arr[index] == target) {
                return index;
            }
        }
        return -1;
    }

    public static void main(String[] argc) {
        int[] arr = new int[]{23, 22, 24, 25};
        int target = 25;

        System.out.println(linearSearch(arr, target));
        System.out.println(linearSearch2(arr, target));
    }
}