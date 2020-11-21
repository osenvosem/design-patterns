import {
  CoffeeFlavorFactory,
  CoffeeOrderContext,
} from "./coffee-order";

describe("Flyweight coffee order", () => {
  it("should return same object", () => {
    const testFlavor = "Cappuccino";
    const testTable = 12;
    const factory = new CoffeeFlavorFactory();
    const coffeeFlavor = factory.getCoffeeFlavor(testFlavor);
    const coffeeOrderContext = new CoffeeOrderContext(testTable);

    expect(coffeeFlavor).toBe(factory.getCoffeeFlavor(testFlavor));
    expect(factory.getTotalCoffeeFlavorsMade()).toBe(1);
    expect(coffeeFlavor.serveCoffee(coffeeOrderContext)).toContain(
      testFlavor
    );
    expect(coffeeFlavor.serveCoffee(coffeeOrderContext)).toContain(
      testTable
    );
  });
});
