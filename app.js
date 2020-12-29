const sidenav = document.querySelector('.sidenav');
const sidenavTrigger = document.querySelector('.sidenav-trigger');

const overlay = document.querySelector('.overlay');

showSidenav = () => {
	sidenav.classList.add('show');
	overlay.setAttribute('style', 'opacity: 1; pointer-events: all;');
}

hideSidenav = () => {
	sidenav.classList.remove('show');
	overlay.setAttribute('style', 'opacity: 0; pointer-events: none;');
}

sidenavTrigger.addEventListener('click', showSidenav);

overlay.addEventListener('click', hideSidenav);