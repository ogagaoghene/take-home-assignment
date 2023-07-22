public class Main {
    public static void main(String[] arg) {
        String str = "(1 + 2)";
        Expression exp = new Expression();
        boolean result = exp.isBalanced(str);
        System.out.println(result);
    }
}