let operand1 = "";
let operand2 = "";
let opop = "";
let gotten = "";
let firstChosen = false;
let secondChosen = false;
let pointer1flag = true;
let pointer2flag =true;

const equalsTo = document.querySelector("#isEqualsTo");
const ac = document.querySelector("#allclear");
const display = document.querySelector(".display");
const operat = document.querySelectorAll(".operators");
const digits = document.querySelectorAll(".digits");
const backspace = document.querySelector("#backspace");
const point = document.querySelector("#point");

function resetMem() {
  operand1 = "";
  operand2 = "";
  opop = "";
  firstChosen = false;
  secondChosen = false;
  gotten = "";
  pointer1flag = true;
  pointer2flag =true;
}

const operate = (operation, a, b) => {
  let x;
  if (operation === "+") x = Number(a) + Number(b);
  else if (operation === "-") x = a - b;
  else if (operation === "*") x = a * b;
  else if (operation === "/")x = Math.round((a / b) * 10000) / 10000;
  if(isNaN(x)){gotten = "kek"; return gotten;}
  gotten = x;
  return x;
};

operat.forEach((key) =>
  key.addEventListener("click", (op) => {
    if (firstChosen && secondChosen && opop) {
      cleanDisplay();
      gotten = operate(opop, operand1, operand2);
      appendDisply(gotten);
      operand1 = gotten;
      firstChosen = true;
      operand2 = "";
      secondChosen = false;
      opop = "";
      pointer1flag = false;
      pointer2flag = true;
    }
    opop = op.target.innerText;
    pointer1flag = false;
    pointer2flag = true;
    firstChosen = true;
    secondChosen = false;
    operand2 = "";
  })
);

digits.forEach((key) =>
  key.addEventListener("click", (digit) => {
    takeNum(digit);
  })
);

function takeNum(n) {
  if (!firstChosen) {
    operand1 += n.target.innerText;
    appendDisply(n.target.innerText);
  } else if (firstChosen) {
    if (firstChosen && !secondChosen) cleanDisplay();
    operand2 += n.target.innerText;
    secondChosen = true;
    appendDisply(n.target.innerText);
  }
}

ac.addEventListener("click", () => {
  resetMem();
  cleanDisplay();
});

backspace.addEventListener("click",()=>{
    if(!firstChosen){
        operand1 = String(operand1).slice(0,-1);
        cleanDisplay();
        appendDisply(operand1);
    }else if(firstChosen && !secondChosen){
        operand1 = String(operand1).slice(0,-1);
        cleanDisplay();
        appendDisply(operand1);
    }else if(firstChosen && secondChosen){
        operand2 = String(operand2).slice(0,-1);
        cleanDisplay();
        appendDisply(operand2);
    }
});

point.addEventListener("click",()=>{
    if(!firstChosen && pointer1flag){
        operand1 = String(operand1)+".";
        cleanDisplay();
        appendDisply(operand1);
        pointer1flag = false;
    }else if(firstChosen && !secondChosen  && pointer1flag){
        operand1 = String(operand1)+".";
        cleanDisplay();
        appendDisply(operand1);
        pointer1flag = false;
    }else if(firstChosen && secondChosen  && pointer2flag){
        operand2 = String(operand2)+".";
        cleanDisplay();
        appendDisply(operand2);
        pointer2flag = false;

    }
});



equalsTo.addEventListener("click", () => {
  if (firstChosen && secondChosen && opop) {
    cleanDisplay();
    gotten = operate(opop, operand1, operand2);
    appendDisply(gotten);
    operand1 = gotten;
    firstChosen = true;
    operand2 = "";
    secondChosen = false;
    opop = "";
  }
});

function appendDisply(touch) {
  display.innerText += touch;
}

function cleanDisplay() {
  display.innerText = "";
}
