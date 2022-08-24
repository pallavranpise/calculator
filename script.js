let operand1 = 0;
let operand2 = 0;
let opop = '';
let firstChosen = false;
let secondChosen = false;

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



const operat = document.querySelectorAll(".operators");

operat.forEach(key=>key.addEventListener("click",(op)=>{
    opop = op.target.innerText;
    
}));

const digits = document.querySelectorAll(".digits");

digits.forEach(key=>key.addEventListener("click",(digit)=>{
    if(firstChosen){
        operand2 = digit.target.innerText;
        secondChosen = true;
    }else{
        operand1 = digit.target.innerText;
        firstChosen = true;
    }
    if(firstChosen && secondChosen && opop){
        console.log(operate(opop,operand1,operand2));
    }


}));



