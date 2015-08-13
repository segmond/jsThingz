var hugo, person, names;

person = function () {
    return this.lastName;
};

hugo = person.bind({lastName: "Reyes"});
print(hugo()); // returns "Reyes"

names = {
    lastName: "Cooper",
    hugo: hugo,
    person: person
};

print(names.hugo()); // returns "Reyes"
print(names.person()); // returns "Cooper"
