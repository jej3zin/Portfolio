const menuBtns = document.querySelectorAll('.menu button');

// Trocar vídeo pelo menu
menuBtns.forEach((btn) => {
  btn.onclick = () => {
    video.src = btn.dataset.video;
    video.play();
    playBtn.innerHTML = '<ion-icon name="pause"></ion-icon>';
  };
});
