class Zadanie1 {
    constructor(counter){
        this.counter = counter;
    }

    writeNumbers() {
        let string = '';
        for(let i=1; i<= this.counter; i++){
            string += i
        }
        return console.log(string);
    }
}

// const runZadanie1 = new Zadanie1(10);
// runZadanie1.writeNumbers();

class Zad2 {
    constructor(n, txt){
        this.n = Number(n);
        this.txt = String(txt);
    }

    writeStringInLoop(){
        if(this.n > 0){
            let myString = '';
            for(let i=1; i<=this.n; i++){
                myString += this.txt;
            }
            return console.log(myString);
        }
    }

    repeatString(){
        let repeatedString = this.txt.repeat(this.n);
        return console.log(repeatedString);
    }
}
// const runZad2 = new Zad2(3, 'kot');
// runZad2.writeStringInLoop();
// runZad2.repeatString();

class Zad3 {
    constructor(){
        this.string = prompt('Podaj wyraz');
    }

    checkForWordLength(){
        if (this.string.length > 20){
            let shortedWord = this.string.slice(0, 20);
            return shortedWord+'...';
        } else {
            return this.string;
        }
    }

    drawTable(){
        let checkedString = this.checkForWordLength();
        let str = "";
        let withOfFrame = checkedString.length+3
        for (let i=0; i<3; i++) {
            for (let j=0; j<=withOfFrame; j++) {
                if (i==0 && j==0) {
                    str += "╔";
                }
                else if ( i==0 && j==withOfFrame) {
                    str += "╗";
                } else if ( i==2 && j==0) {
                    str += "╚";
                } else if(i==2 && j==withOfFrame){
                    str += "╝";
                } else if ( i==0 || i==2) {
                    str += "═";
                } else if(j==0 || j==withOfFrame){
                    str += "║";                
                }else if(j==1 || j==withOfFrame-1){                    
                    str += ' ';                    
                }else if (j-1<=checkedString.length){
                    str += checkedString[j-2]
                }
            }
            str += "\n";
        }

        console.log(str);
    }
}
const runZad3 = new Zad3();
runZad3.drawTable();