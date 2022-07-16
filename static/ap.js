songss = [{% for i in song11 %}{ song: "media/{{i.song}}", d: '{{i.id}}', name: '{{i.name}}' }, {% endfor %} ]
let play = document.getElementById('play')
let next = document.getElementById('next')
let back = document.getElementById('previous')
let myprogressbar = document.getElementById('my')
let songname = document.getElementsByClassName('songname')
var songsIndex = 0
let audioElement = new Audio('media/{{song11.0.song}}');
let length1 = Object.keys(songss).length
let namee = (songss[songsIndex].name)
document.getElementById('songname').innerHTML = '<span id="songname">' + namee + '</span>'
play.addEventListener("click", () => {
    if (audioElement.paused) {
        audioElement = new Audio(songss[songsIndex].song);
        audioElement.play()
        play.classList.remove('fa-play')
        play.classList.add('fa-pause')
        console.log((songss[songsIndex].name))
        let namee = (songss[songsIndex].name)
        document.getElementById('songname').innerHTML = '<span id="songname">' + namee + '</span>'
    }
    else {
        audioElement.pause()
        play.classList.remove('fa-pause')
        play.classList.add('fa-play')
    }
    progresbar()
})
progresbar = () => {
    audioElement.addEventListener('timeupdate', () => {
        console.log(audioElement.duration)
        progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
        myprogressbar.value = progress;
        let duration = Number(audioElement.duration / 60)
        let duration1 = duration.toFixed(2)
        let current = Number(audioElement.currentTime / 60)
        let current1 = current.toFixed(2)
        document.getElementById('songcurrentduration').innerHTML = '<span id="songcurrentduration" class="fs-6">' + current1 + '</span>'
        document.getElementById('songduration').innerHTML = '<span id="songduration" class="fs-6">' + duration1 + '</span>'

    })
    myprogressbar.addEventListener('change', () => {
        audioElement.currentTime = (myprogressbar.value * audioElement.duration) / 100;
    })
}
next.addEventListener("click", () => {
    if (songsIndex == length1 - 1) {
        audioElement.pause()
        songsIndex = 0;
        audioElement = new Audio(songss[songsIndex].song);
        audioElement.play();
        play.classList.remove('fa-play');
        play.classList.add("fa-pause")
        let namee = (songss[songsIndex].name)
        document.getElementById('songname').innerHTML = '<span id="songname">' + namee + '</span>'
    }
    else {
        audioElement.pause()
        songsIndex += 1;
        audioElement = new Audio(songss[songsIndex].song);
        audioElement.play();
        play.classList.remove('fa-play');
        play.classList.add("fa-pause")
        let namee = (songss[songsIndex].name)
        document.getElementById('songname').innerHTML = '<span id="songname">' + namee + '</span>'
    }
    progresbar()

})
previous.addEventListener("click", () => {
    if (songsIndex == 0) {
        audioElement.pause()
        songsIndex = length1 - 1;
        audioElement = new Audio(songss[songsIndex].song);
        audioElement.play();
        play.classList.remove('fa-play');
        play.classList.add("fa-pause")
        let namee = (songss[songsIndex].name)
        document.getElementById('songname').innerHTML = '<span id="songname">' + namee + '</span>'
    }
    else {
        audioElement.pause()
        songsIndex -= 1;
        console.log(songsIndex)
        audioElement = new Audio(songss[songsIndex].song);
        audioElement.play();
        play.classList.remove('fa-play');
        play.classList.add("fa-pause")
        let namee = (songss[songsIndex].name)
        document.getElementById('songname').innerHTML = '<span id="songname">' + namee + '</span>'
    }
    progresbar()
})
Array.from(document.getElementsByClassName("hh")).forEach(function (element) {
    element.addEventListener("click", (e) => {
        audioElement.pause();
        play.classList.remove('fa-pause')
        play.classList.add('fa-play')
        inde = (e.target.id)
        console.log(inde)
        let songsIndex = songss.findIndex(object => {
            return object.d === inde;
        });
        // audioElement.currentTime=0
        audioElement = new Audio(songss[songsIndex].song);
        console.log(audioElement)

        audioElement.play();
        makepause()
        e.target.classList.remove("fa-play-circle")
        console.log('removeplay')
        e.target.classList.add("fa-pause-circle")
        console.log('addpause')
        play.classList.remove('fa-play')
        play.classList.add('fa-pause')
        let namee = (songss[songsIndex].name)
        document.getElementById('songname').innerHTML = '<span id="songname">' + namee + '</span>'
        progresbar()
    })
})
const makepause = () => {
    Array.from(document.getElementsByClassName("hh")).forEach(function (e) {
        e.classList.remove(`fa-pause-circle`);
        e.classList.add(`fa-play-circle`);
    }
    )
}