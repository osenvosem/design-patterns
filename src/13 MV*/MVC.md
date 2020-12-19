MVC is an architectural design pattern that encourages improved application organization through a separation of concerns. It enforces the isolation of business data (Models) from user interfaces (Views), with a third component (Controllers) traditionally managing logic and user-input.

## Model

- Models manage the data for an application and contain business logic.
- When a model changes it will typically notify its observers.
- Models also usually have property validation and persistence.
- Models can be grouped into collections and application can react to notification from a collection of models.
- Models usually should be **fat** but controllers **skinny**.

## View

- Views are a visual representation of models that present a filtered view of their current state.
- A view typically observes a model and is notified when the model changes, allowing the view to update itself accordingly.

## Controller

Controllers are an intermediary between models and views which are classically responsible for updating the model when the user manipulates the view. Controllers manage the logic and coordination between models and views in an application.

The view could delegate handling user events to the controller when the view sees fit. The view _could_ delegate handling model change events to the controller if the view sees fit, but this is not the traditional role of the controller.
