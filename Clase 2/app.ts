function add(x: number, y?: number): number {
    return x + y;
}

//Anonymus function
let myAdd = function(x, y): number { return x + y }

//Optional parameters
function greeter(name: string, lastName?: string) {
    if (lastName) {
        return "Hola " + name + " " + lastName;
    } else {
        return "Hola " + name;
    }

}

console.log(greeter("Juan"))

//Default parameters
function greeter2(name: string, lastName = "Perez") {
    return "Hola " + name + " " + lastName;
}

//Rest Parameters
function setSkills(...skills: string[]){
  console.log(skills.join(" "));
}
