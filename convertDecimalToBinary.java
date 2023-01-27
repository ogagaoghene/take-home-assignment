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
}