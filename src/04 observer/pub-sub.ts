/**
 * Implementation of a variation of Observer Pattern — Publish/Subscribe Pattern
 */

export interface TSubscriber {
  (data: any): void;
}

export class PubSub {
  private subscribers = new Map<string, Set<TSubscriber>>();

  subscribe(topic: string, subscriber: TSubscriber): TSubscriber {
    const topicSet = this.subscribers.get(topic);
    if (topicSet) {
      topicSet.add(subscriber);
    } else {
      this.subscribers.set(topic, new Set([subscriber]));
    }

    return subscriber;
  }

  unsubscribe(subscriber: TSubscriber): boolean {
    let result = false;
    for (const topicSet of this.subscribers.values()) {
      if (topicSet.delete(subscriber)) {
        result = true;
      }
    }
    return result;
  }

  publish(topic: string, data: any): void {
    const topicSet = this.subscribers.get(topic);

    if (topicSet) {
      for (const subscriber of topicSet) {
        subscriber(data);
      }
    }
  }

  count(topic: string): number | undefined {
    return this.subscribers.get(topic)?.size;
  }
}
