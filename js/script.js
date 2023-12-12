const {createApp} = Vue

createApp({

    data(){
        return{
            // array giochi inserito in data 
             slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            activeImg: 0,
            button_disable: false,
        }
    },
    methods: {
        // funzione immagine successiva 
        nextImg(){
            clearInterval(autoplay);
            this.autoPlay();
            if(this.activeImg == this.slides.length-1){
                this.activeImg = 0;
            }
            else{
                this.activeImg++;
            }
        },
        // funzione immagine precedente 
        prevImg(){
            clearInterval(autoplay);
            this.autoPlay();
            if(this.activeImg == 0){
                this.activeImg = this.slides.length-1;
            }
            else{
                this.activeImg--;
            }
        },
        autoPlay (){
            this.button_disable = true
            autoplay = setInterval(()=>{
                this.nextImg()
            }, 3000)
        },
        autoStop (){
            clearInterval(autoplay)
            
        },
        buttonStop(){
            this.button_disable = false
            this.autoStop()
        },
        clickThumb(index){
            this.activeImg = index
            this.autoStop()
            this.autoPlay()
        }
    }
}).mount('#app');
