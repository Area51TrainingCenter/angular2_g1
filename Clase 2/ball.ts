class Ball {
    public name: string;
    brandName: string;
    private price: number = 50;

    constructor(name: string) {
        this.name = name;
        console.log("Mi pelota cuesta: $" + this.price)
    }

    setBrand(brandName: string) {
        this.brandName = brandName;
    }
}


class Rugby extends Ball {
    shape: string;
    width: number;

    constructor(brandName, shape, width) {
        super(brandName);


    }
}

var myBall = new Ball('picara');
myBall.setBrand('Nike');


console.log(myBall);
console.log("Mi pelota se llama " + myBall.name)
console.log("Mi pelota es de la marca: " + myBall.brandName)



class Calculator {

    static value:number = 123;

    static add(a: number, b: number): number {
        return a + b;
    }

    minus(a: number, b: number): number {
        return a - b;
    }
}

console.log(Calculator.add(2,8));
console.log(Calculator.value);
//console.log(Calculator.minus(2,8));
