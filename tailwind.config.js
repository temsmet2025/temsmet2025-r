/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/components/Navbar/*.{js,ts,jsx,tsx}",
    "./src/components/Carousel/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
  	fontWeight: {
  		thin: '100',
  		hairline: '100',
  		extralight: '200',
  		light: '300',
  		normal: '400',
  		medium: '500',
  		semibold: '600',
  		bold: '700',
  		extrabold: '800',
  		'extra-bold': '800',
  		black: '950'
  	},
  	extend: {
  		keyframes: {
  			'marquee-start': {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			},
  			'marquee-loop': {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			}
  		},
  		animation: {
  			'marquee-start': 'marquee-start 30s linear 1',
  			'marquee-loop': 'marquee-loop 30s linear infinite',
  			'marquee-start-then-loop': 'marquee-start 30s linear 1, marquee-loop 30s linear infinite 30s'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [
    flowbite.plugin(),
      require("tailwindcss-animate")
],
};
