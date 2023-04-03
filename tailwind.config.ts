//@ts-ignore
import defaultTheme from "tailwindcss/src/public/default-theme";

export default {
  theme: {
    container: {
      center: true,
      padding: '15px',
      screens: {
        ...defaultTheme.screens,
        xl: "1140px",
        '2xl': "1140px",
      }
    },
    extend: {
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Golos Text"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        '2xs': '10px',
        xs: '12px',
        sm: '13px',
        base: '14px',
        xl: '16px',
        '2xl': '18px',
        '3xl': '20px',
        '4xl': '28px'
      },
      colors: {
        appBg: '#fff',
        primary: {
          DEFAULT: '#286d97',
          hover: '#007ad9',
          active: '#286d97'
        },
        secondary: {
          DEFAULT: '#e1e4e5',
          hover: 'black',
          active: 'black'
        },
        // ternary: {
        //   DEFAULT: 'var(--ternary-color)',
        //   hover: 'red',
        //   active: 'red'
        // },
        error: {
          DEFAULT: '#ea4848'
        },
        danger: {
          DEFAULT: '#ea4848'
        },
        textColor: {
          DEFAULT: '#596d7b',
          title: '#214866',
          secondary: '#1c3a56',
          label: ''
        },
        block: {
          DEFAULT: '#f2f5f7',
          secondary: 'var(--bg-secondary-block)'
        },
        borderColor: {
          DEFAULT: '#c1d1df',
          focus: '#80c7ff'
        },
      },
      keyframes: {
        jump: {
          '0%': {transform: 'translateY(0)'},
          '16%': {transform: 'translateY(-5px)'},
          '33%': {transform: 'translateY(0)'}
        },
        spin: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg))'}
        }
      },
      animation: {
        jump: 'jump 3s infinite',
        spin: 'spin 1s infinite',
      },
    }
  }
}
