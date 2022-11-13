const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generats and Writes Calculation log
function createAndWriteOutput(operator, resultBeforeCal, calNumber) {
  const calDescription = `${resultBeforeCal} ${operator} ${calNumber}`;
  outputResult(currentResult, calDescription); // From Vendor.js
}

function writeLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult,
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  writeLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multiply);
