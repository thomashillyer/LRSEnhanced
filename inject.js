 //API: http://docs.videojs.com/docs/api/player.html
 const playPause = document.querySelector('.vjs-play-control');
 // const volume = document.querySelector('.vjs-volume-menu-button');
 const speed = document.querySelector('.vjs-playback-rate');
 const speeds = speed.querySelectorAll('.vjs-menu-item'); //maybe better to select <li>, sume functionality

 const myVideo = videojs('video_html5_api');

 window.addEventListener('keydown', controlVideo);

 window.onload = insertControlInfo;
 // insertControlInfo();

 function insertControlInfo() {
     const infoBox = document.querySelector('#TabContainer1');
     const controlsBox = document.createElement("DIV");

     const controls = {
         playpause: `<span>space</span> / <span>k</span>`,
         speedup: `<span>shft</span> + <span>></span>`,
         speeddown: `<span>shft</span> + <span><</span>`,
         mute: `<span>m</span>`,
         ahead: `<span>right arrow</span>`,
         back: `<span>left arrow</span>`,
         ahead10: `<span>l</span>`,
         back10: `<span>j</span>`,
         fullscreen: `<span>f</span>`,
         exitFullscreen: `<span>esc</span>`,
         volumeup: `<span>up arrow</span>`,
         volumedown: `<span>down arrow</span>`
     }

     const template = `
        <div class="controls-info">
            <h3>LRS Enhancer Controls</h3>
            <table>
                <tr>
                <td>
                <div><i class="icon-play"></i><i class="icon-pause"></i>: ${controls.playpause} </div>
                </td>
                <td>
                <div><i class="icon-fast-bw"></i>: ${controls.speeddown} </div>
                </td>
                <td>
                <div><i class="icon-fast-fw"></i>: ${controls.speedup} </div>
                </td>
                <td>
                <div><i class="icon-volume-off"></i>: ${controls.mute} </div>
                </td>
                <td>
                <div><i class="icon-volume-down"></i>: ${controls.volumedown} </div>
                </td>
                <td>
                <div><i class="icon-volume-up"></i>: ${controls.volumeup} </div>
                </td>
                <td>
                <div><i class="icon-resize-full-alt"></i>: ${controls.fullscreen} </div>
                </td>
                </tr>
                <tr>
                <td>
                <div><i class="icon-to-start-alt"></i> 10s: ${controls.back10} </div>
                </td>
                <td>
                <div><i class="icon-to-start"></i>5s: ${controls.back} </div>
                </td>
                <td>
                <div>5s<i class="icon-to-end"></i>: ${controls.ahead} </div>
                </td>
                <td>
                <div>10s<i class="icon-to-end-alt"></i>: ${controls.ahead10} </div>
                </td>
                </tr>
            </table>
        </div>
     `;

     controlsBox.innerHTML = template;

     infoBox.parentNode.insertBefore(controlsBox, infoBox);
 }

 function controlVideo(e) {

     // Prevent page from scrolling down when you click the space bar or arrow keys
     if ((e.keyCode == 32 || e.keyCode == 38 || e.keyCode == 40) && e.target == document.body) {
         e.preventDefault();
     }
     if (e.keyCode === 32 || e.keyCode === 75) {
         // space, k
         // play/pause the video
         playPause.blur(); //unfocus, prevents 'double click'
         myVideo.paused() ? myVideo.play() : myVideo.pause();

     } else if (e.keyCode === 37) {
         // left arrow
         // go back 5 secs
         myVideo.currentTime(myVideo.currentTime() - 5);

     } else if (e.keyCode === 39) {
         // right arrow
         // go forward 5 secs
         myVideo.currentTime(myVideo.currentTime() + 5);

     } else if (e.keyCode === 74) {
         // j
         // go back 10 secs
         myVideo.currentTime(myVideo.currentTime() - 10);

     } else if (e.keyCode === 76) {
         // l
         // go forward 10 secs
         myVideo.currentTime(myVideo.currentTime() + 10);

     } else if (e.keyCode === 70) {
         // f
         // fullscreen
         //myVideo.supportsFullscreen() ? myVideo.requestFullscreen() : myVideo.enterFullWindow();
         myVideo.requestFullscreen();

     } else if (e.keyCode === 27) {
         //esc
         //leave fullscreen
         myVideo.exitFullscreen();

     } else if (e.keyCode === 38) {
         //up
         //increase volume 5%
         myVideo.volume(myVideo.volume() + 0.05);

     } else if (e.keyCode === 40) {
         //down
         //decrease volume 5%
         myVideo.volume(myVideo.volume() - 0.05);

     } else if (e.shiftKey && e.keyCode === 190) {
         //shift+>
         //increase speed
         speed.click();

         // future way should implement an input selector to allow more fine tuning
         // let speeds[] = [0.5, 1, 1.3, 1.5, 1.7, 2];
         //let newSpeed = speeds[i];
         //myVideo.playbackRate(1.6);

     } else if (e.shiftKey && e.keyCode === 188) {
         //shift+<
         //decrease speed

         //get current value, lookup, go to next elem
         let currentSpeed = speed.querySelector('.vjs-playback-rate-value');

         // this is a terrible way to do this but it works
         speeds.forEach((speed, index, speeds) => {
             if (speed.textContent == currentSpeed.textContent) {
                 (speeds[index + 1] ? speeds[index + 1] : speeds[0]).click();
             }
         });

     } else if (e.keyCode === 77) {
         //m
         //mute
         //volume.click();
         myVideo.muted(!myVideo.muted());

     }
 }