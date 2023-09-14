
const scroller = document.querySelector(".dragscroll");
const toggle = document.querySelector("#toggle-menu");
const nav = document.querySelector("#_show_nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

let isDragging = false;
let startX = 0;
let scrollLeftStart = 0;

scroller.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    scrollLeftStart = scroller.scrollLeft;
});

scroller.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX;
    const walk = (x - startX);

    // Simulate a bounce effect if we've scrolled to the start or end
    if (scroller.scrollLeft <= 0 && walk > 0) {
        // At the start, dragging right
        scroller.style.transform = `translateX(${walk * 0.5}px)`;
    } else if (scroller.scrollLeft >= scroller.scrollWidth - scroller.offsetWidth && walk < 0) {
        // At the end, dragging left
        scroller.style.transform = `translateX(${walk * 0.5}px)`;
    } else {
        scroller.style.transform = 'translateX(0)';
    }
});

scroller.addEventListener('mouseup', () => {
    isDragging = false;
    // Animate back to the original position after the "bounce"
    scroller.style.transition = 'transform 0.2s';
    scroller.style.transform = 'translateX(0)';
    setTimeout(() => {
        scroller.style.transition = '';
    }, 200);
});
