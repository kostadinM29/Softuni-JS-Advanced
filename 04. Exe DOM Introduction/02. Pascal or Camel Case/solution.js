function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  const resultText = text.split(' ')
    .map(t => t.toLocaleLowerCase())
    .map(t => `${t.charAt(0).toLocaleUpperCase()}${t.slice(1)}`)
    .join('');

  if (convention !== "Camel Case" && convention !== "Pascal Case") {
      result.innerHTML = "Error!"
  }
  else {
      result.innerHTML = convention === "Pascal Case"
                ? resultText
                : `${resultText.charAt(0).toLocaleLowerCase()}${resultText.slice(1)}`
  }
}