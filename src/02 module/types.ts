export interface CounterModuleReturnType {
  increment(arg: void): number;
  decrement(arg: void): number;
  reset(arg: void): number;
  get(arg: void): number;
}

export interface ExternalDependencyType {
  defaultCounterValue: number;
}
