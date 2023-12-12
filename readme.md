Esercizio di oggi: Vue Slider
nome repo: vue-slider
Descrizione: Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
Consigli del giorno: - regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto! - il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe :occhiolino:

scaffolding

1 - prendere createApp da vue
2 - inserire all'interno del data l'array di film
3 - creare variabile contatore per selezionare l'indice dell'array
4 - creare funzione che permetta di variare l'immagine attiva 
5 - collegare la funzione ai pulsanti
6 - rendere visibile nella thumbnail l'immagine attiva
