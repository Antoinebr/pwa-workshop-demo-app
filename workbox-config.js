module.exports = {
    globDirectory: './dist/',
    globPatterns: [
      '**/**/*.png',
      '**/*.{js,css}',
      '**/index.html'
    ],

    runtimeCaching: [

        {
            urlPattern: new RegExp('https://api.cryptonator.com/api/'),
            handler: 'networkFirst'
        }, 

        {
            urlPattern: new RegExp('(https://fonts.googleapis.com|https://unpkg.com)'),
            handler: 'staleWhileRevalidate'
        },


        {
            urlPattern: new RegExp('https://cdn.worldvectorlogo.com/'),
            handler: 'cacheFirst'
        },
        

    ],
   

    swDest: './dist/sw.js',
    clientsClaim: true,
    skipWaiting: true
  };