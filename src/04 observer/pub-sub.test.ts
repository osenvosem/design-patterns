import { PubSub } from "./pub-sub";

describe("PubSub", () => {
  test(".subscribe() should add subscribers to subscribers Map", () => {
    const pubsub = new PubSub();
    pubsub.subscribe("test", jest.fn());
    pubsub.subscribe("test", jest.fn());

    expect(pubsub.count("test")).toBe(2);
  });

  test(".unsubscribe() should remove a subscriber from subscribers Map and return `true` if the subscriber was in the Map, and `false` if there isn't", () => {
    const pubsub = new PubSub();
    const subscriberA = jest.fn();
    const subscriberB = jest.fn();
    pubsub.subscribe("test", subscriberA);
    pubsub.subscribe("test", subscriberB);

    expect(pubsub.unsubscribe(subscriberA)).toBe(true);
    expect(pubsub.unsubscribe(subscriberA)).toBe(false);
  });

  test(".publish() should execute subscribers with corrent data passed", () => {
    const pubsub = new PubSub();
    const subscriberA = jest.fn();
    const subscriberB = jest.fn();
    pubsub.subscribe("test", subscriberA);
    pubsub.subscribe("test", subscriberB);
    const data = { name: "John", age: 32 };
    pubsub.publish("test", data);

    expect(subscriberA).toHaveBeenCalled();
    expect(subscriberB).toHaveBeenCalled();
    expect(subscriberA).toHaveBeenCalledWith(data);
    expect(subscriberB).toHaveBeenCalledWith(data);
  });

  test(".count() should return number of subscribers of a specific topic or `undefined` if there is no one", () => {
    const pubsub = new PubSub();
    const subscriberA = jest.fn();
    const subscriberB = jest.fn();
    pubsub.subscribe("test", subscriberA);
    pubsub.subscribe("test", subscriberB);

    expect(pubsub.count("test")).toBe(2);
    expect(pubsub.count("non-existing-topic")).toBeUndefined();
  });
});
