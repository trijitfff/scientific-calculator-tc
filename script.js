
function appendToDisplay(value) {
  const display = document.getElementById("display");
  if (value === 'pi') {
    display.value += Math.PI;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  document.getElementById("display").value = '';
}

function calculate() {
  const display = document.getElementById("display");
  try {
    // Evaluate the mathematical expression
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}
