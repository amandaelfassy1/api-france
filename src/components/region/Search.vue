<template>
    <form id="form" action="" @submit='HandleSubmit'>     
      <h1>Région</h1>
      <ion-item>
        <ion-label position="floating">Région :</ion-label>
        <ion-select  id="select" placeholder="Séléctionner" v-model="selectedRegion" >
          <ion-select-option v-for="(value, key) in regions" v-bind:key="key" v-bind:value="value.code">
            {{ value.code }} - {{ value.nom }}
          </ion-select-option>
        </ion-select>
      </ion-item>
      <ion-button expand="full" type="submit" color="secondary">Rechercher</ion-button>
      <!-- <ion-title>Effectuez une recherche pour afficher les communes du départment sélectionné.</ion-title> -->
    </form>
</template>

<script>
import axios from 'axios';
import { IonButton, IonSelect, IonItem, IonLabel, IonSelectOption, alertController } from "@ionic/vue";

export default  {
  name: 'Search',
  components: {
    IonButton, IonSelect, IonItem, IonLabel, IonSelectOption , 
  },
  data(){
    return{
    region: "",
    regions: {},
    selectedRegion: null
    }
  },
  
  mounted(){   
        axios
          .get(
           `https://geo.api.gouv.fr/regions/`
          )
          .then((response)=>{
            console.log(response)
            this.regions=response.data;
          })
},
methods:{
  HandleSubmit(e){   
        e.preventDefault();
        console.log(this.selectedRegion)
        if (!this.selectedRegion) {
            return alertController.create({
                color: "secondary",
                message: 'Veuillez remplir le champ',
                duration: 2000
        }).then((alert) => {
          return alert.present();
        });
    }
    else{
        this.$emit('regions', this.selectedRegion)
    }
    },
}

}
</script>
<style>
.alert-button.sc-ion-alert-md{
  color :black;
}
h1{
  color: black  !important;
  font-weight: bold;
  text-align: center;
  padding: 10px;
}
</style>