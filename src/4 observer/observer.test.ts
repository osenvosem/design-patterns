import { ObserverList, Subject, Observer } from "./observer";

describe("ObserverList", () => {
  // helpers
  const getNewArrayOfTestObservers = (length: number): Observer[] =>
    Array.from({ length }, () => new Observer());
  const fillObserverList = (
    observerList: ObserverList,
    testArray: Observer[]
  ): void => testArray.forEach((observer) => observerList.add(observer));

  test(".get() should add a new observers", () => {
    const testArrayLength = 3;
    const observerList = new ObserverList();
    const observerArray = getNewArrayOfTestObservers(testArrayLength);
    fillObserverList(observerList, observerArray);

    expect(observerList.count()).toBe(testArrayLength);
  });

  test(".get() should return an observer by index", () => {
    const testArrayLength = 3;
    const observerList = new ObserverList();
    const observerArray = getNewArrayOfTestObservers(testArrayLength);
    fillObserverList(observerList, observerArray);

    expect(observerList.get(1)).toBe(observerArray[1]);
  });

  test(".get() should return undefined if the index passed is out of range", () => {
    const testArrayLength = 3;
    const observerList = new ObserverList();
    const observerArray = getNewArrayOfTestObservers(testArrayLength);
    fillObserverList(observerList, observerArray);

    expect(observerList.get(observerList.count())).toBeUndefined();
  });

  test(".indexOf() should return index of an observer passed", () => {
    const testArrayLength = 3;
    const observerList = new ObserverList();
    const observerArray = getNewArrayOfTestObservers(testArrayLength);
    fillObserverList(observerList, observerArray);

    expect(observerList.indexOf(observerArray[1])).toBe(1);
  });

  test(".indexOf() should return -1 if there is no such observer", () => {
    const testArrayLength = 3;
    const observerList = new ObserverList();
    const observerArray = getNewArrayOfTestObservers(testArrayLength);
    fillObserverList(observerList, observerArray);

    expect(observerList.indexOf(new Observer())).toBe(-1);
  });

  test(".removeAt() should remove observer from the list", () => {
    const testArrayLength = 3;
    const observerList = new ObserverList();
    const observerArray = getNewArrayOfTestObservers(testArrayLength);
    fillObserverList(observerList, observerArray);
    const testIndex = 1;
    const removedObserver = observerList.removeAt(testIndex);
    const [removedArrayObserver] = observerArray.splice(testIndex, 1);

    expect(removedObserver).toBe(removedArrayObserver);
    expect(observerList.count()).toBe(testArrayLength - 1);
  });

  test("Iterator should iterate observers", () => {
    const testArrayLength = 2;
    const observerList = new ObserverList();
    const observerArray = getNewArrayOfTestObservers(testArrayLength);
    fillObserverList(observerList, observerArray);

    const iterator = observerList[Symbol.iterator]();

    const first = iterator.next();
    expect(first.value).toBe(observerArray[0]);
    expect(first.done).toBe(false);

    const second = iterator.next();
    expect(second.value).toBe(observerArray[1]);
    expect(second.done).toBe(false);

    const final = iterator.next();
    expect(final.value).toBeUndefined();
    expect(final.done).toBe(true);
  });
});

describe("Subject", () => {
  test("addObserver() should add observer", () => {
    const subject = new Subject();
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    const { observers } = subject;

    subject.addObserver(new Observer());

    expect(observers.count()).toBe(1);
  });

  test(".removeObserver() removes observer", () => {
    const subject = new Subject();
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    const { observers } = subject;
    const testObserver1 = new Observer();
    const testObserver2 = new Observer();

    subject.addObserver(testObserver1);
    subject.addObserver(testObserver2);

    expect(observers.count()).toBe(2);

    subject.removeObserver(testObserver2);

    expect(observers.count()).toBe(1);
  });

  test(".notify() should notify all observers", () => {
    const subject = new Subject();
    const context = { name: "John", age: 32 };

    const testObserver1 = new Observer();
    const testObserver2 = new Observer();

    const mockCallback1 = jest.fn();
    const mockCallback2 = jest.fn();

    testObserver1.update = mockCallback1;
    testObserver2.update = mockCallback2;

    subject.addObserver(testObserver1);
    subject.addObserver(testObserver2);

    subject.notify(context);

    expect(mockCallback1).toHaveBeenCalledWith(context);
    expect(mockCallback2).toHaveBeenCalledWith(context);
  });
});
