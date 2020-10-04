import { AbstractVehicleFactory, Car, Truck } from "./abstract-factory";

describe("Abstract factory", () => {
  it("should return instance of the Car class", () => {
    const abstractVehicleFactory = new AbstractVehicleFactory();
    abstractVehicleFactory.registerVehicle("car", Car);
    const car = abstractVehicleFactory.getVehicle("car", {
      state: "brand new",
      color: "yellow",
    });

    expect(car).toBeInstanceOf(Car);
  });

  it("should return instance of the Truck class", () => {
    const abstractVehicleFactory = new AbstractVehicleFactory();
    abstractVehicleFactory.registerVehicle("truck", Truck);
    const truck = abstractVehicleFactory.getVehicle("truck", {
      state: "used",
      color: "green",
      wheelSize: "small",
    });

    expect(truck).toBeInstanceOf(Truck);
  });
});
