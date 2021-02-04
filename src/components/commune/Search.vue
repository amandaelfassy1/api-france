<template>
  <div id="container">
    <!-- <ion-item color="tertiary">
          <ion-title>Rechercher via le code postal les communes correspondantes <br> ou recherchez une ville <br> pour afficher les communes du même nom.</ion-title>
    </ion-item> -->
    <form id="form" action="" @submit='HandleSubmit'> 
        <ion-title>Commune</ion-title>
       <ion-item color="primary">
          <ion-label position="floating" color="success">Code postal ou ville </ion-label>
          <ion-input color="success" v-model="search" @input="search = $event.target.value"></ion-input>
        </ion-item>
        <ion-button type="submit" expand="full" color="secondary">Rechercher</ion-button>
    </form>
  </div>
</template>

<script>
import { IonButton, IonItem, IonInput, IonLabel, alertController } from "@ionic/vue";
export default {
components: {
    IonButton, IonItem, IonInput, IonLabel, 
  },    
  name: 'Search',
  data(){
    return{
     commune:'',
     code:'',
     search:null,
     result: null
    }
  },
  methods:{
        HandleSubmit(e){
          e.preventDefault();
        if (!this.search) {
            return alertController.create({
                color: "secondary",
                message: 'Veuillez remplir le champ',
                duration: 2000
        }).then((alert) => {
          return alert.present();
        });
      }
      if(/^(?:[0-8]\d|9[0-8])\d{3}$/.test(this.search)){
          this.$emit("code", this.search)
          console.log("premier")
      }
      else{
        this.$emit("commune", this.search)
        console.log("deuxieme")
      }
    }
  },

}
</script>
<style>

</style>
