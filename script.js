function initTabNav() {
	const tabMenu = document.querySelectorAll('.js-tabmenu li');
	const tabContent = document.querySelectorAll('.js-tabcontent section');

	if (tabMenu.length && tabContent.length) {
		tabContent[0].classList.add('ativo');

		function ativarTab(i) {
			tabContent.forEach((section) => {
				section.classList.remove('ativo');
			});
			tabContent[i].classList.add('ativo');
		}

		tabMenu.forEach((li, i) => {
			li.addEventListener('click', function () {
				ativarTab(i);
			});
		});
	}
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  accordionList[0].nextElementSibling.classList.add('ativo');

	if (accordionList.length) {
		function ativarAccordion(event) {
			this.classList.toggle('ativo');
			this.nextElementSibling.classList.toggle('ativo');
		}

		accordionList.forEach((i) => {
			i.addEventListener('click', ativarAccordion);
		});
	}
}
initAccordion();

function initScrollSuave() {
	const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

	if (linksInternos.length) {
		function scrollSuave(event) {
			event.preventDefault();
			const href = this.getAttribute('href');
			const section = document.querySelector(href);
			section.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}

		linksInternos.forEach((link) => {
			link.addEventListener('click', scrollSuave);
		});
	}
}
initScrollSuave();

function initAnimacaoScroll() {
	const sections = document.querySelectorAll('.js-scroll');
	const windowMetade = innerHeight * 0.6;

	if (sections.length) {
		function animaScroll(event) {
			sections.forEach((section) => {
				const sectionTop = section.getBoundingClientRect().top - windowMetade;
				if (sectionTop < 0) {
					section.classList.add('ativo');
				} else {
					section.classList.remove('ativo');
				}
			});
		}
		animaScroll();
		window.addEventListener('scroll', animaScroll);
	}
}
initAnimacaoScroll();





