function add(x, y) {
    return x + y;
}
//Anonymus function
var myAdd = function (x, y) { return x + y; };
//Optional parameters
function greeter(name, lastName) {
    if (lastName) {
        return "Hola " + name + " " + lastName;
    }
    else {
        return "Hola " + name;
    }
}
console.log(greeter("Juan"));
//Default parameters
function greeter2(name, lastName) {
    if (lastName === void 0) { lastName = "Perez"; }
    return "Hola " + name + " " + lastName;
}
//Rest Parameters
function setSkills() {
    var skills = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        skills[_i - 0] = arguments[_i];
    }
    console.log(skills.join(" "));
}
