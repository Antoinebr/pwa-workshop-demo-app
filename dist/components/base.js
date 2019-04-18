Vue.component('my-component', {
  template: `
  <div>
  
    <md-toolbar class="md-theme-default header">
      <h1 class="md-title head-title">PWA demo</h1>

      <addToHomeScreen/>

      <i class="material-icons notification-icon" id="notification-icon" v-if="showNotification" @click="getPush()">notification_important</i>

    </md-toolbar>
  
    <coin :crypto="crypto"></coin>
  
  </div>
  `,

  data() {
    return {
      crypto: null
    }
  },
  methods: {

    async getPosts() {

      const data = await fetch(`https://api.cryptonator.com/api/ticker/BTC-EUR`);

      if (!data.ok) {
        const errorText = await data.text();
        throw new Error(errorText);
      }

      this.crypto = await data.json();

    },


    getPush() {

      requestNotifications()
        .catch(e => {
          console.log("Push notification error : ", e);
        });

    }


  },

  computed: {

    showNotification() {

      // https://developer.mozilla.org/en-US/docs/Web/API/Notification/permission

      if (!("Notification" in window)) return false;

      // If is safari 
      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) return false;

      return (Notification.permission === "default") ? true : false;

    }


  },
  created: function () {

    this.getPosts();

  }

});