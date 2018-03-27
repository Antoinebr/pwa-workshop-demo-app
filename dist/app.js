






Vue.use(VueMaterial.default)

new Vue({
  el: '#app'
})



Vue.component('my-component', {
  template : `
<div>

  <md-toolbar class="md-theme-default">
    <h1 class="md-title head-title">My cryptos</h1>
  </md-toolbar>

  <coin :crypto="crypto"></coin>

</div>
`,

  data(){
    return {
      crypto : null
    }
  },
  methods : {

    getPosts(){
      

      fetch('https://api.cryptonator.com/api/ticker/BTC-EUR')
        .then( (response) => response.json() )
        .then( (res) => {

          this.crypto = res;
          //this.btcPrice = Math.round(res.ticker.price,2)+'€';

         }).catch( (err) => console.log(err) );

    }
  },
  created: function () {
   
    this.getPosts();
    
  }

});




