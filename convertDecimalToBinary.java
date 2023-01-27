import java.util.Queue;
import java.util.LinkedList;

public class convertDecimalToBinary {
  public static void main(String[] arg) {
    printBinary(2);
  }

  public static void printBinary(int number) {
    if (number < 0) return;

    for(int idx=1; idx <= number; ++idx) {
      System.out.println(Integer.toBinaryString(idx));
    } 
  }

  public static void printBinary2(int number) {
		if (number <= 0)
			return;

		Queue<Integer> queue = new LinkedList<>();
		queue.add(1);

		for(int idx=1; idx <= number; idx++) {
			Integer current = queue.remove();
			System.out.println(current);
			queue.add(current * 10);
			queue.add(current * 10 + 1);
		}
		System.out.println();
	}
}