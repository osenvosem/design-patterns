/**
 * Implementation of a variation of Observer Pattern — Event Emitter Pattern
 */

interface TEvents {
  [key: string]: TListener[];
}

export interface TListener {
  (...args: any[]): void;
}

export class EventEmitter {
  private events: TEvents = {};

  addEventListener(eventName: string, listener: TListener): void {
    if (!this.events[eventName]) {
      this.events[eventName] = [listener];
    } else {
      this.events[eventName].push(listener);
    }
  }

  dispatchEvent(eventName: string, ...args: any[]): void {
    if (this.events[eventName]) {
      this.events[eventName].forEach((listener: TListener) => {
        listener(...args);
      });
    }
  }

  removeEventListener(eventName: string, listener: TListener): void {
    const eventArr = this.events[eventName];
    if (Array.isArray(eventArr)) {
      const index = eventArr.findIndex((l: TListener) => l === listener);

      if (index !== -1) {
        eventArr.splice(index, 1);
      }
    }
  }

  countListeners(eventName: string): number {
    const eventArr = this.events[eventName];
    return Array.isArray(eventArr) ? eventArr.length : 0;
  }
}
