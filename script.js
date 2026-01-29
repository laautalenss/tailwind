// Contador de visitas ultra-minimalista (<1KB)
(() => {
    const k = "v",
        c = document.getElementById("counter"),
        b = document.getElementById("counter-btn");
    let n = parseInt(localStorage.getItem(k) || "0");
    c.textContent = n;
    b.onclick = () => {
        n++;
        c.textContent = n;
        localStorage.setItem(k, n);
        b.classList.add("scale-95");
        setTimeout(() => b.classList.remove("scale-95"), 100);
    };
})();
