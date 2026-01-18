/* =========== slide editor =========== */
document.querySelectorAll('.clip-card').forEach((card) => {
  const video = card.querySelector('video');
  const play = card.querySelector('.play');
  const back = card.querySelector('.back');
  const forward = card.querySelector('.forward');
  const bar = card.querySelector('.bar');

  if (!video) return;

  card.addEventListener('mouseenter', () => video.play());
  card.addEventListener('mouseleave', () => video.pause());

  play?.addEventListener('click', () => {
    video.paused ? video.play() : video.pause();
    play.textContent = video.paused ? '▶️' : '⏸️';
  });

  back?.addEventListener('click', () => (video.currentTime -= 5));
  forward?.addEventListener('click', () => (video.currentTime += 5));

  video.addEventListener('timeupdate', () => {
    if (!bar) return;
    bar.style.width = (video.currentTime / video.duration) * 100 + '%';
  });

  video.addEventListener('dblclick', () => {
    video.requestFullscreen?.();
  });
});
