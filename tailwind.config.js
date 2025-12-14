/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#8FA3B0', // Muted Grey/Blue
                    light: '#B2C0CA',
                    dark: '#6D8290',
                },
                accent: {
                    DEFAULT: '#2F4F4F', // Dark Forest Green
                    light: '#426969',
                    dark: '#1C3333',
                },
                background: '#FFFFFF',
                surface: '#F8F9FA',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
