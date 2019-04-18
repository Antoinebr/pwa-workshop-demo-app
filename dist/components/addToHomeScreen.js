Vue.component('addToHomeScreen', {

    template: `
        <i class="material-icons add_to_home_screen-icon" 
            v-show="deferredPrompt"
            @click="triggerAskToInstall()"
        >
        
        add_to_home_screen</i>
    
    `,
    data() {
        return {
            deferredPrompt: null
        }
    },
    methods: {

        async triggerAskToInstall() {

            console.log('Ask to install ! ');

            if (this.deferredPrompt === null) {
                return false;
            }

            // The user has had a positive interaction with our app and Chrome
            // has tried to prompt previously, so let's show the prompt.
            this.deferredPrompt.prompt().catch(console.log);

            // Follow what the user has done with the prompt.
            const choiceResult = await this.deferredPrompt.userChoice.catch(console.log);

            // We no longer need the prompt.  Clear it up.
            this.deferredPrompt = null;

            return choiceResult.outcome

        },

        listenForA2HSevent(e) {

            console.log('[PWA] beforeinstallprompt Event fired and stashed');
 
            e.preventDefault();

            // Stash the event so it can be triggered later.
            this.deferredPrompt = e;

        }


    },

    computed: {



    },
    created: function () {

        window.addEventListener('beforeinstallprompt', this.listenForA2HSevent);

    }

});