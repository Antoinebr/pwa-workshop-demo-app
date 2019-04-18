module.exports = {
    globDirectory: './dist/',
    globPatterns: [
      '**/**/*.{png,svg}',
      '**/*.{js,css}',
      '**/index.html'
    ],
    swSrc: './sw.js',   
    swDest: './dist/sw.js'
  };