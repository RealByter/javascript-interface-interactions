const dropdownMenus = document.querySelectorAll('.dropdown-menu');

dropdownMenus.forEach(menu => {
	for (let i = 0; i < menu.children.length; i++) {
		menu.children[i].classList.add('invisible');
		menu.children[i].style.top = `${20 + 20 * i}px`;
	}

	menu.addEventListener('mouseover', e => {
		for (let i = 0; i < menu.children.length; i++) {
			menu.children[i].classList.remove('invisible');
		}
	});

	menu.addEventListener('mouseout', e => {
		for (let i = 0; i < menu.children.length; i++) {
			menu.children[i].classList.add('invisible');
		}
	});
});

const hamburgers = document.querySelectorAll('.hamburger');

hamburgers.forEach(hamburger => {
	hamburger.addEventListener('click', e => {
		const menu = hamburger.nextElementSibling;
		menu.classList.toggle('invisible');
		const backdrop = menu.nextElementSibling;
    backdrop.classList.toggle('invisible')
		backdrop.addEventListener('click', e => {
			menu.classList.add('invisible');
      backdrop.classList.add('invisible')
		});
	});
});
