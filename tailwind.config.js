module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
       },
      backgroundImage: {
        'hero-lg': "url('/src/storege/images/login-background.jpg')",
        'HDE': "url('/src/storege/images/cta-logo-one.svg')"
        
    },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}