import { Singleton } from "./singleton";

describe("singleton", () => {
  it("should throw an error if instantiated directly", () => {
    expect(() => new Singleton("Volvo", 2000, "blue")).toThrow();
  });

  it("getInstance should throw error if number of arguments not equal to 3", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    expect(() => Singleton.getInstance("Volvo")).toThrow();
  });

  it("getInstance should initialize correct object during first invocation", () => {
    const obj = Singleton.getInstance("Volvo", 2000, "blue");
    expect(obj).toEqual({ model: "Volvo", year: 2000, color: "blue" });
  });

  it("getInstance should throw error when trying to pass arguments during subsequent invocation", () => {
    expect(() => Singleton.getInstance("Volvo", 2000, "blue")).toThrow();
  });
});
