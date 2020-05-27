A Mediator is an object that coordinates interactions (logic and behavior) between multiple objects. It makes decisions on when to call which objects, based on the actions (or inaction) of other objects and input.

The mediator extracts the workflow from the implementation details and creates a more natural abstraction at a higher level, showing us at a much faster glance what that workflow is.

The most popular usage of the Mediator pattern in JavaScript code is facilitating communications between GUI components of an app. The synonym of the Mediator is the Controller part of MVC pattern.

# Difference with PubSub:

The event aggregator (PubSub), as a pattern, is designed to deal with events. The mediator, though, only uses them because it’s convenient.

# Mediator Vs. Facade

The Mediator centralizes communication between modules where it's explicitly referenced by these modules. In a sense this is multidirectional. The Facade however just defines a simpler interface to a module or system but doesn't add any additional functionality. Other modules in the system aren't directly aware of the concept of a facade and could be considered unidirectional.
