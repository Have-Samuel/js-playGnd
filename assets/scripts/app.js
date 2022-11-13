const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const calDescription = `${currentResult} + ${enteredNumber}`;
  currentResult += currentResult + enteredNumber;
  outputResult(currentResult, calDescription);
}

addBtn.addEventListener('click', add);
