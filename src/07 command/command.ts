interface CarManager {
  requestInfo(model: string, id: string): string;
  buyVehicle(model: string, id: string): string;
  arrangeViewing(model: string, id: string): string;
  execute(
    methodName: keyof CarManager,
    ...restArgs: [string, string]
  ): string | undefined;
}

export const carManager: CarManager = {
  // request information
  requestInfo(model, id) {
    return `The information for ${model} with ID ${id} is foobar`;
  },

  // purchase the car
  buyVehicle(model, id) {
    return `You have successfully purchased Item ${id}, a ${model}`;
  },

  // arrange a viewing
  arrangeViewing(model, id) {
    return `You have successfully booked a viewing of ${model}(${id})`;
  },

  // execute a method by it's name with arguments
  execute(methodName, ...restArgs) {
    if (methodName === "execute" || !this[methodName]) return undefined;

    return this[methodName](...restArgs);
  },
};
