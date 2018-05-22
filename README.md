# pwa-workshop-demo-app

## Install 

```npm install```

## Build 

The build process will generate the service worker 


``` 
npm run build 
```


## Caching strategies 


```Javascript

runtimeCaching: [

  {
      urlPattern: new RegExp('(https://fonts.googleapis.com|https://unpkg.com)'),
      handler: 'staleWhileRevalidate'
  },


  {
      urlPattern: new RegExp('https://api.cryptonator.com/api/'),
        handler: 'networkFirst'
 }, 

]
    
```
