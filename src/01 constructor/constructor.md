A constructor is a special method used to initialize a newly created object once memory has been allocated for it.

Object constructors are used to create specific types of objects - both preparing the object for use and accepting arguments which a constructor can use to set the values of member properties and methods when the object is first created.

# Difference between constructor and prototype patterns

Reusability of the components...

## Constructor

When you create a new constructor you will create a new instance of everything and importantly any change made to the instances will only affect them and not the others.

## Prototype

When you create a new object using the prototype it will reuse the logic and any change to the prototype chain will affect everyone else.
