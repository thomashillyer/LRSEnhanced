const playPause = document.querySelector('.vjs-play-control');
const volume = document.querySelector('.vjs-volume-menu-button');
const speed = document.querySelector('.vjs-playback-rate');
const speeds = speed.querySelectorAll('.vjs-menu-item'); //maybe better to select <li>, sume functionality


window.addEventListener('keydown', controlVideo);

function controlVideo(e) {
    //play/pause the video (space, k)
    if (e.keyCode === 32 || e.keyCode === 75) {
        playPause.click();
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
    } else if (e.keyCode === 27) {
        //esc
        //leave fullscreen
    } else if (e.keyCode === 38) {
        //f
        //increase volume 5%
    } else if (e.keyCode === 40) {
        //esc
        //decrease volume 5%
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
        	if(speed.textContent == currentSpeed.textContent){
        		(speeds[index+1] ? speeds[index+1] : speeds[0]).click();
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
    if (e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
    }
};

//iframe id/class
// .d2l-frame
// #d2l_1_12_73