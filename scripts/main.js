// decor functions
// star functions adapted from Rohon-Gautam on GitHub (minor modifications made)
const starfield = document.querySelector(".starfield");

function randNum(min, max) {
	return Math.random() * (max - min) + min;
}

function createStar() {
	const star = document.createElement("div");
	star.classList.add("star");
	const isShootingStar = Math.random() > 0.95;
	if (isShootingStar) {
		star.classList.add("shooting-star");
		star.style.animationDuration = `${randNum(2, 4)}s`;
	}
	star.style.left = `${randNum(0, 100)}vw`;
	star.style.top = `${randNum(0, 100)}vh`;
	star.style.width = `${isShootingStar ? randNum(3, 5) : randNum(1, 2)}px`;
	star.style.height = `${isShootingStar ? randNum(3, 5) : randNum(1, 2)}px`;
	starfield.appendChild(star);
}

for (let i = 0; i < 1000; i++) {
	createStar();
}

function blinkStars() {
	const stars = document.querySelectorAll(".star");
	stars.forEach((star) => {
		const duration = randNum(2, 4);
		star.style.animation = `blink ${duration}s infinite alternate`;
	});
}
// typewriter effect originally from geeksforgeeks.org, heavily modified
// SCRAPPED IN CURRENT VERSION FOR TIME REASONS
function type(container, content) {
	let idx = 0;
	container.textContent = "";
	// const node = document.createTextNode("");
	// const cursor = document.createElement("span");
	// cursor.classList.add("cursor-effect");
	// cursor.innerHTML = "&nbsp;";

	// container.appendChild(node);
	// container.appendChild(cursor);

	let interval = setInterval(function () {
		if (idx < content.length) {
			container.textContent += content.charAt(idx);
			idx++;
		} else {
			clearInterval(interval);
			cursor.classList.add("blinking");
		}
	}, 33); // speed of typed text


}

document.addEventListener("DOMContentLoaded", function () {
	blinkStars();

	// iterate through all typed-text containers and type them out in order of appearance
	const containers = document.getElementsByClassName("typed-text");
	for (let i = 0; i < containers.length; i++) {
		let container = containers.item(i);
		type(container, container.textContent.trim())
	}
});

