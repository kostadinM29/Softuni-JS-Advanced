function search() {
   let value = document.getElementById("searchText").value;
   let data = document.getElementById("towns").children;
   let result =  document.getElementById("result");
  
   let foundData= Array.from(data)
   .filter(d => d.textContent.includes(value))
   .map(d => {
      d.style.fontWeight = 'bold';
      d.style.textDecoration = 'underline';
   });

   result.innerHTML = `${foundData.length} matches found`;
}
