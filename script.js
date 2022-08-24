let operand1 = 0;
let operand2 = 0;
let opop = '';
let firstChosen = false;
let secondChosen = false;

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
    else if(operation==="/")x= a/b;
    resetMem();
    return x;
}




operat.forEach(key=>key.addEventListener("click",(op)=>{
    opop = op.target.innerText;
    refreshDisplay(" "+opop+" ");
}));


digits.forEach(key=>key.addEventListener("click",(digit)=>{
    if(firstChosen){
        operand2 = digit.target.innerText;
        secondChosen = true;
        refreshDisplay(operand2);
    }else{
        operand1 = digit.target.innerText;
        firstChosen = true;
        refreshDisplay(operand1);
    }
    if(firstChosen && secondChosen && opop){
        // console.log(operate(opop,operand1,operand2));
        refreshDisplay((" = "+operate(opop,operand1,operand2)));
    }
}));

ac.addEventListener("click",(trivial)=>refreshDisplay(trivial,true));

function refreshDisplay(touch,clearDisplay=false){
    display.innerText += touch;
    if(clearDisplay)display.innerText = "";
}



