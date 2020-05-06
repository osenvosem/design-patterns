import { EventEmitter } from "./event-emitter";

describe("Event Emitter", () => {
  test(".addEventListener() should add a new event listener to event array", () => {
    const ee = new EventEmitter();
    ee.addEventListener("test", jest.fn());

    expect(ee.countListeners("test")).toBe(1);
  });

  test(".dispatchEvent() should trigger all event listeners associated with a particular event passing correct arguments to it", () => {
    const ee = new EventEmitter();
    const testListenerA = jest.fn();
    const testListenerB = jest.fn();
    const testArgA = true;
    const testArgB = { name: "John" };

    ee.addEventListener("test", testListenerA);
    ee.addEventListener("test", testListenerB);
    ee.dispatchEvent("test", testArgA, testArgB);

    expect(testListenerA).toHaveBeenLastCalledWith(testArgA, testArgB);
    expect(testListenerB).toHaveBeenLastCalledWith(testArgA, testArgB);
  });

  test(".removeEventListener() should remove event listener", () => {
    const ee = new EventEmitter();
    const testListenerA = jest.fn();
    const testListenerB = jest.fn();

    ee.addEventListener("test", testListenerA);
    ee.addEventListener("test", testListenerB);

    expect(ee.countListeners("test")).toBe(2);

    ee.removeEventListener("test", testListenerA);

    expect(ee.countListeners("test")).toBe(1);
  });

  test(".countListeners() should count listeneras", () => {
    const ee = new EventEmitter();
    ee.addEventListener("test", jest.fn());
    ee.addEventListener("test", jest.fn());

    expect(ee.countListeners("test")).toBe(2);
  });
});
