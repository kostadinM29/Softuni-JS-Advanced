window.addEventListener('load', solve);

function solve() {
    let genreInp = document.getElementById('genre');
    let nameInp = document.getElementById('name');
    let authorInp = document.getElementById('author');
    let dateInp = document.getElementById('date');
    let btn = document.getElementById('add-btn');
    let likes = 0;

    let songsDiv = document.getElementsByClassName('all-hits-container')[0];
    let savedDiv = document.getElementsByClassName('saved-container')[0];
    let likesDiv = document.getElementsByClassName('likes')[0];

    btn.addEventListener('click', createSong);

    function createSong(ev){
        ev.preventDefault();

        const genre = genreInp.value;
        const name = nameInp.value;
        const author = authorInp.value;
        const date = dateInp.value;

        if (genre === ''  || name == '' || author === '' || date === '') {
            return;
        }
        let hitsInfoDiv = document.createElement('div');
        hitsInfoDiv.className = 'hits-info';
        songsDiv.appendChild(hitsInfoDiv);

        let img = document.createElement('img');
        img.src = './static/img/img.png';
        hitsInfoDiv.appendChild(img);

        let genreEl = document.createElement('h2');
        genreEl.innerHTML = `Genre: ${genre}`;
        hitsInfoDiv.appendChild(genreEl);

        let nameEl = document.createElement('h2');
        nameEl.innerHTML = `Name: ${name}`;
        hitsInfoDiv.appendChild(nameEl);

        let authorEl = document.createElement('h2');
        authorEl.innerHTML = `Author: ${author}`;
        hitsInfoDiv.appendChild(authorEl);

        let dateEl = document.createElement('h3');
        dateEl.innerHTML = `Date: ${date}`;
        hitsInfoDiv.appendChild(dateEl);


        let saveBtn = document.createElement('button');
        saveBtn.className = 'save-btn';
        saveBtn.innerHTML = 'Save song';
        hitsInfoDiv.appendChild(saveBtn);

        let likeBtn = document.createElement('button');
        likeBtn.className = 'like-btn';
        likeBtn.innerHTML = 'Like song';
        hitsInfoDiv.appendChild(likeBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = 'Delete';
        hitsInfoDiv.appendChild(deleteBtn);


        saveBtn.addEventListener('click', saveSong);
        likeBtn.addEventListener('click', likeSong);
        deleteBtn.addEventListener('click', deleteSong);

        function saveSong(){
            songsDiv.removeChild(hitsInfoDiv);
            hitsInfoDiv.removeChild(saveBtn);
            hitsInfoDiv.removeChild(likeBtn);
            savedDiv.appendChild(hitsInfoDiv);
        }

        function likeSong()
        {
            likes = likes +1
            let p = likesDiv.firstElementChild;
            p.textContent = p.textContent.substring(0, p.textContent.length -1);
            p.textContent = p.textContent + likes;
            likeBtn.disabled = true;
        }

        function deleteSong(ev){
            let target = ev.target.parentNode
            target.remove();
        }


    }
}