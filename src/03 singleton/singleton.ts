type TConstructorArgs = [string, number, string] | [];

export class Singleton {
  private static instance?: Singleton;
  private static internalConstructorCall = false;

  static getInstance(...args: TConstructorArgs): Singleton {
    if (Singleton.instance && args.length > 0) {
      throw new Error(
        "Arguments to constructor can be only passed during first invocation."
      );
    }

    if (args.length !== 3) {
      throw new Error("Constructor expects 3 arguments.");
    }

    if (!Singleton.instance) {
      Singleton.internalConstructorCall = true;
      Singleton.instance = new Singleton(...args);
      Singleton.internalConstructorCall = false;
    }

    return Singleton.instance;
  }

  constructor(public model: string, public year: number, public color: string) {
    if (!Singleton.internalConstructorCall) {
      throw new Error(
        "This class is supposed to be used as a singletone. Please, use `getInstance` method to get class instance."
      );
    }
  }
}
