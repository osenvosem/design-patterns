In traditional programming languages such as C++ and Lisp, Mixins are classes which offer functionality that can be easily inherited by a sub-class or group of sub-classes for the purpose of function re-use.

In JavaScript, we can look at inheriting from Mixins as a means of collecting functionality through extension. Each new object we define has a prototype from which it can inherit further properties. Prototypes can inherit from other object prototypes but, even more importantly, can define properties for any number of object instances. We can leverage this fact to promote function re-use.
