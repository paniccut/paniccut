import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

// Gestion cartes de vitre
//  Rotate
const cards = document.querySelectorAll('.glassCardRotate');

cards.forEach(card => {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const rotation = scrollY / 5;
      card.style.transform = `rotatex(${rotation}deg)`;
    });
});

//  Shimmer on hover
const glassCards = document.querySelectorAll('.glass');

glassCards.forEach(card => {
    const shimmer = card.querySelector('.shimmer');

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let offsetX = 0;
        let offsetY = 0;
        if (card.tagName === 'BUTTON') {
            offsetX = 50;
            offsetY = 45
        }
        else if (card.classList.contains('dropdown')) {
            offsetX = 60;
            offsetY = 60;
        }
        else {
            offsetX = 135;
            offsetY = 135;
        }
        x -= offsetX;
        y -= offsetY;

        shimmer.style.left = `${x}px`;
        shimmer.style.top = `${y}px`;
        shimmer.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
        shimmer.style.opacity = '0';
    });
});


// Gestion dark/light mode
const root = document.documentElement;

const match = document.cookie.match(/theme=(dark|light)/);
if (match) {
    root.classList.add(match[1]);
} else {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.classList.add('dark');
    } else {
        root.classList.add('light');
    }
}

document.getElementById('toggleTheme').addEventListener('click', () => {
    let theme = root.classList.contains('dark') ? 'light' : 'dark';
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
    console.log(theme)
    document.cookie = "theme=" + theme + "; path=/; max-age=" + 60*60*24*30;
});

// Gestion bouton light/dark mode
const btn = document.getElementById('toggleTheme');
const snow = document.getElementById('snow');
const moon = document.getElementById('moon');

let darkMode = root.classList.contains('dark') ? false : true;

btn.addEventListener('click', () => {
  if (!darkMode) {
    snow.classList.remove('spin-in');
    snow.classList.add('spin-out');
    moon.classList.remove('spin-out');
    moon.classList.add('spin-in');
  } else {
    snow.classList.remove('spin-out');
    snow.classList.add('spin-in');
    moon.classList.remove('spin-in');
    moon.classList.add('spin-out');
  }
  darkMode = !darkMode;
});
