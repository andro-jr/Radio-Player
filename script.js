'use strict';

const datas = 
  [
    {
      url: "http://streaming.softnep.net:8037/;stream.nsv&type=mp3",
      name: "Capital FM"
    },
    {
      url: "http://streaming.softnep.net:8115/;stream.nsv&type=mp3",
      name: "Radio Sarangi Morang"
    },
    {
      url: "http://streaming.softnep.net:8091/;stream.nsv&type=mp3",
      name: "Radio Annapurna Nepal"
    },
    {
      url: "http://stream.zenolive.com/2w81t82wx3duv",
      name: "Radio Audio "
    },
    {
      url: "http://streaming.softnep.net:8139/;stream.nsv&type=mp3",
      name: "Radio Makwanpur Gorkha"
    },
    {
      url: "http://streaming.softnep.net:8141/;stream.nsv&type=mp3",
      name: "Radio Myagdi Kali"
    },
    {
      url: "http://streaming.softnep.net:8003/;stream.nsv&type=mp3",
      name: "Butwal FM"
    },
    {
      url: "http://streaming.softnep.net:8065/;stream.nsv&type=mp3",
      name: "Unique FM Rukum"
    },
    {
      url: "http://streaming.softnep.net:8103/;stream.nsv&type=mp3",
      name: "Afno FM Okhaldhunga"
    },
    {
      url: "http://streaming.softnep.net:8051/;stream.nsv&type=mp3",
      name: "Radio Melamchi"
    },
    {
      url: "http://streaming.softnep.net:8091/;stream.nsv&type=mp3",
      name: "Citizen FM",
      image: "http://radio.nepal.fm/wp-content/uploads/Citizen-FM.jpg"
    },
  ]

const previousBTn = document.querySelector('.previous');
const nextBTn = document.querySelector('.next');
const audioImg = document.querySelector('.audio-img');
const audioTitle = document.querySelector('.audio-title');
const audioPlayer = document.querySelector('.audio');
const playPauseBtn = document.querySelector('.play-pause'),
ctrl = document.getElementById('audioControl');
const dataLength = datas.length;
let count = 0;
let playPauseFlag = 0;

// Rendering channel
const renderChannel = (count)=>{
    audioTitle.textContent = datas[count].name;
    // audioImg.src = datas[count].image;
    audioPlayer.src = datas[count].url;
}

renderChannel(0);

nextBTn.addEventListener('click',()=>{

    console.log(count);
    if(count === dataLength-1){
        count = 0;
    }else{
        count++;
    }

    renderChannel(count);
});

previousBTn.addEventListener('click',()=>{
    if(count === 0){
        count = dataLength-1;
    }else{
        count--;
    }
    console.log(count);

    renderChannel(count);
});

playPauseBtn.addEventListener('click',()=>{

    playPauseBtn.classList.toggle('change-to-pause');
    if(playPauseFlag===0){
        audioPlayer.pause();
        playPauseFlag=1;
    }else{
        audioPlayer.play();
        playPauseFlag=0;
    }

});
