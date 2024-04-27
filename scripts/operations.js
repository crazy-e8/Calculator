function renderResult(resultDiv, result) {
  resultDiv.textContent = result.toString();
}

export function add(resultDiv, a, b) {
  renderResult(resultDiv, a + b);
}
