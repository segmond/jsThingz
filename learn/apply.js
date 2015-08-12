var person, first, last;
var tax, foo;

last = "Smith";
first = "John";
foo = "Taxes! Boo!";

person = function() {
    print(this.last + "," + this.first);
};

person(); // this will point to window
person.apply(null); // still preserves the "this" state
person.apply({last: "Cooper"}); // this now points to the object keyword we passed in
// we get "Cooper, undefined"
person.call(null); // still preserves the "this" state
person.call({last: "Cooper", first: "Canyon"}); // this now points to the object keyword we passed in

function tax (price, provincial, federal) {
    print(this.foo);
    return price * provincial * federal;
}

print(tax(100, 1.05, 1.095));

print(tax.apply(null, [100, 1.05, 1.095])); // preserves it so we can still reference this.foo

print(tax.apply({}, [100, 1.05, 1.095])); // trashes it

print(tax.call(null, 100, 1.05, 1.095)); // preserves it so we can still reference this.foo

print(tax.call({}, 100, 1.05, 1.095)); // trashes it

// call is just like apply, except that instead of passing in the args in an array, they are passed
// in, individually

