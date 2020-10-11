class Zadanie1 {
    constructor(string) {
        this.string = string; 
    }

    howManyWords() {
        const arrOfWords = this.string.split(" ");

        return console.log(arrOfWords.length);
    }
}

// const runZadanie1 = new Zadanie1(`Koty to fajne zwierzaki`);
// runZadanie1.howManyWords();


class Zadanie2 {
    constructor(name){
        this.name = name;
    }

    getName() {
        const promptName = prompt("Jak masz na imię ?")

        return promptName;
    }

    textTransformName() {
        const nameToTransform = this.getName().toLowerCase();
        const nameAfterChange = nameToTransform.replace(nameToTransform[0], nameToTransform[0].toUpperCase());

        return console.log(`Witaj, ${nameAfterChange} !`);
    }
}

// const runZadanie2 = new Zadanie2;
// runZadanie2.textTransformName();

class Zadanie3 {
    constructor(string) {
        this.string = string;
    }
    
    checkForWord() {
        if (this.string.indexOf("kot") > -1){
            return console.log("Zdanie zawiera słowo kot")
        } else {
            return console.log("Zdanie nie zawiera słowa kot")
        }
    }
}

const text = "Ala ma kota";
// const text2 = "Ala ma psa";
// const runZadanie3 = new Zadanie3(text2);
// runZadanie3.checkForWord();

class Zadanie4{
    constructor(string) {
        this.string = string
    }

    stringWithLowerCase(){
        return this.string.toLowerCase();
    }

    stringWithUpperCase(){
        return this.string.toUpperCase();
    }
    stringWithLowerAndUpperCase(){
        const newString = this.string.toLowerCase();
        let transformedString = '';
        for(let i=0; i<newString.length; i++){
            
           transformedString = transformedString + (i%2 === 0 ? newString[i].toUpperCase() : newString[i].toLowerCase()); 
        }
        return transformedString;
    }

    replaceName(name) {
        const myName = prompt('Podaj imię');
        const capitalName = myName.replace(myName[0], myName[0].toUpperCase())
        const stringToReplace = this.string.replace(name, capitalName);

        return stringToReplace;
    }

    showResults(){
        return console.log(`
        text pisany małymi literami: ${this.stringWithLowerCase()}
        text pisany wielkimi literami: ${this.stringWithUpperCase()}
        text pisany malymi i wielkimi literami: ${this.stringWithLowerAndUpperCase()}
        text ze zmienionym imieniem: ${this.replaceName('Ala')}
        `)
    }
}
// const runZadanie4 = new Zadanie4(text);
// runZadanie4.showResults();

class Zadanie5 {
    constructor(counter){
        this.counter = counter;
    }

    createRandomNumber(max, min){
        let random = Math.floor(Math.random()*(max-min+1)+min)
        return random
    }

    throwFewRandomNumbers(lineWidth){
        for(let i=0; i<=this.counter; i++){
           let numbers = String(this.createRandomNumber(100000, 10));
           let newNumbers = numbers.padStart(Number(lineWidth),"*")
           console.log(newNumbers);
        }
    }
}

// const runZadanie5 = new Zadanie5(4);
// runZadanie5.throwFewRandomNumbers(10)

class Zadanie6 {
    constructor(idLength){
        this.idLength = idLength;
    }

    randomNumber(max, min) {
        const number = Math.floor(Math.random()*(max-min+1)+min);
        return number
    }

    buildUniqId() {
        let uniqId = '';
        for(let i=0; i<this.idLength; i++){
            if(this.randomNumber(10000000, 1)% 2 === 0){
                uniqId += String.fromCharCode(this.randomNumber(57,48));
            } else if(this.randomNumber(10000000, 1)% 3 === 0){
                uniqId += String.fromCharCode(this.randomNumber(90,65));
            }else {
                uniqId += String.fromCharCode(this.randomNumber(122,97));
            }
        }
        return console.log(uniqId);
    }
}
const runZadanie6 = new Zadanie6(20);
runZadanie6.buildUniqId();