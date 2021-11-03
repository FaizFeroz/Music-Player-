// console.log("hello");
src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"

let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let progressBar=document.getElementById('progressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let mastersongname=document.getElementById('songname');
let songs=[
    {songName:"Blinded by the lights",filePath:"songs/1.mp3" ,coverPath:"covers/1.jpg"},
    {songName:"Got theme",filePath:"songs/2.mp3" ,coverPath:"covers/2.jpg"},
    {songName:"Heathens",filePath:"songs/3.mp3" ,coverPath:"covers/3.jpg"},
    {songName:"Dancin ",filePath:"songs/4.mp3" ,coverPath:"covers/4.jpg"},
    {songName:"Song 1",filePath:"songs/5.mp3" ,coverPath:"covers/5.jpg"},
    {songName:"Supercut",filePath:"songs/6.mp3" ,coverPath:"covers/6.jpg"},
    
]
// songItems.forEach((element,i)=>{

//     element.getElementsByTagName("img")[0].src=songs[i].coverPath;

//     element.getElementsByClassName("songName")[0].innerText=songs[1].songName;
// })


masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    } 
    else{  
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate' ,()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressBar.value=progress;
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
})
 
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
       audioElement.src=`songs/${songIndex+1}.mp3`;
       audioElement.currentTime=0;
       audioElement.play();
       masterplay.classList.remove('fa-play-circle');
       masterplay.classList.add('fa-pause-circle');
       mastersongname.innerText=songs[songIndex].songName;
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if (songIndex>=6) {
        songIndex=0;
    }
    else{
        songIndex++;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`; 
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        mastersongname.innerText=songs[songIndex].songName;
})
document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0) {
        songIndex=6;
    }
    else{
        songIndex--;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`; 
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        mastersongname.innerText=songs[songIndex].songName;
})