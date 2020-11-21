import { CarA, CarB, ObjectType } from "./constructor";

describe("constructor", () => {
  it("CarA should create object", () => {
    const obj = new CarA("Volvo", 1990, "blue");
    expect(obj).toEqual<ObjectType>({
      model: "Volvo",
      year: 1990,
      color: "blue",
    });
  });

  it("CarB should create object", () => {
    const obj = new CarB("Mazda", 2010, "black");
    expect(obj).toEqual<ObjectType>({
      model: "Mazda",
      year: 2010,
      color: "black",
    });
  });
});
