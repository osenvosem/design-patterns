// The GoF refer to the prototype pattern as one which creates objects based on a template of an existing object through cloning

// Using classes

class BaseClass {
  constructor(public name: string) {}
}

export class Person extends BaseClass {
  constructor(name: string, public age: number) {
    super(name);
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  }
}

// Using Object.create

export const personPrototype = {
  name: "John",
  sayHello(): string {
    return `Hello there`;
  },
};

// Simulate prototypal inheritance using constructor function

const vehiclePrototype = {
  model: "",
  init(carModel: string): void {
    this.model = carModel;
  },
  getModel(): string {
    return `The model is ${this.model}`;
  },
};

export const vehicle = (model: string): typeof vehiclePrototype => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function F(): void {}
  F.prototype = vehiclePrototype;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const f = new F();
  f.init(model);

  return f;
};

// Alternative method with no initialization

type Proto = Record<string, unknown>;

export const beget = ((): ((proto: Proto) => Proto) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function F(): void {}
  return (proto: Proto): Proto => {
    F.prototype = proto;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return new F();
  };
})();
