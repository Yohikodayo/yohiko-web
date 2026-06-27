// include-head.js
// 將 components/head.html 載入目前頁面的 <head>
// 用 DOMParser 轉成節點後逐一 append，避免部分瀏覽器對 link/meta 插入處理不穩

(function includeHead() {
	const request = new XMLHttpRequest();

	// false 代表同步載入，確保 CSS 儘早載入
	request.open("GET", "/assets/components/head.html", false);

	try {
		request.send();

		if (request.status !== 200 && request.status !== 0) {
			console.error("components/head.html 載入失敗，HTTP status:", request.status);
			return;
		}

		const parser = new DOMParser();

		// 把 head.html 的文字轉成 HTML 文件
		const doc = parser.parseFromString(request.responseText, "text/html");

		// 將 head.html 內的節點逐一加入目前頁面的 head
		Array.from(doc.head.children).forEach((node) => {
			document.head.appendChild(node.cloneNode(true));
		});

		console.log("components/head.html 載入完成");
	} catch (error) {
		console.error("components/head.html 載入錯誤：", error);
	}
})();