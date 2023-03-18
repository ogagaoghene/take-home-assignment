<?php 
interface IVehicle 
{
  public function getManufacturer(): string;
  public function setManufacturer(string $manufacturer): void;
  public function getModel(): string;
  public function setModel(string $model): void;
  public function drive(): void;
  public function stop(): void;
}

interface IDataModel 
{
  public function getData(): array;
}

abstract class AbstractVehicle implements IVehicle
{
  protected $manufacturer;
  protected $model;

  public function __construct($manufacturer, $model)
  {
    echo "Calling Abstract class constructor for $manufacturer. \n";
    $this->manufacturer = $manufacturer;
    $this->model = $model;
  }

  public function getManufacturer(): string 
  {
    return $this->manufacturer;
  }

  public function setManufacturer(string $manufacturer): void
  {
    $this->manufacturer = $manufacturer;
  }

  public function getModel(): string
  {
    return $this->model;
  }

  public function setModel(string $model): void 
  {
    $this->model = model;
  }

  public function drive(): void 
  { 
    echo $this->manufacturer . $this->model. "is" . "<driving/stopping>";
  }

  public function stop(): void 
  {
    echo "<$this->manufacturer > " . "<$this->model>". " is " . "<driving/stopping>";
  }
}

class Car extends AbstractVehicle implements IDataModel
{
  public $color;
  private $data = [];

  public function __construct($color, $manufacturer, $model)
  {
    parent::__construct($manufacturer, $model);
    $this->data[$color] = $color;
    $this->data[$manufacturer] = $manufacturer;
    $this->data[$model] = $model;
  }

  public function getData(): array
  {
    return $this->data;
  }
}

$car = new Car('Green', 'BMW', '2003');
print_r($car->getData());
print_r($car->drive());
