module.exports = {
    globDirectory: './dist/',
    globPatterns: [
      '**/*.{js,css}',
      '**/index.html'
    ],

    runtimeCaching: [

        {
            urlPattern: new RegExp('https://api.cryptonator.com/api/'),
            handler: 'networkFirst'
        }, 


        {
            urlPattern: new RegExp('https://placeimg.com'),
            handler: 'networkFirst',
            options: {
                // Only cache 10 images.
                cacheName: 'images',
                expiration: {
                  maxEntries: 10,
                },
              },
        },
     



    ],
   

    swDest: './dist/sw.js',
    clientsClaim: true,
    skipWaiting: true
  };