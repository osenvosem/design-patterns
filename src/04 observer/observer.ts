/**
 * An iterable data structure for storing observers
 *
 * Of course, we could use Set or Array instead of implementing our own
 * iterable data structure, but it alway nice to get some practice :)
 */

export class ObserverList implements Iterable<Observer> {
  private observerList: Observer[] = [];

  add(obj: Observer): number {
    return this.observerList.push(obj);
  }

  count(): number {
    return this.observerList.length;
  }

  get(index: number): Observer | void {
    return this.observerList[index];
  }

  indexOf(obj: Observer, startIndex?: number): number {
    const result = this.observerList.findIndex(
      (item: Observer, index: number) => {
        if (startIndex && index < startIndex) {
          return false;
        }
        return item === obj;
      }
    );

    return result ?? -1;
  }

  removeAt(index: number): Observer | void {
    if (index > 0 && index < this.count()) {
      return this.observerList.splice(index, 1)[0];
    }
  }

  [Symbol.iterator](): Iterator<Observer> {
    let i = 0;
    return {
      next: (): IteratorResult<Observer> => {
        const observer = this.get(i);
        if (observer) {
          i++;
          return { value: observer, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }
}

/**
 * Subject maintains a list of observers, facilitates adding or removing
 * observers
 */

export class Subject {
  private observers = new ObserverList();

  addObserver(observer: Observer): void {
    this.observers.add(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers.removeAt(this.observers.indexOf(observer));
  }

  notify<T>(context: T): void {
    for (const observer of this.observers) {
      observer.update<T>(context);
    }
  }
}

/**
 * Observer: provides an update interface for objects that need to be
 * notified of a Subject's changes of state
 */

export class Observer {
  update<T>(context: T): T {
    return context;
  }
}
