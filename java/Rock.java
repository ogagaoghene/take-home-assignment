public class Rock extends GameObject {
  private int mass;

  public Rock(int x, int y) {
    super(x,y);
  }

  public int getMass() {
    return this.mass;
  }

  public void setMass(int mass) {
    this.mass = mass;
  }
}