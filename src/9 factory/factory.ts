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

export class Car {
  doors: number;
  state: string;
  color: string;

  constructor({
    doors = 4,
    state = "brand new",
    color = "silver",
  }: TCarOptions) {
    this.doors = doors;
    this.state = state;
    this.color = color;
  }
}

export class Truck {
  state: string;
  wheelSize: string;
  color: string;

  constructor({
    state = "used",
    wheelSize = "large",
    color = "blue",
  }: TTruckOptions) {
    this.state = state;
    this.wheelSize = wheelSize;
    this.color = color;
  }
}

export class VehicleFactory {
  private vehicleClass: any;

  createVehicle(options: TCarOptions | TTruckOptions): Car | Truck {
    switch (options.vehicleType) {
      case "car":
        this.vehicleClass = Car;
        break;
      case "truck":
        this.vehicleClass = Truck;
        break;
    }

    return new this.vehicleClass(options);
  }
}
