
Vue.component('my-component', {
    template : `
  <div>
  
    <md-toolbar class="md-theme-default header">
      <h1 class="md-title head-title">PWA demo</h1>
      <i class="material-icons notification-icon" id="notification-icon" v-if="showNotification" @click="getPush()">notification_important</i>
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
  
      },


      getPush(){
        
        requestNotifications()

      }


    },

    computed : {

      showNotification(){
        
        // https://developer.mozilla.org/en-US/docs/Web/API/Notification/permission
        
        if( !("Notification" in window) )  return false;

        // If is safari 
        if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ) return false; 

        return (Notification.permission === "default" ) ? true : false;

      }


    },
    created: function () {
     
      this.getPosts();
      
    }
  
  });

  