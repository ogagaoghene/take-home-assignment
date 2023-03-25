public class EnemyUFO extends GameObject {
  private int size;

  public EnemyUFO(int x, int y) {
    super(x, y);
  }

  public int getSize() {
    return size;
  }

  public void setSize(int size) {
    this.size = size;
  }
}