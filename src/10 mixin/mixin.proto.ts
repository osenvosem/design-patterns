/* eslint-disable @typescript-eslint/no-explicit-any */

// Inherit from a combination of prototypes

export class A {
  a = 1;
}

export class B {
  b = 2;
  sayHello(): string {
    return "Hello there!";
  }
}

export class C {
  c = 2;
}

export function combinePrototypes(
  ...bases: { new (): any }[]
): { new (): any } {
  const combinedClassName = bases.map((base) => base.name).join("_");

  const tempObj = {
    [combinedClassName]: function (): any {
      bases.forEach((base) => {
        Object.assign(this, new base());
      });

      bases.forEach((base) => {
        Object.getOwnPropertyNames(base.prototype)
          .filter((propName) => propName !== "constructor")
          .forEach((propName) => {
            this[propName] = base.prototype[propName];
          });
      });
    },
  };

  return tempObj[combinedClassName] as any;
}

export class MyClass extends combinePrototypes(A, B, C) {}

// Extend prototype with mixin

export const myMixin = {
  sayHello(): string {
    return "Hello there!";
  },
};

export class D {
  a = 1;
}

Object.assign(D.prototype, myMixin);

// Extend object using constructor

export class F {
  constructor() {
    Object.assign(this, myMixin);
  }
}
