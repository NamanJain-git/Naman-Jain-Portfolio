export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 30px 80px rgba(139,92,246,0.18)',
        soft: '0 24px 80px rgba(15,23,42,0.35)',
      },
      colors: {
        surface: '#131C31',
        section: '#0F172A',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top right, rgba(59,130,246,0.22), transparent 25%), radial-gradient(circle at bottom left, rgba(168,85,247,0.18), transparent 22%)',
      },
    },
  },
  plugins: [],
};
