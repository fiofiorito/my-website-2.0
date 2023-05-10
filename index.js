// alert('It works!');

var video1 = document.getElementById("simon-game-video1");
var video2 = document.getElementById("simon-game-video2");
var playButton = document.getElementById("play-button");
var playButton2 = document.getElementById("play-button-2");

playButton.addEventListener("click", function() {
    video1.play();
    playButton.style.display = "none";
});

playButton2.addEventListener("click", function() {
    video2.play();
    playButton2.style.display = "none";
})

video1.addEventListener("click", function() {
    if (!video1.paused) {
        video1.pause();
        playButton.style.display = "block";
    }
})

video2.addEventListener("click", function() {
    if (!video2.paused) {
        video2.pause();
        playButton2.style.display = "block";
    }
})