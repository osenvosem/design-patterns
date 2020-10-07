import { A, B, C, combinePrototypes, D, myMixin, F } from "./mixin.proto";

describe("Mixin prototypes combination", () => {
  it("should have props and methods of mixins", () => {
    class MyClass extends combinePrototypes(A, B, C) {}
    const myObj = new MyClass();

    expect(myObj.a).toBe(new A().a);
    expect(myObj.b).toBe(new B().b);
    expect(myObj.sayHello()).toBe(new B().sayHello());
    expect(myObj.c).toBe(new C().c);
  });
});

describe("Mixin extend prototype", () => {
  it("should have props and methods from mixin", () => {
    const d = new D();
    expect((d as D & { sayHello(): string }).sayHello()).toBe(
      myMixin.sayHello()
    );
  });
});

describe("Mixin extend object in constructor", () => {
  it("should correctly extend object", () => {
    const f = new F();
    expect((f as F & { sayHello(): string }).sayHello()).toBe(
      myMixin.sayHello()
    );
  });
});
