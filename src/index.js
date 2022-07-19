console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
    .then(response => response.json())
    .then(data => renderImages(data.message));


function renderImages(data){
    data.forEach(image => renderImage(image));
}

function renderImage(image) {
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    img.src = image;
    imgDiv.appendChild(img);
    document.getElementById("dog-image-container").appendChild(imgDiv);
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
    .then(response => response.json())
    .then(data => renderBreeds(data.message));

function renderBreeds(breeds) {
   for(const breed in breeds) {
        renderBreed(breed);
    }
}

function renderBreed(breed) {
    const div = document.createElement('div');
    div.innerHTML = breed;
    document.getElementById("dog-breeds").appendChild(div);
}

ul = document.getElementById("dog-breeds");
ul.addEventListener('click', event => {
    if (event.target != ul) {
        event.target.style = "background-color:black;color:royalblue;border-color:royalblue;"
    }
})

const dropdown = document.querySelector("#breed-dropdown");
    dropdown.addEventListener('change', event => {
       
        breeds = document.querySelectorAll("#dog-breeds div")
        breeds.forEach(breed => {
            if (breed.innerHTML[0] != dropdown.value) {
                breed.style.display = 'none';
            } else {
                breed.style.display = '';
            }
        });
    });

