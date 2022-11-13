const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  const enterNumber = parseInt(userInput.value)
  const calDescription = `${currentResult} + ${enterNumber}`;
  currentResult = currentResult + enterNumber;
  outputResult(currentResult, calDescription);
}

addBtn.addEventListener('click', add);
