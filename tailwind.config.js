/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                chalet: ['ChaletLondon1960', 'sans-serif'],
                'chalet-condensed': ['ChaletComprime1960', 'sans-serif'],
            },
            colors: {
                'gta-green': '#5af019',
                'gta-red': '#b00000',
            },
        },
    },
    plugins: [],
}
