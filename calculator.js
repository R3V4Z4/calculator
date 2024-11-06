let input = document.getElementById("input");
let elements = document.querySelectorAll(".calculator-el");
let calculation = "";

elements.forEach((el) => {
  el.addEventListener("click", () => {
    let elValue = el.innerHTML;

    if (elValue === "=") {
      if (calculation.includes("÷")) {
        calculation = calculation.replace("÷", "/");
      } else if (calculation.includes("×")) {
        calculation = calculation.replace("×", "*");
      }
      let newCalculation = eval(calculation);
      input.value = newCalculation;
      console.log(newCalculation);
    } else if (elValue === "C") {
      calculation = "";
      input.value = "";
    } else if (elValue === "()") {
      let openParens = 0;
      let closeParens = 0;

      for (let char of calculation) {
        if (char === "(") openParens++;
        if (char === ")") closeParens++;
      }

      let lastChar = calculation.slice(-1);

      // Add "(" if parentheses are balanced or if we just entered an operator or the calculation is empty
      if (
        openParens === closeParens ||
        calculation.length === 0 ||
        (lastChar !== ")" &&
          lastChar !== "(" &&
          !["+", "-", "*", "/", "%"].includes(lastChar))
      ) {
        calculation += "(";
      }
      // Add ")" only if there's an open parenthesis and the last character isn't an operator or "("
      else if (
        openParens > closeParens &&
        !["+", "-", "*", "/", "%"].includes(lastChar)
      ) {
        calculation += ")";
      }
      input.value = calculation;
    } else {
      calculation += elValue;
      input.value = calculation;
      console.log(calculation);
    }
    if (elValue === "()") {
      if (calculation.includes(")")) {
        calculation += "(";
      } else if (!calculation.includes(")")) {
        calculation += ")";
      }
    }
  });
});
