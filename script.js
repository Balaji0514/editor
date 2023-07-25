const changeText = () => {
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,1)),url('https://www.wallsnapy.com/img_gallery/new-leo-film-na-ready-song-image-hd-1080p-7445267.jpg')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "NAA...!"
    }, 200)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(255, 29, 29, 0.3), rgba(231, 80, 236, 0.479)),url('https://www.wallsnapy.com/img_gallery/new-leo-film-na-ready-song-image-hd-1080p-7445267.jpg')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "READY THAA"
    }, 400)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(2, 255, 213, 0.3), rgba(255, 23, 23)),url('https://www.wallsnapy.com/img_gallery/new-leo-film-na-ready-song-image-hd-1080p-7445267.jpg')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "VARAVA!"
    }, 600)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(255, 0, 0, 0.3), rgb(3, 255, 45)),url('https://www.wallsnapy.com/img_gallery/new-leo-film-na-ready-song-image-hd-1080p-7445267.jpg')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "ANNA NA ERANGI VARAVA..!"
    }, 800)
}

setInterval(changeText, 900)
