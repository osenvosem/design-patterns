// **Flyweight** corresponds to an interface through which flyweights are able to receive and act on extrinsic states
export interface CoffeeOrder {
  serveCoffee(context: CoffeeOrderContext): void;
  getFlavor(): void;
}

// **Helper**
export class CoffeeOrderContext {
  constructor(public tableNumber: number) {}
  getTable(): number {
    return this.tableNumber;
  }
}

// **Concrete Flyweight** actually implements the Flyweight interface and stores intrinsic state. Concrete Flyweights need to be sharable and capable of manipulating state that is extrinsic
export class CoffeeFlavor implements CoffeeOrder {
  constructor(public newFlavor: string) {}

  getFlavor(): string {
    return this.newFlavor;
  }

  serveCoffee(context: CoffeeOrderContext): string {
    return `Serving coffee flavor ${
      this.newFlavor
    } to table ${context.getTable()}`;
  }
}

// **Flyweight Factory**
export class CoffeeFlavorFactory {
  private flavors: { [key: string]: CoffeeFlavor } = {};
  private length = 0;

  getCoffeeFlavor(flavorName: string): CoffeeFlavor {
    if (this.flavors[flavorName]) {
      return this.flavors[flavorName];
    } else {
      this.length++;
      return (this.flavors[flavorName] = new CoffeeFlavor(flavorName));
    }
  }

  getTotalCoffeeFlavorsMade(): number {
    return this.length;
  }
}
