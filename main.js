let i = 0;
const [number, ...btns] = document.querySelectorAll("#number, .btn-decrease, .btn-reset, .btn-increase");

btns.forEach(btn => btn.addEventListener("click", e => {
    const styles = e.target.classList;
    styles.contains("btn-decrease") ? i-- :
    styles.contains("btn-increase") ? i++ :
    i = 0;
    number.style.color = i > 0 ? "green" : i < 0 ? "red" : "#222";
    number.textContent = i;
}));
