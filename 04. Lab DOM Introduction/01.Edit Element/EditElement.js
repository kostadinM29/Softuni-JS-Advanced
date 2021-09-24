function editElement(element, match, replace) {
    const text = element.textContent;
    const reg = new RegExp(match, "g")
    element.textContent = text.replace(reg, replace);
}