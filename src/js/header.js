const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.header__nav-link');

const navLinkToggle = () => {

	navLinks.forEach((link, i) => {
		link.classList.contains('header__nav-link--visible')
		?	link.classList.remove('header__nav-link--visible')
		: setTimeout(() => {link.classList.add('header__nav-link--visible')}, i*100);
	})
}

const navToggle = () => {
	hamburger.classList.toggle('header__hamburger--close');
	nav.classList.toggle('header__nav--visible');
	document.body.classList.toggle('overflow-hidden');
}

hamburger.addEventListener('click', () => {
	navToggle();
	navLinkToggle();
})