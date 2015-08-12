var foo = [11,4,1,7,5, 100];

function printArr(myarr) {
    print('-----------------');
    myarr.forEach(function (x) {
        print(x);
    });
}

printArr(foo);

var a = foo.pop();
print("Just popped "+a+" from foo");

foo.push(6);
printArr(foo);

print('reversed array');
foo.reverse();
printArr(foo);

print('shift');
a = foo.shift();
print("Just shiffted "+a+" from foo");
printArr(foo);

foo.sort(function (a, b) {
    if (a > b) { return 1; }
    else if( a == b) { return 0; }
    else { return -1; }
});
print('sorted');
printArr(foo);

// start from index 0, replace the next 2 indexes with "one"
foo.splice(0, 2, "one");
printArr(foo);
// start from index 1, replace nothing, inserting the following strings...
foo.splice(1, 0, "two", "three", "nice");
printArr(foo);

// adds it to the front/bottom of the stack
foo.unshift("front");
printArr(foo);

var bar = ['a', 'b', 'c', 'then', 'z'];
var foobar = foo.concat(bar);
printArr(foo);
printArr(bar);
print("concatnenated foo and bar into new array");
printArr(foobar);

print(bar);
print(bar.join(" - "));

print("slice in between 1 and 3");
a = foobar.slice(1,3);
printArr(a);
print("slice -4");
a = foobar.slice(-4);
printArr(a);


// toString
// indexOf
// forEach
// map
// every
// some
// filter
// reduce
// reduceRight
