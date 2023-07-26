const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const panel = document.querySelector('.panel');
const slides = panel.querySelectorAll('li');
const progressBar = document.querySelector('.progress-bar');
let currentSlide = 0;

function updateProgressBar() {
	const totalWidth = Array.from(slides).reduce((acc, slide) => acc + slide.offsetWidth, 0);
	const cumulativeWidth = Array.from(slides)
		.slice(0, currentSlide + 1)
		.reduce((acc, slide) => acc + slide.offsetWidth, 0);
	const progress = (cumulativeWidth / totalWidth) * 100;
	progressBar.style.width = `${progress}%`;
}

function moveToSlide(index) {
	currentSlide = (index + slides.length) % slides.length;
	const targetMargin = `-${Array.from(slides)
		.slice(0, currentSlide)
		.reduce((acc, slide) => acc + slide.offsetWidth, 0)}px`;
	panel.style.marginLeft = targetMargin;
	updateProgressBar();
}

next.addEventListener('click', () => moveToSlide(currentSlide + 1));
prev.addEventListener('click', () => moveToSlide(currentSlide - 1));
updateProgressBar();
