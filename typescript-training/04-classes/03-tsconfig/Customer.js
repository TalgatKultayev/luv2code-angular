"use strict";
var Customer03 = /** @class */ (function () {
    function Customer03(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Customer03.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer03.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer03;
}());
//let's create an instance
var aCustomer = new Customer03("Tako", "Chako");
console.log(aCustomer.firstName);
console.log(aCustomer.lastName);
