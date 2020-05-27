export interface TParticipant {
  name: string;
  chatroom?: TChatroom;
  send(message: string, to?: TParticipant): void;
  receive(message: string, from: TParticipant): void;
}

export interface TChatroom {
  participants: { [key: string]: TParticipant };
  register(participant: TParticipant): void;
  send(message: string, from: TParticipant, to?: TParticipant): void;
}

export class Participant implements TParticipant {
  chatroom?: TChatroom;
  constructor(public name: string) {}

  send(message: string, to?: TParticipant): void {
    if (this.chatroom) {
      this.chatroom.send(message, this, to);
    }
  }

  receive(message: string, from: TParticipant): void {
    console.log(`From ${from.name} to ${this.name}: ${message}`);
  }
}

export class Chatroom implements TChatroom {
  participants: { [key: string]: TParticipant } = {};
  register(participant: TParticipant): void {
    this.participants[participant.name] = participant;
    participant.chatroom = this;
  }
  send(message: string, from: TParticipant, to?: TParticipant): void {
    if (to) {
      to.receive(message, from);
    } else {
      for (const key in this.participants) {
        const currentParticipant = this.participants[key];
        if (currentParticipant !== from) {
          currentParticipant.receive(message, from);
        }
      }
    }
  }
}
