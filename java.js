// List of additional artworks to add dynamically
const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
];

// variables
const gallery = document.getElementsByClassName("art-grid")[0];
const artworks = document.getElementsByClassName("art-panel");
const counter = document.getElementById("counter");
const add = document.getElementById("add-art-button");
let views = 1;
let randArray = [0,1,2,3,4,5,6,7,8,9]
// let nextArt = 0;

// viewing artwork
for (let i = 0; i < artworks.length; i++) {
    artworks[i].addEventListener("click", viewArt);
    
}

function viewArt(event) {
    // prevents p and img from being clicked
    if(event.target !== this){
        return;
    }
    event.target.style.backgroundColor = "lightgreen";
    counter.innerHTML = "Artworks Viewed: " + views;
    views++;
    event.target.removeEventListener("click", viewArt);
}

// adding new artwork
add.addEventListener("click", createArt);

function createArt() {
    const newArt = document.createElement("div");
    newArt.className = "art-panel";

    let nextArt = Math.floor(Math.random() * randArray.length);

    // create and append image of artwork
    const image = document.createElement("img");
    image.src = newArtworks[randArray[nextArt]].img;
    image.alt = newArtworks[randArray[nextArt]].title;
    newArt.appendChild(image);

    // create and append paragraph with title and artist
    const para = document.createElement("p");
    para.textContent = newArtworks[randArray[nextArt]].title + " by " + newArtworks[randArray[nextArt]].artist;
    newArt.appendChild(para);

    newArt.addEventListener("click", viewArt);
    gallery.appendChild(newArt);

    randArray.splice(nextArt, 1);
    nextArt++;

    if(randArray.length == 0){
        add.removeEventListener("click", createArt);
    }
}

// resetting gallery
document.getElementById("reset-button").addEventListener("click", resetArt)

function resetArt(){
    views = 1;
    nextArt = 0;
    randArray = [0,1,2,3,4,5,6,7,8,9]
    counter.innerHTML = "Artworks Viewed: 0";
    for (let i = 0; i < artworks.length; i++) {
        artworks[i].style.backgroundColor = "#eee";
        artworks[i].addEventListener("click", viewArt);
    }
    add.addEventListener("click", createArt);
    for(let j = artworks.length; j > 3; j--) {
        gallery.removeChild(gallery.lastElementChild);
    }
}

// removing artwork
// function removeArt(){

// }

// Later, move this to an external JavaScript file for better organization.