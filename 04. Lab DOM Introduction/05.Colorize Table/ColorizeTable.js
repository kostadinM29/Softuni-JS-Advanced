function colorize() {
    const items = document.getElementsByTagName('tr');

    console.log(items)

    let counter = 1;

    for (const item of Array.from(items)){
        if(counter % 2 === 0){
            item.style.background = "teal";
        }
       
        counter++;
    }
}