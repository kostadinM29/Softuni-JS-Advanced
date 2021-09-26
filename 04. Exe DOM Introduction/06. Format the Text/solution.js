function solve() {
  let textField =  document.getElementById("input");
  let outputDiv =  document.getElementById("output");

const workArr = textField.value
    .split(".")
    .filter(x => x.length >= 1)
    .map(x => x.trim());

const tagTemplate = (tag, text) => `<${tag}>${text}</${tag}>`;
let tempIndex = 0;

outputDiv.innerHTML = workArr
    .reduce((a, v, i) => {
        if (i % 3 === 0 && i !== 0) tempIndex += 1
        a[tempIndex] = (a[tempIndex] || "") + `${v}.`
        return a
    }, [])
    .map(x => tagTemplate("p", x))
    .join("\n");
}