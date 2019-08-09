const modalToggle = (menu, menuActive, closeBtn) => {
	// To restate '.main-support' button styles
	window.addEventListener('resize', () => {
		if(window.innerWidth >= 1200) document.querySelector('.main-support').style.marginRight = '';
	});


	if(menu === '.modal_support') { // support form
		const modalMenu = document.querySelector(menu);
		const openBtn = document.querySelector('.main-support');

		modalMenu.classList.add('closed_support_modal');
		openBtn.style.transition = '.2s ease-in-out';

		window.addEventListener('click', (e) => {
			if(e.target.closest('.main-support')) {
				// open
				if(window.innerWidth < 1200) {
					document.querySelector('.main-support').style.marginRight = '0';
				}
				modalMenu.classList.add(menuActive);
			} else if(!e.target.closest(menu) || e.target.matches(closeBtn)) {
				// close
				if(window.innerWidth < 1200) {
					document.querySelector('.main-support').style.marginRight = '-13rem';
				}
				modalMenu.classList.remove(menuActive);
			}
		});

	} else if(menu === '.modal_offer') { // offer form
		const modalMenu = document.querySelector(menu);
		modalMenu.classList.add('closed_offer_modal');
		
		window.addEventListener('click', (e) => {
			if(e.target.closest('.main-try')) {
				// open
				modalMenu.classList.add(menuActive);
			} else if(!e.target.closest(menu) || e.target.matches(closeBtn)) {
				// close
				modalMenu.classList.remove(menuActive);
			}
		});
	}
	
}

export default modalToggle;