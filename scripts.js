// スムーズスクロール機能
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // デフォルトのリンク動作を防止
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // スムーズスクロールを有効化
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("hero-title");

    setTimeout(() => {
        title.classList.add("show");
    }, 1000);
});