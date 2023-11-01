//Global variables
var prevCalc = 0;
var calc = "";

window.onload = function() {
    document.getElementById("button1").onclick = showNum;
    document.getElementById("button2").onclick = showNum;
    document.getElementById("button3").onclick = showNum;
    document.getElementById("button4").onclick = showNum;
    document.getElementById("button5").onclick = showNum;
    document.getElementById("button6").onclick = showNum;
    document.getElementById("button7").onclick = showNum;
    document.getElementById("button8").onclick = showNum;
    document.getElementById("button9").onclick = showNum;
  
    document.getElementById("buttonPlus").onclick = add;
    document.getElementById("buttonMinus").onclick = subtract;
    document.getElementById("buttonMultiply").onclick = multiply;
    document.getElementById("buttonDivide").onclick = divide;

    document.getElementById("calculate").onclick = calculate;
    document.getElementById("clear").onclick = clear;
  }
  
  function showNum() {
    document.formCalculator.textNumber.value += this.value;
  }
  var result;
  var num1;
  var num2;
  var calc;
  function add() {
     num1 = parseInt(document.formCalculator.textNumber.value);
    calc = this.value;
    document.formCalculator.textNumber.value = num1+calc;

  }

  function calculate() {
    result = eval(document.formCalculator.textNumber.value);
    if (calc == '+') {
      result = eval(document.formCalculator.textNumber.value);
      document.formCalculator.textNumber.value="";
      document.formCalculator.textNumber.value = result;
    } else if(calc == '-') {
      result = eval(document.formCalculator.textNumber.value);
      document.formCalculator.textNumber.value="";
      document.formCalculator.textNumber.value = result;    
    } else if(calc == '*') {
      result = eval(document.formCalculator.textNumber.value);
      document.formCalculator.textNumber.value="";
      document.formCalculator.textNumber.value = result;    
    }else if(calc == '/') {
      result = eval(document.formCalculator.textNumber.value);
      document.formCalculator.textNumber.value="";
      document.formCalculator.textNumber.value = result;    
    }
 
  }

  function subtract() {
    num1 = parseInt(document.formCalculator.textNumber.value);
    calc = this.value;
    document.formCalculator.textNumber.value = num1+calc;
  }
  function multiply() {
    num1 = parseInt(document.formCalculator.textNumber.value);
    calc = this.value;
    document.formCalculator.textNumber.value = num1+calc;
  }
  
  function divide() {
    num1 = parseInt(document.formCalculator.textNumber.value);
    calc = this.value;
    document.formCalculator.textNumber.value = num1+calc;
  }

  function clear() {
    result = 0;
    document.formCalculator.textNumber.value = "";
    num1 = "";
    num2 = "";
 }