var Student = (function () {
    function Student(name, middleName, lastName) {
        this.name = name;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = name + " " + middleName + " " + lastName;
        console.log('Se ha creado el estudiante ' + this.fullName);
    }
    return Student;
}());
function greeter(person) {
    return "Hola " + person.name + " " + person.lastName;
}
//var user = "Pancho Pantera";
//var user = ["0","1","2"];
// var user = {
//   name: "Juan",
//   lastName: "Perez"
// }
var user = new Student("Sergio", "I.", "Brito");
//Data Types
var isOk = true;
var myNumber = 34;
var sayMyName = "Heisenberg";
var whoIsHe = "Walter White is " + sayMyName;
console.log(whoIsHe);
var list = [1, 2, 3];
//tuplas
var x;
x = [10, "10"];
console.log(x);
document.body.innerHTML = greeter(user);
