"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function Car(model, year, color) {
  _classCallCheck(this, Car);
};

var volvo = new Car('volvo', 2020, 'brown');
console.log(volvo.color);
