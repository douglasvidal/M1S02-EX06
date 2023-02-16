export function multiply(element, number) {
  clearElement(element);
  multiplicationTable(element, number);
}

function clearElement(element) {
  element.innerHTML = "";
}

function multiplicationTable(element, number) {
  let numberToMultiply = Number.parseInt(number);
  for (let i = 0; i < 10; i++) {
    element.innerHTML += multiplicationRow(numberToMultiply, i);
  }
}

function multiplicationRow(number, index) {
  return `<p>${number} X ${index + 1} = ${number * (index + 1)}</p>`;
}
