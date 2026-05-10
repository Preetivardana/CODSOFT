const display = document.getElementById("display");

function appendValue(value) {

  display.value += value;
}

function clearDisplay() {

  display.value = "";
}

function deleteLast() {

  display.value = display.value.slice(0, -1);
}

function toggleSign() {

  if (display.value.startsWith("-")) {

    display.value = display.value.substring(1);

  } else {

    display.value = "-" + display.value;
  }
}

function calculate() {

  try {

    display.value = eval(display.value);

  }

  catch {

    display.value = "Error";
  }
}
