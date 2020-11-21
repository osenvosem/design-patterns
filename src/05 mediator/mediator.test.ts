import { TParticipant, Chatroom, Participant } from "./mediator";

describe("Mediator", () => {
  test("should send a private message to a specific participant", () => {
    const chatroom = new Chatroom();
    const partA = new Participant("participant A");
    const partB = new Participant("participant B");
    const partC = new Participant("participant C");
    [partA, partB, partC].forEach((part: TParticipant) => {
      chatroom.register(part);
    });

    const receiveMock = jest.fn();
    const testMessage = "This is a test message";

    partB.receive = receiveMock;

    partA.send(testMessage, partB);

    expect(receiveMock).toHaveBeenCalledWith(testMessage, partA);
  });

  test("should broadcast message to all participants except sender", () => {
    const chatroom = new Chatroom();
    const partA = new Participant("participant A");
    const partB = new Participant("participant B");
    const partC = new Participant("participant C");
    [partA, partB, partC].forEach((part: TParticipant) => {
      chatroom.register(part);
    });

    const receiveMockA = jest.fn();
    const receiveMockB = jest.fn();
    const receiveMockC = jest.fn();
    const testMessage = "This is a test message";

    partA.receive = receiveMockA;
    partB.receive = receiveMockB;
    partC.receive = receiveMockC;

    partA.send(testMessage);

    expect(receiveMockA).toHaveBeenCalledTimes(0);
    expect(receiveMockB).toHaveBeenCalledWith(testMessage, partA);
    expect(receiveMockC).toHaveBeenLastCalledWith(testMessage, partA);
  });
});
