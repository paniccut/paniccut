const toggle = document.getElementById('dark-mode-toggle');
const html = document.documentElement;

// Check local storage on page load
if(localStorage.getItem('dark') === 'true') {
    html.classList.add('dark');
}

toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('dark', html.classList.contains('dark'));
});

const card = document.getElementById('glassCard');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const wobble = Math.sin(scrollY / 100) * 5; // wobble intensity
    const scaleX = 1 + wobble * 0.01;
    const scaleY = 1 - wobble * 0.01;
    const rotate = wobble * 0.2;
    card.style.transform = `scaleX(${scaleX}) scaleY(${scaleY}) rotate(${rotate}deg)`;
});
