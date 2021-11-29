"use strict"; 

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