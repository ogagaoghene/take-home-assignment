class SpaceShip extends GameObject {
  private int bullets;
  private boolean canFire;

  public void shootTheGun() {
    System.out.println("Shoot the gun");
  }
  public SpaceShip(int x, int y) {
    super(x,y);
  }

  public int getBullets() {
    return bullets;
  }

  public void setBullets(int bullets) {
    this.bullets = bullets;
  }

  public boolean isCanFire() {
    return canFire;
  }

  public void setCanFire(boolean canFire) {
    this.canFire = canFire;
  }
}