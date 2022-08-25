let operand1 = "";
let operand2 = "";
let opop = "";
let gotten = "";
let firstChosen = false;
let secondChosen = false;

const equalsTo = document.querySelector("#isEqualsTo");
const ac = document.querySelector("#clear");
const display = document.querySelector(".display");
const operat = document.querySelectorAll(".operators");
const digits = document.querySelectorAll(".digits");



function resetMem(){
    operand1 = "";
    operand2 = "";
    opop = "";
    firstChosen = false;
    secondChosen = false;
    gotten = "";

}

const operate = (operation,a,b)=>{
    console.log(opop,operand1,operand2,gotten,"operate");
    let x;
    if(operation==="+")x= Number(a)+Number(b);
    else if(operation==="-")x= a-b;
    else if(operation==="*")x= a*b;
    else if(operation==="/")x= Math.round((a/b)*10000)/10000;
    // resetMem();
    return x;
}

operat.forEach(key=>key.addEventListener("click",(op)=>{
    console.log(opop,operand1,operand2,gotten,"oper click");
    opop = op.target.innerText;
    firstChosen = true;
    if(firstChosen && secondChosen && opop){
        cleanDisplay();
        gotten = operate(opop,operand1,operand2);
        appendDisply(gotten);
    }
}));


digits.forEach(key=>key.addEventListener("click",(digit)=>{

    if(gotten){
        operand1 = gotten;
        operand2 += digit.target.innerText;
        secondChosen = true;
        appendDisply(digit.target.innerText);
        console.log(opop,operand1,operand2,gotten," click 1");
    }else if(firstChosen){
        
        if(firstChosen && !secondChosen)cleanDisplay();
        operand2 += digit.target.innerText;
        secondChosen = true;
        appendDisply(digit.target.innerText);
        console.log(opop,operand1,operand2,gotten," click 2");
    } else{
        
        operand1 += (digit.target.innerText);
        appendDisply(digit.target.innerText);
        console.log(opop,operand1,operand2,gotten," click 3");
    }
}));


    ac.addEventListener("click",()=>{
        resetMem();cleanDisplay();
        console.log(opop,operand1,operand2,gotten," click ac");});

equalsTo.addEventListener("click",(e)=>{if(firstChosen && secondChosen && opop){
    cleanDisplay();
    gotten = operate(opop,operand1,operand2);
    appendDisply(gotten);
    console.log(opop,operand1,operand2,gotten," click =");
    
}})

function appendDisply(touch){
    display.innerText += touch;
}

function cleanDisplay(){
    display.innerText = "";
}

