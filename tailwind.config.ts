import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                "shimmer-slide":
                    "shimmer-slide var(--speed) ease-in-out infinite alternate",
                "spin-around": "spin-around calc(var(--speed) * 2) infinite",
                "floating": "floating 5s infinite ease-in-out",
                "appear": "appear 300ms ease-in-out"
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                'primary-blue': '#2B1EDD',
                'primary-blue-200': 'rgba(43,30,221,0.3)',
                'primary-yellow': '#F79D25',
                'secondary-text': '#FFFFFFA8',
            },
            keyframes: {
                "spin-around": {
                    "0%": {
                        transform: "translateZ(0) rotate(0)",
                    },
                    "15%, 35%": {
                        transform: "translateZ(0) rotate(90deg)",
                    },
                    "65%, 85%": {
                        transform: "translateZ(0) rotate(270deg)",
                    },
                    "100%": {
                        transform: "translateZ(0) rotate(360deg)",
                    },
                },
                "shimmer-slide": {
                    to: {
                        transform: "translate(calc(100cqw - 100%), 0)",
                    },
                },
                "floating": {
                    '0% 100%': {transform: "translateY(0)"},
                    '50%': {transform: "translateY(-10px)"}
                },
                "appear": {
                    from: {
                        opacity: "0%",
                        transform: "translateY(50px)",
                        scale: "0.95",
                    },
                    to: {
                        opacity: "100%",
                        transform: "translateY(0)",
                        scale: "1",
                    }
                }
            },
        },
    },
    plugins: [],
};
export default config;
