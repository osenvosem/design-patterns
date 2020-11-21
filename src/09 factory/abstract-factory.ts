export type TCarOptions = {
  vehicleType: "car";
  state: "brand new" | "used";
  doors: number;
  color: string;
};
export type TTruckOptions = {
  vehicleType: "truck";
  state: "brand new" | "used";
  wheelSize: string;
  color: string;
};

export class Vehicle {
  drive = true;
  breakDown = true;
}

export class Car extends Vehicle {
  doors: number;
  state: string;
  color: string;

  constructor({
    doors = 4,
    state = "brand new",
    color = "silver",
  }: TCarOptions) {
    super();
    this.doors = doors;
    this.state = state;
    this.color = color;
  }
}

export class Truck extends Vehicle {
  state: string;
  wheelSize: string;
  color: string;

  constructor({
    state = "used",
    wheelSize = "large",
    color = "blue",
  }: TTruckOptions) {
    super();
    this.state = state;
    this.wheelSize = wheelSize;
    this.color = color;
  }
}

export type TVehicleTypes = "car" | "truck";

export class AbstractVehicleFactory {
  private types: Record<string, any> = {};

  getVehicle(
    type: TVehicleTypes,
    options: Record<string, string | number>
  ): Car | Truck | null {
    const Vehicle = this.types[type];

    return Vehicle ? new Vehicle(options) : null;
  }

  registerVehicle(type: TVehicleTypes, VehicleClass: any): void {
    // only register classes that extends the common AFVehicle parent class
    if (VehicleClass.prototype instanceof Vehicle) {
      this.types[type] = VehicleClass;
    }
  }
}
