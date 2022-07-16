
songss = [{% for i in song11 %}{ song: "media/{{i.song}}", d: '{{i.id}}' }, {% endfor %} ]
let play = document.getElementById('play')
let next = document.getElementById('next')
let back = document.getElementById('previous')
let myprogressbar = document.getElementById('my')
var songsIndex = 0
let audioElement = new Audio('media/songs/1.mp3');

let length1 = Object.keys(songss).length
console.log(songss)
console.log(songss[1].d)

play.addEventListener("click", () => {
    if (audioElement.paused) {
        audioElement = new Audio(songss[songsIndex].song);
        console.log('hh')
        audioElement.play()
        play.classList.remove('fa-play')
        play.classList.add('fa-pause')
    }
    else {
        audioElement.pause()
        play.classList.remove('fa-pause')
        play.classList.add('fa-play')
    }

})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress)
    myprogressbar.value = progresss;
})
myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = (myprogressbar.value * audioElement.duration) / 100;
})
next.addEventListener("click", () => {
    if (songsIndex == length1 - 1) {
        audioElement.pause()
        songsIndex = 0;
        audioElement = new Audio(songss[songsIndex].song);
        audioElement.play();
        play.classList.remove('fa-play');
        play.classList.add("fa-pause")
    }
    else {
        audioElement.pause()
        songsIndex += 1;
        audioElement = new Audio(songss[songsIndex].song);
        audioElement.play();
        play.classList.remove('fa-play');
        play.classList.add("fa-pause")
    }
})
previous.addEventListener("click", () => {
    if (songsIndex == 0) {
        audioElement.pause()
        songsIndex = length1 - 1;
        audioElement = new Audio(songss[songsIndex].song);
        audioElement.play();
        play.classList.remove('fa-play');
        play.classList.add("fa-pause")
    }
    else {
        audioElement.pause()
        songsIndex -= 1;
        console.log(songsIndex)
        audioElement = new Audio(songss[songsIndex].song);
        audioElement.play();
        play.classList.remove('fa-play');
        play.classList.add("fa-pause")
    }
})
Array.from(document.getElementsByClassName("hh")).forEach(function (element) {
    element.addEventListener("click", (e) => {
        if (audioElement.paused) {
            inde =(e.target.id)
            console.log(inde)
            makepause()
            let songsIndex = songss.findIndex(object => {
                return object.d === inde;
            });
            // audioElement.currentTime=0
            audioElement = new Audio(songss[songsIndex].song);
            console.log(audioElement)
            
            audioElement.play();
            element.classList.remove("fa-play-circle");
            element.classList.add("fa-pause-circle")
            play.classList.remove('fa-play')
            play.classList.add('fa-pause')

        }
        else {
            e.target.classList.add('fa-play-circle')
            e.target.classList.remove('fa-pause-circle')
            audioElement.pause();
            play.classList.remove('fa-pause')
            play.classList.add('fa-play')
        }
    })
})
const makepause = () => {
    Array.from(document.getElementsByClassName("pl")).forEach(function (e) {
        e.classList.remove(`fa-pause-circle`);
        e.classList.add(`fa-play-play`);
    }
    )
}

