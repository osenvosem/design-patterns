MVVM (Model View ViewModel) is an architectural pattern based on MVC and MVP, which attempts to more clearly separate the development of user-interfaces (UI) from that of the business logic and behavior in an application. To this end, many implementations of this pattern make use of declarative data bindings to allow a separation of work on Views from other layers.

This facilitates UI and development work occurring almost simultaneously within the same codebase. UI developers write bindings to the ViewModel within their document markup (HTML), where the Model and ViewModel are maintained by developers working on the logic for the application.

# The View and the ViewModel

The ViewModel can be considered a specialized Controller that acts as a data converter. It changes Model information into View information, passing commands from the View to the Model.

Views and ViewModels communicate using data-bindings and events. As we saw in our initial ViewModel example, the ViewModel doesn’t just expose Model attributes but also access to other methods and features such as validation.

Our Views handle their own user-interface events, mapping them to the ViewModel as necessary. Models and attributes on the ViewModel are synchronized and updated via two-way data-binding.

Triggers (data-triggers) also allow us to further react to changes in the state of our Model attributes.

# The ViewModel and the Model

Whilst it may appear the ViewModel is completely responsible for the Model in MVVM, there are some subtleties with this relationship worth noting. The ViewModel can expose a Model or Model attributes for the purposes of data-binding and can also contain interfaces for fetching and manipulating properties exposed in the view.
