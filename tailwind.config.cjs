/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#6B7280',
        tertiary: '#F3F4F6',
        'black-100': '#111827',
        'black-200': '#1F2937',
        'white-100': '#f3f3f3',
        flashWhite: '#FAFBFC',
        platinum: '#E5E7EB',
        platinumLight: '#F3F4F6',
        timberWolf: '#374151',
        taupe: '#6B7280',
        silver: '#9CA3AF',
        dim: '#4B5563',
        battleGray: '#6B7280',
        french: '#D1D5DB',
        night: '#111827',
        jet: '#1F2937',
        jetLight: '#FFFFFF',
        jetGray: '#6B7280',
        richBlack: '#111827',
        eerieBlack: '#111827',
        onyx: '#374151',
        brand: '#1DBF53',
        brandLight: '#EEFBF3',
        brandDark: '#16A34A',
      },
      boxShadow: {
        card: '0px 4px 24px rgba(0,0,0,0.06), 0px 2px 6px rgba(0,0,0,0.03)',
        cardLight: '0px 19px 38px #eaeaec, 0px 15px 12px #eaeaec',
      },
      screens: {
        xs: '450px',
        sm: '640px',
        md: '768px',
        xmd: '900px',
        lg: '1025px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },
      backgroundImage: {
        about:
          'linear-gradient(165deg, rgba(250,251,252,1) 100%, rgba(238,251,243,1) 100%)',
        experience:
          "linear-gradient(135deg, rgba(238,251,243,0.5) 60%, rgba(29,191,83,0.08) 100%),url('/src/assets/backgrounds/white-abstract.png')",
        experienceLight:
          'linear-gradient(137deg, rgba(250,251,252,0.95) 60%, rgba(29,191,83,0.05) 60%)',
        hero: 'linear-gradient(135deg, rgba(255,255,255,0.95) 60%, rgba(238,251,243,1) 60%)',
        'hero-mobile':
          'linear-gradient(137deg, rgba(255,255,255,0.95) 60%, rgba(238,251,243,1) 60%)',
        tech: "linear-gradient(165deg, rgba(238,251,243,0.95) 100%, rgba(29,191,83,0.1) 100%), url('/src/assets/backgrounds/nairobi.png')",
      },
      fontFamily: {
        arenq: ['Arenq'],
        beckman: ['Beckman'],
        mova: ['Mova'],
        overcameBold: ['Overcame Bold'],
        overcameOutline: ['Overcame Outline'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
