"use strict"; 


//1
function multiplyNumeric(obj){
    for (let property in obj){
        if(typeof(obj[property]) === "number"){
            obj[property] *= 2
        }
    }

}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
    };

multiplyNumeric(menu)

console.log(menu)


//2

let heater = {
    temp: 0,
    min: 0,
    max: 0,
    step: 0,
    read(){
        this.min = parseInt(document.getElementById("min").value)
        this.max =  parseInt(document.getElementById("max").value)
        this.step = parseInt(document.getElementById("step").value)
        document.getElementById("temp").innerHTML = this.temp
        printStatus()
        return this
    },
    up(){
        this.temp = this.temp + this.step
        if(this.temp > this.max) this.temp = this.max;
        document.getElementById("temp").innerHTML = this.temp
        return this
    },
    down(){
        this.temp -= this.step
        if(this.temp < this.min) this.temp = this.min;
        document.getElementById("temp").innerHTML = this.temp
        return this
    }
}


var readButton = document.getElementById("read")
var upButton = document.getElementById("up")
var downButton = document.getElementById("down")
readButton.onclick = function(){heater.read()}
upButton.onclick = function(){heater.up()}
downButton.onclick = function(){heater.down()}

var printStatus = function(){
console.log("#")
console.log(heater.temp)
console.log(heater.max)
console.log(heater.min)
console.log(heater.step)
}


//3
let user = {
    name: "Smith",
    age: 30,
    sayHi() {
    console.log("Hi, my name is " + this.name);
    }
    };
let admin = {
    name: "Bob",
    }

    admin.sayHi = user.sayHi;
    user.sayHi();
    admin.sayHi();

    let greet = function(){user.sayHi()};
    greet();

//4
greet = user.sayHi.bind(user)
greet()

//5
heater.min = 0;
heater.max = 100;
heater.step = 33;

heater.up().up().up();

//6
let person = {
    name : "",
    female : false,
    _age : 1,
    get getAge(){
        if(typeof(this._age) === "number" && this._age == !null ) return this._age;

    },
    set setAge(a){
        if(typeof(a) === "number" && a != null) {
            this._age = a;
            console.log(a)
        }
        
    },
    sayHi(){
        console.log("Hey, ich bin " + this.name + ", " + (this.female ? "weiblich" : "männlich") + ", und " + this._age + " Jahre jung. Schön dich kennen zu lernen.")
    }
};

person.setAge = 42
person.name = "Bob"
person.female = true
console.log(person.getAge);
person.sayHi()