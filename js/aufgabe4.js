

//1

let zeilenAnzahl = 6
let zeichen = '+'
let outputString = ''
for(var i = 0; i < zeilenAnzahl; i++){
    outputString += zeichen;
    console.log(outputString)
}


//2
let range = 100

for(let i = 0 ; i < range; i++){
    if(i%3==0 && i%5 == 0){
        console.log("FizzBuzz")
    }
    else if(i%3==0){
        console.log("Fizz")
    }else if(i%5 ==0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}

//3
let beispiele = ["Der kleine Hase hat rosa Öhrchen.",
    "Ein großer Hase isst aber rote Möhrchen.",
    "Oh je, gute Güte, etwas schlägt fehl!"]

console.log("Aufgabe 3")
beispiele.forEach(element => {
    console.log(countVocals(element))
});

function countVocals(word) {

    console.log(`Counting Vocals in \"${word}\"`)

    let vocals = "aeiou"
    let counter = 0
    for (let i = 0; i < word.length; i++) {
        if(vocals.includes(word[i])) counter++
    };
    return `Result: ${counter}`
}

//4
console.log("Aufgabe 4")
console.log(add(1,2))
console.log(add(1,2,3))
console.log(add(1,2,3,4))
console.log(add(1,2,3,4,5))

function add(...numbers){
    let result = 0;
    numbers.forEach(element => {
          result += element
    });
    return result
}

//5

console.log(calc(3,3,"add"))
console.log(calc(3,3,"sub"))
console.log(calc(3,3,"mult"))
console.log(calc(3,3,"div"))
console.log(calc(3,3,"jump"))


function calc(first, second, operation){
    let result;

    switch (operation) {
        case "add": result = first + second ;break;
        case "sub": result = first - second ;break;
        case "div": result = first / second ;break;
        case "mult": result = first * second ;break;
        default: result = "WARNING: unknown operation type";
    }
    return result
}


//6
console.log("Aufgabe 6")
let result = calc2(3,4,mult)

console.log(result)

function calc2(first, second, operation){
    return operation(first,second);
}

function add(first,second){
    return first + second
}


function sub(first,second){
    return first - second
}

function div(first,second){
    return first / second
}

function mult(first,second){
    return first * second
}

//7
//ne danke

//8
console.log("Aufgabe 8")
console.log(addFunctional(3)(4))

function addFunctional(first){
    return function(second){
        return first + second
    }
}

//9
function filter(text, filterFunc) {
    let words = text.trim().split(" ");
    let result = "";
    for(let i=0; i < words.length; i++) {
    if(filterFunc (words[i])) result += words[i] + " ";
    }
    return result;
}

function numLetters(number){
    return (x) => x.length === number
}

const fiveLetters = (x) => x.length === 5;
let sent = "Hansi klagt über seine Mutter.";
result = filter(sent, numLetters(4));
console.log(result);