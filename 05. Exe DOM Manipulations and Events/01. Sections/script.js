function create(words) {
   const content = document.getElementById('content');
   const elements = [];

   for(let word of words){
      const div = document.createElement('div');

      const para = document.createElement('p');
      para.textContent = word;

      div.appendChild(para);


      para.style.display = 'none';

      div.addEventListener('click', onClick);
      elements.push(div);
   }
   function onClick(ev){
      ev.target.firstChild.style.display = '';
   }
   elements.forEach(e => content.appendChild(e));
}