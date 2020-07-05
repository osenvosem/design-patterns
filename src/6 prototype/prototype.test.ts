import { Person, personPrototype, vehicle, beget } from "./prototype";

describe("Prototype", () => {
  test("Using classes", () => {
    const name = "John";
    const age = 20;
    const obj = new Person(name, age);

    expect(obj.name).toBe(name);
    expect(obj.age).toBe(age);
  });

  test("Using Object.create", () => {
    const obj = Object.create(personPrototype, { age: { value: 20 } });

    expect(obj.name).toBe("John");
    expect(obj.age).toBe(20);
  });

  test("Using constructor function", () => {
    const model = "Ford Mustang";
    const car = vehicle(model);

    expect(car.model).toBe(model);
    expect(car.getModel()).toContain(model);
  });

  test("Using constructor function with no init", () => {
    const name = "John",
      age = 20;
    const proto = { name, age };
    const obj = beget(proto);

    expect(obj.name).toBe(name);
    expect(obj.age).toBe(age);
  });
});
