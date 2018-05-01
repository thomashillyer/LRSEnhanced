const playPause = document.querySelector('.vjs-play-control');
const volume = document.querySelector('.vjs-volume-menu-button');
const speed = document.querySelector('.vjs-playback-rate');
const speeds = speed.querySelectorAll('.vjs-menu-item'); //maybe better to select <li>, sume functionality

//https://stackoverflow.com/questions/39935764/chrome-extension-content-script-app-is-not-defined-on-ember-site/39938062#39938062
//this version is currently hacky but with the above link it could work

//let myVideo = document.getElementsByTagName('video')[0];
let myVideo = videojs('video_html5_api');
// let myVideo = document.querySelector('.video-js');

window.addEventListener('keydown', controlVideo);

function controlVideo(e) {
    //play/pause the video (space, k)
    if (e.keyCode === 32 || e.keyCode === 75) {
        //playPause.click();
         myVideo.paused() ? myVideo.play() : myVideo.pause();
    } else if (e.keyCode === 37) {
        //left arrow
        //go back 5 secs
    } else if (e.keyCode === 39) {
        //right arrow
        //go forward 5 secs
    } else if (e.keyCode === 74) {
        //j
        //go back 10 secs
    } else if (e.keyCode === 76) {
        //l
        //go forward 10 secs
    } else if (e.keyCode === 70) {
        //f
        //fullscreen
        myVideo.supportsFullscreen() ? myVideo.requestFullscreen() : myVideo.enterFullWindow();
    } else if (e.keyCode === 27) {
        //esc
        //leave fullscreen
    } else if (e.keyCode === 38) {
        //up
        //increase volume 5%
        let currVol = myVideo.volume();
        myVideo.volume(currVol + 0.05);
    } else if (e.keyCode === 40) {
        //down
        //decrease volume 5%

        let currVol = myVideo.volume();
        myVideo.volume(currVol - 0.05);
    } else if (e.shiftKey && e.keyCode === 190) {
        //shift+>
        //increase speed
        speed.click();
    } else if (e.shiftKey && e.keyCode === 188) {
        //shift+<
        //decrease speed

        //get current value, lookup, go to next elem
        let currentSpeed = speed.querySelector('.vjs-playback-rate-value');

        speeds.forEach((speed, index, speeds) => {
            if (speed.textContent == currentSpeed.textContent) {
                (speeds[index + 1] ? speeds[index + 1] : speeds[0]).click();
            }
        });
    } else if (e.keyCode === 77) {
        //m
        //mute
        volume.click();
    }
}

// Prevent page from scrolling down when you click the space bar
window.onkeydown = function(e) {
    if ((e.keyCode == 32 || e.keyCode == 38 || e.keyCode == 40) && e.target == document.body) {
        e.preventDefault();
    }
};

//iframe id/class
// .d2l-frame
// #d2l_1_12_73