module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode:'class',
    theme: {
      extend: {
        screens:{
          "other":{'min': '340px', 'max': '1200px'}
        },
        colors:{
          darkbg:'#0a0a0a'
        }
      },
    },
    plugins: [],
  }