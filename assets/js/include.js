// include.js
// 載入 header.html 與 footer.html

async function includeHTML(targetSelector, filePath) {
	const targetElement = document.querySelector(targetSelector);

	if (!targetElement) return;

	try {
		const response = await fetch(filePath);

		if (!response.ok) {
			throw new Error(`${filePath} 載入失敗，HTTP status: ${response.status}`);
		}

		const html = await response.text();

		targetElement.innerHTML = html;
	} catch (error) {
		console.error(error);
	}
}

async function loadComponents() {
	await includeHTML("#site-header", "./assets/components/header.html");
	await includeHTML("#site-footer", "./assets/components/footer.html");

	const yearElement = document.getElementById("current-year");

	if (yearElement) {
		yearElement.textContent = new Date().getFullYear();
	}
}

document.addEventListener("DOMContentLoaded", loadComponents);