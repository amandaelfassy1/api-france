<template>
    <form id="form" action="" @submit='HandleSubmit'>  
      <h1>Département</h1>      
      <ion-item>
        <ion-label position="floating">Département :</ion-label>
        <ion-select color="secondary" id="select" placeholder="Séléctionner" v-model="selectedDepartement" >
          <ion-select-option v-for="(value, key) in departements" v-bind:key="key" v-bind:value="value.code">
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
  name: 'SearchComponent',
  components: {
    IonButton, IonSelect, IonItem, IonLabel, IonSelectOption , 
  },
  data(){
    return{
    departement: "",
    departements: {},
    selectedDepartement: null
    }
  },
  
  mounted(){   
        axios
          .get(
           `https://geo.api.gouv.fr/departements/`
          )
          .then((response)=>{
            console.log(response)
            this.departements=response.data;
          })
},
methods:{
  HandleSubmit(e){   
        e.preventDefault();
        console.log(this.selectedDepartement)
        if (!this.selectedDepartement) {
            return alertController.create({
                color: "secondary",
                message: 'Veuillez remplir le champ',
                duration: 2000
        }).then((alert) => {
          return alert.present();
        });
    }
    else{
      this.$emit('departement', this.selectedDepartement)
    }
  },
    
}

}
</script>
<style >

.alert-button.sc-ion-alert-md {
  color: black !important;
}
h1{
  color: black  !important;
  font-weight: bold;
  text-align: center;
  padding: 10px;
}
</style>