const goToTop = document.querySelector('#go-to-top');
const menu = document.querySelector('#summary-list');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

function copyMenuToNavbar() {
	navbarMenu.innerHTML = menu.innerHTML;
}

function handleNavbarMenu() {
	navbarMenuBtn.addEventListener('click', () => navbarMenu.classList.toggle('hide'));
	window.addEventListener('click', e => {
		if (e.target.classList.contains('navbar-menu-btn')) return;
		if (e.target.classList.contains('navbar-menu')) return;
		navbarMenu.classList.add('hide');
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
