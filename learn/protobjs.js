// experimenting based on the article at 
// http://aaditmshah.github.io/why-prototypal-inheritance-matters/
var object = Object.create(null);
var x = {};

console.log(object);
console.log(x);

// cloning an existing object
var rectangle = {
	perimeter: function () {
		return (this.width * 2) + (this.height * 2);
	}
};
var rect = Object.create(rectangle); 
// rect inherits the perimeter function from rectangle
console.log(rect);
rect.width=4;
rect.height=4;
console.log(rect.perimeter());

/////////////////////////////////////////////////////////////////////////
// below is equivalent to the above
var rectangle2 = Object.create(Object.prototype);
rectangle2.perimeter =  function () {
		return (this.width * 2) + (this.height * 2);
};
rectangle2.width=4;
rectangle2.height=4;
console.log(rectangle2.perimeter());

/////////////////////////////////////////////////////////////////////////
var rectangle3 = {
	create: function (width, height) {
		var self = Object.create(this);
		self.height = height;
		self.width = width;
		return self;
	},
	perimeter: function () {
		return (this.width * 2) + (this.height * 2);
	}
}
var rect3 = rectangle3.create(5,5);
console.log(rect3.perimeter());

/////////////////////////////////////////////////////////////////////////
// typical pattern
function rect4(width, height) {
	this.height = height;
	this.width = width;
}

rect4.prototype.perimeter =  function () {
	return (this.width * 2) + (this.height * 2);
}

var rect4obj = new rect4(6,6);
console.log(rect4obj.perimeter());
