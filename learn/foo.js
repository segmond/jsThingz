var x = Math.pow(2,3);
console.log(x);

x = isNaN(5);
console.log(x);

x = isNaN('abc');
console.log(x);

function foo() {
"use strict"
	var y = 20;
	eval("var y = 22;"); // get's ignored because we are in strict mode
	console.log(y);
	
}

foo();
