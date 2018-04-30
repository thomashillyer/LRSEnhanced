const playPause = document.querySelector('.vjs-play-control');

window.addEventListener('keydown', controlVideo);

function controlVideo(e) {
	if(e.keyCode === 32){
		console.log('space');
		playPause.click();
	}
}

window.onkeydown = function(e) {
  if (e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
};
