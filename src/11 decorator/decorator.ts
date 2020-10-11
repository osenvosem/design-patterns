/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Basic decoration example
 */

export class Vehicle {
  public model = "default";
  public licence = "00000-000";

  constructor(public vehicleType: string = "car") {}
}

// Basic instance
new Vehicle("car");

// The instance to be decorated
const truck: { [key: string]: any } & Vehicle = new Vehicle("truck");

truck.setModel = function (model: string): void {
  this.model = model;
};

truck.setColor = function (color: string): void {
  this.color = color;
};

truck.setModel("CAT");
truck.setColor("blue");

// Basic instance is unaltered
new Vehicle("car");

/**
 * Decorating Objects With Multiple Decorators
 */

export class MacBook {
  cost(): number {
    return 1200;
  }
  screenSize(): number {
    return 15.6;
  }
}

// Decorator 1
export const memory = (macbook: MacBook): void => {
  const cost = macbook.cost();
  macbook.cost = (): number => {
    return cost + 75;
  };
};

// Decorator 2
export const engraving = (macbook: MacBook): void => {
  const cost = macbook.cost();
  macbook.cost = (): number => {
    return cost + 200;
  };
};

// Decorator 3
export const insurance = (macbook: MacBook): void => {
  const cost = macbook.cost();
  macbook.cost = (): number => {
    return cost + 250;
  };
};

const mb = new MacBook();

memory(mb);
engraving(mb);
insurance(mb);
