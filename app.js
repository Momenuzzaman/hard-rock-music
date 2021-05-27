const searchSongs = () => {
    const searchText = document.getElementById("search").value;

    const url = `https://api.lyrics.ovh/suggest/${searchText} `
    fetch(url)
    .then(res => res.json())
    .then(data => displaySong(data.data))  
};
const displaySong = songs => {
    const songContainer = document.getElementById("song-container");
   songs.forEach(song =>{
       console.log(song)
       const div = document.createElement("div");
       div.className ="single-result row align-items-center my-3 p-3";
       div.innerHTML = `
            <div class="col-md-9">
                 <h3 class="lyrics-name">${song.title}</h3>
                <p class="author lead">Album by <span>${song.artist.name}</span></p>
                <audio controls>
                    <source src="${song.preview}" type="audio/mpeg">
                </audio>
            </div>
            <div class="col-md-3 text-md-right text-center">
                 <button onclick="getLyrics('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
            </div>
       `;
       songContainer.appendChild(div);
   });
}
const getLyrics =(artist, title)=>{
    console.log(artist,title);
}   