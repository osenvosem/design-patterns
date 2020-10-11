/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vehicle, MacBook, memory, engraving, insurance } from "./decorator";

describe("Decorator basic", () => {
  const testBaseObj: Vehicle = {
    model: "default",
    licence: "00000-000",
    vehicleType: "car",
  };

  const testDecoratedObj: { [key: string]: any } = {
    licence: "00000-000",
    vehicleType: "truck",
    model: "CAT",
    color: "blue",
  };
  function setModel(this: typeof testDecoratedObj, model: string): void {
    this.model = model;
  }

  function setColor(this: typeof testDecoratedObj, color: string): void {
    this.color = color;
  }

  testDecoratedObj.setModel = setModel;
  testDecoratedObj.setColor = setColor;

  it("should be decorated", () => {
    // Basic instance
    const car = new Vehicle("car");
    expect(car).toEqual(testBaseObj);

    // Decorated instance
    const truck: { [key: string]: any } & Vehicle = new Vehicle("truck");
    truck.setModel = setModel;
    truck.setColor = setColor;
    truck.setModel("CAT");
    truck.setColor("blue");

    expect(truck).toEqual(testDecoratedObj);

    // Again test that the basic instance remained unaltered
    const car2 = new Vehicle("car");
    expect(car2).toEqual(testBaseObj);
  });
});

describe("Decorator multiple application", () => {
  it("should correctly apply multiple decorators", () => {
    const mb = new MacBook();
    expect(mb.cost()).toBe(1200);

    memory(mb);
    engraving(mb);
    insurance(mb);

    expect(mb.cost()).toBe(1725);
    expect(mb.screenSize()).toBe(15.6);
  });
});
