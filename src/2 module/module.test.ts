import { counterModule as classicModule } from "./classic-module";
import { counterModule as revealingModule } from "./revealing-module";
import { CounterModuleReturnType } from "./types";

const testFunc = (mod: CounterModuleReturnType) => (): void => {
  expect(mod.get()).toBe(3);

  mod.increment();
  mod.increment();
  expect(mod.get()).toBe(5);

  mod.decrement();
  expect(mod.get()).toBe(4);

  mod.reset();

  expect(mod.get()).toBe(0);
};

describe("classic-module", () => {
  it(
    "methods of classic module should mutate counter as expected",
    testFunc(classicModule)
  );

  it(
    "methods of revealing module should mutate counter as expected",
    testFunc(revealingModule)
  );
});
