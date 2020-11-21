import { CounterModuleReturnType, ExternalDependencyType } from "./types";

export const externalDependency = {
  defaultCounterValue: 3,
};

export const counterModule = ((
  dep: ExternalDependencyType
): CounterModuleReturnType => {
  let counter = dep.defaultCounterValue; // private variable
  const resetPrivate = (): void => {
    counter = 0;
  };

  const module: CounterModuleReturnType = {
    increment() {
      counter++;
      return counter;
    },
    decrement() {
      counter--;
      return counter;
    },
    reset() {
      resetPrivate();
      return counter;
    },
    get() {
      return counter;
    },
  };

  return module;
})(externalDependency);
