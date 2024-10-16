/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary-100': '#00000084',
                'primary-200': '#00000095',
                'primary-200': '#000000ed',
                'secondary-300': '#2880d0',
                'primary-500': 'gray',
                'secondary-400': 'rgb(243, 189, 28)',
                'secondary-500': '#FFC132',
            },
            // backgroundImage: () => ({
            //     'gradient-yellowred': 'linear-gradient(90deg, #FF616A 0%,#FFC837 100%)',
            //     'mobile-home': "url('./src/assets/HomePageGraphic.png')",
            // }),
            // fontFamily: {
            //     dmsans: ['DM Sans', 'sans-serif'],
            //     monserrat: ['Montserrat', 'sans-serif'],
            // },
            // content: {
            //     // ! so now we can use them as a css :before properties or smth else when
            //     // ! writing css tailwind code
            //     evolvetext: "url('./src/assets/EvolveText.png')",
            //     abstractwaves: "url('./src/assets/AbstractWaves.png')",
            //     sparkles: "url('./src/assets/Sparkles.png')",
            //     circles: "url('./src/assets/Circles.png')",
            // },
        },
        screens: {
            xs: '480px',
            sm: '768px',
            md: '1160px',
        },
    },
    plugins: [],
};

// module.exports = {
//     content: [
//         './app/**/*.{js,ts,jsx,tsx,mdx}',
//         './pages/**/*.{js,ts,jsx,tsx,mdx}',
//         './components/**/*.{js,ts,jsx,tsx,mdx}',

//         // Or if using `src` directory:
//         './src/**/*.{js,ts,jsx,tsx,mdx}',
//     ],
//     theme: {
//         extend: {
//             colors: {
//                 git: {
//                     50: '#c778dd33',
//                     100: '#c778dd',
//                 },
//             },
//         },
//     },
//     plugins: [],
// };