// convierte el contenido de upper y lower en variables
// upper muestra la operacion
let outputUpper = document.querySelector("#upper");
// lower muestra el esultado
let outputLower = document.querySelector("#lower");

// funcion para poner numeros en la vista
/* si output lower es igual a cero: output lower se convierte en el boton presionado, si no, 
  output lower se le sumara el boton presionado cada vez que se invoca la funion*/
function pressNum(e) {
  if (outputLower.innerHTML === "0") {
    outputLower.innerHTML = e.innerHTML;
  } else {
    outputLower.innerHTML += e.innerHTML;
  }
}

function pressOperator(e) {
  //slice corta y elimina el texto dependiendo de los parametros. slice(0, 1) en hola: ho
  //outputLower.innerHTML.slice(-1) es para obtener el ultimo digito insertado. 324981 = 1
  let lastOperator = outputLower.innerHTML.slice(-1);
  /* si, lastoperator(el ultimo digito de la operacion) contiene el caracterer, se elimina el
     operador acutal y se añade el nuevo */
  if (lastOperator.includes("+")) {
    outputLower.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
  } else if (lastOperator.includes("-")) {
    outputLower.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
  } else if (lastOperator.includes("x")) {
    outputLower.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
  } else if (lastOperator.includes("÷")) {
    outputLower.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
  } else if (lastOperator.includes("%")) {
    outputLower.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
  } else if (lastOperator.includes("√")) {
    outputLower.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
  } else if (lastOperator.includes("ⁿ")) {
    outputLower.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
  } else if (lastOperator.includes(".")) {
    outputLower.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
  } else {
    outputLower.innerHTML += e.innerHTML;
  }
}

/* añade el punto, se utiliza el mismo tipo de funcion que los operadores para evitar que se
  añada un operador despues de un punto */
function pressDot() {
  let lastOperator = outputLower.innerHTML.slice(-1);
  if (lastOperator.includes("+")) {
    outputLower.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
  } else if (lastOperator.includes("-")) {
    outputLower.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
  } else if (lastOperator.includes("x")) {
    outputLower.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
  } else if (lastOperator.includes("÷")) {
    outputLower.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
  } else if (lastOperator.includes("%")) {
    outputLower.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
  } else if (lastOperator.includes("√")) {
    outputLower.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
  } else if (lastOperator.includes("ⁿ")) {
    outputLower.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
  } else if (lastOperator.includes(".")) {
    outputLower.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
  } else {
    outputLower.innerHTML += ".";
  }
}

function pressSqrt() {
  outputLower.innerHTML = "√";
}

//cambia las funciones a nada y 0, basicamente lo reinicia
function pressClear() {
  outputUpper.innerHTML = "";
  outputLower.innerHTML = "0";
}

// function que calcula el resultado
function pressEqual() {
  //esto sube la operacion de lower a upper
  let resultado = outputLower.innerHTML;
  outputUpper.innerHTML = resultado;

  /* resultado tiene la operacion.  utilizando replace cambiamos un operador del boton por 
  un operador que funcione en javascript*/
  resultado = resultado.replace(/x/g, "*").replace(/÷/g, "/");

  //si hay un simbolo de raiz, se remplazara por la formula de javascript.
  if (resultado.includes("√")) {
    resultado = resultado.replace(/√/g, "Math.sqrt(") + ")";
  }

  if (resultado.includes("ⁿ")) {
    resultado = "Math.pow(" + resultado.replace(/ⁿ/g, ", ") + ")";
  }

  let result;
  try {
    result = eval(resultado);
    // si los numeros decimales saln mas de 4, esto los acortara a 4
    if (result.toString().indexOf(".") !== -1) {
      result = result.toFixed(4);
    }
    //si la operacion tiene algun error, se mostrara error
  } catch (e) {
    result = "Error";
  }
  outputLower.innerHTML = result;
}
