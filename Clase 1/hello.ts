class Student{
  fullName: string;
  constructor(public name, public middleName, public lastName){
    this.fullName = name + " " + middleName + " " + lastName;
    console.log('Se ha creado el estudiante '+this.fullName);
  }
}


interface Person{
  name: string;
  lastName: string;
}

function greeter(person: Person){
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
let isOk: boolean = true;
let myNumber: number = 34;
let sayMyName: string = "Heisenberg";
let whoIsHe: string = `Walter White is ${ sayMyName }`;

console.log(whoIsHe);

let list: number[] = [1,2,3]
//tuplas
let x: [string, number];

x = ["hola", 10]
//x = [10, "10"]

console.log(x)






document.body.innerHTML = greeter(user);
