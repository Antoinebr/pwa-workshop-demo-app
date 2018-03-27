fetch('https://api.cryptonator.com/api/ticker/BTC-EUR')
      .then( (response) => response.json() )
      .then( (res) => {


        
          document.querySelector('h1 span').innerHTML = Math.round(res.ticker.price,2)+'€';

       }).catch( (err) => console.log(err) );
