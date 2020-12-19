Model-view-presenter (MVP) is a derivative of the MVC design pattern which focuses on improving presentation logic and testability.

The P in MVP stands for presenter. It's a component which contains the user-interface business logic for the view. Unlike MVC, invocations from the view are delegated to the presenter, which are decoupled from the view and instead talk to it through an interface. This allows for all kinds of useful things such as being able to mock views in unit tests.

# Model

- External presentation of data.
- Knows nothing about UI.
- Business objects.

# View

- How the data gets displayed.
- UI specific details.

# Presenter

- Handles interactions between model and view.
- A place to put non-UI business logic.
- Knows nothing about underlying UI implementation.

Normally, the view implementation instantiates the concrete presenter object, providing a reference to itself.

It can be implemented either with Supervising Controller or Passive View.
