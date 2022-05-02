const footer = document.querySelector('footer');
const goToTop = document.querySelector('#go-to-top');
const menu = document.querySelector('#summary-list');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

function copyMenuToNavbar() {
	navbarMenu.innerHTML = menu.innerHTML;
}

function handleNavbarMenu() {
	navbarMenuBtn.addEventListener('click', () => navbarMenu.classList.toggle('hide-navbar'));
	window.addEventListener('click', e => {
		if (e.target.classList.contains('navbar-menu-btn')) return;
		if (e.target.classList.contains('navbar-menu')) return;
		navbarMenu.classList.add('hide-navbar');
	});
}

function showFooter() {
	let timeout;
	window.addEventListener('scroll', () => {
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => footer.classList.remove('hide-footer'), 700);
		footer.classList.add('hide-footer');
	});
}

function updateGoToTopButton() {
	if (window.scrollY > 200) {
		goToTop.classList.remove('hide');
	} else {
		goToTop.classList.add('hide');
	}
}

window.addEventListener('load', () => {
	copyMenuToNavbar();
	handleNavbarMenu();
	showFooter();
	updateGoToTopButton();

	goToTop.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});

	window.addEventListener('scroll', () => {
		updateGoToTopButton();
	});

});
