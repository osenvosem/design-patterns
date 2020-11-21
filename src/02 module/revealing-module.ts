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

  function increment(): number {
    counter++;
    return counter;
  }

  function decrement(): number {
    counter--;
    return counter;
  }

  function reset(): number {
    resetPrivate();
    return counter;
  }

  function get(): number {
    return counter;
  }

  // the returning object is filled with references of private members that we want to make public
  const module: CounterModuleReturnType = { increment, decrement, reset, get };

  return module;
})(externalDependency);
