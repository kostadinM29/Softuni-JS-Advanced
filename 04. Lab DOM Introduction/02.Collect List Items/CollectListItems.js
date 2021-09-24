function extractText() {
    const items = document.getElementById('items').children;

    const textarea = [];

    for (const item of Array.from(items)){
        textarea.push(item.textContent);
    }
    document.getElementById('result').textContent = textarea.join("\n");
}