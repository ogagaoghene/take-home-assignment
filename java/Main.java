public class Main {
  public static void main(String[] argv) {
    SpaceShip spaceship = new SpaceShip(100,200);
    spaceship.shootTheGun();
    System.out.println("I am at " + spaceship.getX() + ", " + spaceship.getY());
  }
}