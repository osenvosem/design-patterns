Signal pattern is very similar to the Publish/Subscribe pattern. The difference is that all events are predefined as properties on an object.

- Each event type has its own controller.
- Doesn't rely on strings for event types.

# Pros

- Doesn't rely on strings.
  - Code-completion works properly.
  - Trying to dispatch or listen to an event type that doesn't exist throws errors (helps you find errors early).
  - No need to create constants to store string values.
- Granular control over each listener and event type.
  - Each signal is already a specific target/container.
- Easy to identify which signals the object dispatch.
- Favor composition over inheritance.
  - Doesn't mess with the prototype chain.

# Cons

- Can't dispatch arbitrary events. (which is also a pro in most cases)
- Each event-type is an object member. (which is also a pro in most cases)
  - Can help to clutter the namespace if you have multiple event types.
- Doesn't pass the event type and event target to callbacks making it harder to use generic handlers (that works for multiple event types and targets).
- Is different from what most people are used to.
