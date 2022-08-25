let operand1 = "";
let operand2 = "";
let opop = "";
let gotten = "";
let firstChosen = false;
let secondChosen = false;
let once = true;

const equalsTo = document.querySelector("#isEqualsTo");
const ac = document.querySelector("#clear");
const display = document.querySelector(".display");
const operat = document.querySelectorAll(".operators");
const digits = document.querySelectorAll(".digits");

function resetMem() {
  operand1 = "";
  operand2 = "";
  opop = "";
  firstChosen = false;
  secondChosen = false;
  gotten = "";
}

const operate = (operation, a, b) => {
  let x;
  if (operation === "+") x = Number(a) + Number(b);
  else if (operation === "-") x = a - b;
  else if (operation === "*") x = a * b;
  else if (operation === "/")x = Math.round((a / b) * 10000) / 10000;
  if(isNaN(x)){gotten = "lmao"; return gotten;}
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
    }
    opop = op.target.innerText;

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
