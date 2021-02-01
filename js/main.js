document.querySelector('button').addEventListener('click', getLyrics)


function getLyrics() {

const artist = document.querySelector('#artistName').value
const title = document.querySelector('#songName').value
const url = "https://api.lyrics.ovh/v1/"+artist +"/" +title

fetch(url) 
    .then(res => res.json())
    .then(data => {
        console.log(data)

        document.querySelector('#printLyrics').innerText = data.lyrics
    })

    .catch(err => {
        console.log(`error ${err}`)
    })
}