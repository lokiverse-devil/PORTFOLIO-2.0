/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './lib/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                chalet: ['ChaletLondon1960', 'Bebas Neue', 'Montserrat', 'sans-serif'],
                'chalet-condensed': ['ChaletComprime1960', 'Barlow Condensed', 'Arial Narrow', 'sans-serif'],
            },
            colors: {
                'gta-green': '#5af019',
                'gta-red': '#b00000',
            },
        },
    },
    plugins: [],
}

