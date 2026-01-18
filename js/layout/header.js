document.addEventListener('DOMContentLoaded', async () => {
  // Navegação
  const links = document.querySelectorAll('.menu-link');
  const contents = document.querySelectorAll('.art-content');

  links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      links.forEach((l) => l.classList.remove('menuActive'));
      contents.forEach((c) => c.classList.remove('contActive'));

      link.classList.add('menuActive');
      contents[index].classList.add('contActive');
    });
  });

  // Avatar
  const { GITHUB_USER } = window.APP_CONFIG || {};
  if (!GITHUB_USER) return;

  const avatarImg = document.querySelector('#avatar');
  if (!avatarImg) return;

  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}`);
    if (!res.ok) throw new Error('GitHub API error');

    const { avatar_url, login } = await res.json();

    avatarImg.src = avatar_url;
    avatarImg.alt = login;

    avatarImg.onload = () => avatarImg.classList.add('loaded');

    // favicon automático
    const favicon =
      document.querySelector('link[rel="icon"]') ||
      document.createElement('link');

    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href = avatar_url;
    document.head.appendChild(favicon);
  } catch {
    console.warn('Falha ao carregar avatar do GitHub');
  }
});
