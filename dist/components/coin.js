Vue.component('coin', {

    template : `
        <div>
        
            <md-card class="card-main"  v-if='crypto !== null' >
                <md-card-header class="row">

                        <md-card-media class="col-xs-4 card-icon u-mts">
                            <img src="/img/logos/bitcoin.svg">
                            <div class="md-title u-txtCenter"> {{crypto.ticker.base}} </div>
                        </md-card-media>

                            <md-card-header-text class="col-xs-8">
                            
                            
                                <span class="price"> {{ Math.round(crypto.ticker.price,2) }} € </span> 
                            
                        
                            </md-list>

                        </md-card-header-text>

                </md-card-header>
            </md-card>
        
        </div>
  `,
  
    props : ['crypto']
  
});
  