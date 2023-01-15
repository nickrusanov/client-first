const faqButtons = document.querySelectorAll('.faq__item-btn');
const faqNum = document.querySelectorAll('.faq__item-num');
const faqDesc = document.querySelectorAll('.faq__item-desc');

let faqShowId = -1;

const faqItemOpen = (i) => {
	faqDesc[i].classList.add('faq__item-desc--show');
	faqNum[i].classList.add('faq__item-num--active');

	faqDesc[i].style.maxHeight = faqDesc[i].scrollHeight + 'px';
	faqShowId = i;
}

const faqItemClose = (i) => {
	if (faqShowId !== -1) {
		faqDesc[i].classList.remove('faq__item-desc--show');
		faqNum[i].classList.remove('faq__item-num--active');
		faqDesc[i].style.maxHeight = '';
	}
}

faqButtons.forEach((btn, i) => {
	btn.addEventListener('click', () => {
		if (faqShowId === i) {
			faqItemClose(i);
			faqShowId = -1;
		} else {
			faqItemClose(faqShowId);
			faqItemOpen(i);
		}
	})
})