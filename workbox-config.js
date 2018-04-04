module.exports = {
    globDirectory: './dist/',
    globPatterns: [
      '**/**/*.{png,svg}',
      '**/*.{js,css}',
      '**/index.html'
    ],


    runtimeCaching: [

        {
            urlPattern: new RegExp('(https://fonts.googleapis.com|https://unpkg.com)'),
            handler: 'staleWhileRevalidate'
        },


        {
            urlPattern: new RegExp('https://api.cryptonator.com/api/'),
              handler: 'networkFirst'
       }, 

    ],

    swDest: './dist/sw.js',
    clientsClaim: true,
    skipWaiting: true
  };