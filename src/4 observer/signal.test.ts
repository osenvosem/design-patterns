import { Signal } from "./signal";

describe("Signal", () => {
  it(".add() should add listeners", () => {
    const button = {
      clicked: new Signal(),
    };
    button.clicked.add(jest.fn());
    button.clicked.add(jest.fn());

    expect(button.clicked.count()).toBe(2);
  });

  it(".dispatch() should trigger all listeners with correct arguments", () => {
    const button = {
      clicked: new Signal(),
    };
    const testListenerA = jest.fn();
    const testListenerB = jest.fn();
    const testArgA = true;
    const testArgB = { name: "John" };

    button.clicked.add(testListenerA);
    button.clicked.add(testListenerB);
    button.clicked.dispatch(testArgA, testArgB);

    expect(testListenerA).toHaveBeenCalledWith(testArgA, testArgB);
    expect(testListenerB).toHaveBeenCalledWith(testArgA, testArgB);
  });

  it(".remove() should remove a listener", () => {
    const button = {
      clicked: new Signal(),
    };
    const testListenerA = jest.fn();
    const testListenerB = jest.fn();

    button.clicked.add(testListenerA);
    button.clicked.add(testListenerB);

    expect(button.clicked.count()).toBe(2);

    button.clicked.remove(testListenerA);

    expect(button.clicked.count()).toBe(1);
  });

  it(".count() should correctly count listeners", () => {
    const button = {
      clicked: new Signal(),
    };
    Array.from({ length: 10 }, () => button.clicked.add(jest.fn()));

    expect(button.clicked.count()).toBe(10);
  });
});
