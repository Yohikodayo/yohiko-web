// main.js
// 全站互動功能

window.addEventListener("scroll", () => {
	const header = document.querySelector(".site-header");

	if (!header) return;

	if (window.scrollY > 50) {
		header.classList.add("is-scrolled");
	} else {
		header.classList.remove("is-scrolled");
	}
});