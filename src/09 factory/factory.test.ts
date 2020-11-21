import {
  VehicleFactory,
  Car,
  Truck,
  TCarOptions,
  TTruckOptions,
} from "./factory";

describe("Factory", () => {
  it("should return instance of the Car class", () => {
    const factory = new VehicleFactory();
    const carOptions: TCarOptions = {
      vehicleType: "car",
      color: "blue",
      doors: 5,
      state: "brand new",
    };

    expect(factory.createVehicle(carOptions)).toBeInstanceOf(Car);
  });
  it("should return instance of the Truck class", () => {
    const factory = new VehicleFactory();
    const truckOptions: TTruckOptions = {
      vehicleType: "truck",
      color: "black",
      state: "brand new",
      wheelSize: "big",
    };

    expect(factory.createVehicle(truckOptions)).toBeInstanceOf(Truck);
  });
});
