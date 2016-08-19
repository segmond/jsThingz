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
	for (var i = 0; i < 5; i++) {
		console.log('hello world');
	}
	
}

foo();

function myfunc1(str) {
	return str.toUpperCase();
}

console.log(myfunc1("booya"));

function myfunc2() {
	console.log("blah");
}
setInterval(myfunc2, 5000);

setTimeout(function() {
	console.log("mooo");
}, 2000);

