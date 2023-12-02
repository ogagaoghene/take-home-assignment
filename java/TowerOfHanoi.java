public class TowerOfHanoi {

    static void Tower(int numDisc, int source, int destination, int aux) {
        if (numDisc == 1) {
            System.out.println(source + "-->" + destination);
        }
        else {
            Tower(numDisc-1, source, aux, destination);
            System.out.println(source + "-->" + destination);
            Tower(numDisc-1, aux, destination, source);
        }
    }
    public static void main(String[] argv) {
        int discs = 3;
        Tower(discs, 1, 2, 3);
    }
}