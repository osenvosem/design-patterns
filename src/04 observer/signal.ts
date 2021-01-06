/**
 * Implementation of a variation of Observer Pattern — Signal Pattern
 */

export interface TListener {
  (...args: any[]): void;
}

export class Signal {
  private listeners: TListener[] = [];

  add(listener: TListener): void {
    this.listeners.push(listener);
  }

  dispatch(...args: any[]): void {
    for (const listener of this.listeners) {
      listener(...args);
    }
  }

  remove(listener: TListener): void {
    const index = this.listeners.findIndex((l: TListener) => l === listener);
    if (index !== -1) {
      this.listeners.splice(index, 1);
    }
  }

  count(): number {
    return this.listeners.length;
  }
}

export const eventCollection = {
  eventOne: new Signal(),
  eventTwo: new Signal(),
};
