const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

const allSongs = [
  {
    id: 0,
    title: "Baraka Allahu Lakuma",
    artist: "Maher Zain",
    duration: "5:12",
    src: "music-file/baraka-allahu-lakuma.mp3",
  },
  {
    id: 1,
    title: "Burdah Salawat",
    artist: "Mesut Kurtis",
    duration: "5:02",
    src: "music-file/burdah-salawat.mp3",
  },
  {
    id: 2,
    title: "Forgotten Promises",
    artist: "Sami Yusuf",
    duration: "5:02",
    src: "music-file/forgotten-promises.mp3",
  },
  {
    id: 3,
    title: "For The Rest Of My Life",
    artist: "Maher Zain",
    duration: "4:39",
    src: "music-file/for-the-rest-of-my-life.mp3",
  },
  {
    id: 4,
    title: "Kun Ant",
    artist: "Humood Alkhudher",
    duration: "4:00",
    src: "music-file/kun-ant.mp3",
  },
  {
    id: 5,
    title: "Mawlaya",
    artist: "Maher Zain",
    duration: "4:52",
    src: "music-file/mawlaya.mp3",
  },
  {
    id: 6,
    title: "Number One For Me",
    artist: "Maher Zain",
    duration: "4:19",
    src: "music-file/number-one-for-me.mp3",
  },
  {
    id: 7,
    title: "One Big Family",
    artist: "Maher Zain",
    duration: "4:06",
    src: "music-file/one-big-family.mp3",
  },
  {
    id: 8,
    title: "Palestine Will Be Free",
    artist: "Maher Zain",
    duration: "4:55",
    src: "music-file/palestine-will-be-free.mp3",
  },
  {
    id: 9,
    title: "Paradise",
    artist: "Maher Zain",
    duration: "4:03",
    src: "music-file/paradise.mp3",
  },
  {
    id: 10,
    title: "The Power",
    artist: "Maher Zain",
    duration: "4:03",
    src: "music-file/the-power.mp3",
  },
];
  


let currentSongIndex = 0;
const audio = new Audio();

const playSong = (id) => {
  const song = allSongs.find(song => song.id === id);
  if (song) {
    audio.src = song.src;
    audio.play()
    setPlayerDisplay(song);
  } else {
    console.log("Song not found");
  }
};

const playNextSong = () => {
  if(currentSongIndex === allSongs.length -1){
    currentSongIndex = 0;
  }
   currentSongIndex = currentSongIndex + 1;
   playSong(currentSongIndex)
  };

  const playPreviousSong = () => {
    if(currentSongIndex < allSongs[1].id){
      currentSongIndex = allSongs.length - 1;
    }
    currentSongIndex = currentSongIndex - 1;
   playSong(currentSongIndex)
  }

const pauseSong = () => {
  audio.pause();
};  

const setPlayerDisplay = (song) => {
  const playingSong = document.getElementById("player-song-title");
  const songArtist = document.getElementById("player-song-artist");
  const currentTitle = song?.title;
  const currentArtist = song?.artist;
  playingSong.textContent = currentTitle; 
  songArtist.textContent = currentArtist;
};

const shuffle = () => {
  currentSongIndex = Math.floor(Math.random() * allSongs.length);
  audio.src = allSongs[currentSongIndex].src;
  audio.play();
  setPlayerDisplay(allSongs[currentSongIndex]);
  playNextSong();
  playPreviousSong();
};

const renderSongs = (array) => {
 playlistSongs.innerHTML = array
    .map((song)=> {
      return `
      <li id="song-${song.id}" class="playlist-song">
      <button class="playlist-song-info" onclick="playSong(${song.id})">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
      </button>
      `;
    })
    .join("");
};

renderSongs(allSongs);
playButton.addEventListener("click", () => playSong(currentSongIndex));
pauseButton.addEventListener("click",  pauseSong);
nextButton.addEventListener("click", playNextSong);
previousButton.addEventListener("click", playPreviousSong);
shuffleButton.addEventListener("click", shuffle);
audio.addEventListener("ended", playNextSong);

