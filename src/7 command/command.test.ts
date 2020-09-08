import { carManager } from "./command";

describe("Command", () => {
  it("should invoke an existing method and return correct string", () => {
    const method = "requestInfo";
    const model = "Ferrari";
    const id = "342343";
    const resultStr = `The information for ${model} with ID ${id} is foobar`;

    expect(carManager.execute(method, model, id)).toBe(resultStr);
  });

  it("should return `undefined` if methods not exist or its name `execute`", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const method: any = "nonExistingMethod";
    const model = "Ferrari";
    const id = "342343";

    expect(carManager.execute(method, model, id)).toBeUndefined();
    expect(carManager.execute("execute", model, id)).toBeUndefined();
  });
});
