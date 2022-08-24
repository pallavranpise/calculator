let operand1 = "";
let operand2 = "";
let opop = '';
let firstChosen = false;
let secondChosen = false;

const equalsTo = document.querySelector("#isEqualsTo");
const ac = document.querySelector("#clear");
const display = document.querySelector(".display");
const operat = document.querySelectorAll(".operators");
const digits = document.querySelectorAll(".digits");



function resetMem(){
    operand1 = 0;
    operand2 = 0;
    opop = '';
    firstChosen = false;
    secondChosen = false;
}

const operate = (operation,a,b)=>{
    let x;
    if(operation==="+")x= Number(a)+Number(b);
    else if(operation==="-")x= a-b;
    else if(operation==="*")x= a*b;
    else if(operation==="/")x= Math.round((a/b)*1000)/1000;
    resetMem();
    return x;
}




operat.forEach(key=>key.addEventListener("click",(op)=>{
    opop = op.target.innerText;
    firstChosen = true;
    refreshDisplay(" "+opop);
}));


digits.forEach(key=>key.addEventListener("click",(digit)=>{
    if(firstChosen){
        operand2 += digit.target.innerText;
        secondChosen = true;
        refreshDisplay(digit.target.innerText);
    }else{
        operand1 += (digit.target.innerText);
        refreshDisplay(digit.target.innerText);
    }
    
}));


ac.addEventListener("click",(trivial)=>{cleanDisplay()});
equalsTo.addEventListener("click",(e)=>{if(firstChosen && secondChosen && opop){
    refreshDisplay(" = "+operate(opop,operand1,operand2));
}})
function refreshDisplay(touch,clearDisplay=false){
    display.innerText += touch;
}
function cleanDisplay(){
    display.innerText = "";
}

