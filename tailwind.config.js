import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            dropShadow: {
                'night': '0 0 90px rgba(105, 64, 122, 1)',
                'day': '0 0 90px rgba(169, 183, 252, 1)'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                shadowFadeInNight: {
                    '0%': { filter: 'drop-shadow(0 0 0 rgba(105, 64, 122, 0))' },
                    '100%': { filter: 'drop-shadow(0 0 90px rgba(105, 64, 122, 1))' },
                },
                shadowFadeInDay: {
                    '0%': { filter: 'drop-shadow(0 0 0 rgba(169, 183, 252, 0))' },
                    '100%': { filter: 'drop-shadow(0 0 90px rgba(169, 183, 252, 1))' },
                },
            },
            animation: {
                fadeIn: 'fadeIn 1s ease-in-out forwards',
                shadowFadeInNight: 'shadowFadeInNight 1s ease-out forwards',
                shadowFadeInDay: 'shadowFadeInDay 1s ease-out forwards',
            },
        },
    },

    plugins: [forms],
};

