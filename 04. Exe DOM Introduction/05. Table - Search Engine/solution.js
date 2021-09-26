function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
        let searchElement = document.getElementById('searchField');
        let rowElements = Array.from(document.querySelectorAll('.container tbody tr'));
        let searchText = searchElement.value;
  
        rowElements.forEach(el => el.removeAttribute('class'))
  
        rowElements
           .filter(row => row.textContent.toLowerCase().includes(searchText.toLowerCase()))
           .map(row => row.classList.add('select'))
  
       searchElement.value = ''; 
   }
}