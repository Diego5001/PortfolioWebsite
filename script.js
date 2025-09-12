let currentPage = null


function changePage(urlPage) {
    document.location.href = urlPage;
    currentPage = document.location.href;

    setupMusic()
}

function setupMusic() {

    // musicStorage.forEach(function(music){
    //     let newDiv = document.createElement("div")
    //     newDiv.innerHTML = `<h3 class="albumText">${music.Name}</h4>`
    //     newDiv.classList.add("album")
    //     document.getElementById("musicContainer").appendChild(newDiv)

    //     let artist = document.createElement("h4")
    //     artist.classList.add("albumText")
    //     artist.innerHTML = music.Artist
    //     newDiv.appendChild(artist)
    //     // document.images
    //     let image = document.createElement("img")
    //     image.classList.add("albumImage")
    //     image.src = "Assets/Imgs/" + music.Image
    //     newDiv.appendChild(image)

    //     let genre = document.createElement("h4")
    //     genre.classList.add("albumText")
    //     genre.innerHTML = music.Genre
    //     newDiv.appendChild(genre)

    //     let rating = document.createElement("h4")
    //     rating.classList.add("albumText")
    //     rating.innerHTML = music.Rating 
    //     newDiv.appendChild(rating)

    // })
}

setupMusic()