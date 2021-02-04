<template>
  <ion-page>
 <ion-header color="secondary">
      <ion-toolbar color="secondary">
        <ion-title>ApiFrance</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" color="primary">
      
      <div id="container">
        <Search @commune="searchCommune" @code="searchByCode"></Search>
        <Results v-bind:allData="this.allInformation"></Results>
    </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, alertController } from '@ionic/vue';
import { defineComponent } from 'vue';
import Search from '@/components/commune/Search';
import Results from '@/components/commune/Results';
import axios from 'axios';

export default defineComponent({
  name: 'Commune',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, Search, Results, IonPage },
  data(){
    return{
       allInformation : null,
    }
   
  },
  methods:{
    searchCommune(search){
        console.log(search)
        axios
          .get(
            `https://geo.api.gouv.fr/communes?nom=${search}&boost=population&fields=population,departement,codesPostaux,region`
          )
          .then((response)=>{
            console.log(response)
            if(!response.data.length){
               console.log(response.data.length)
               return alertController.create({
                color: "secondary",
                message: 'le champ saisi est incorrect',
               duration: 1000
            }).then((alert) => {
                return alert.present();
              });
            }
            else{
              this.allInformation=response.data
            }
          })
    },
    searchByCode(zip){
      axios
        .get(`https://geo.api.gouv.fr/communes?codePostal=${zip}&boost=population&fields=population,departement,codesPostaux,region`)
        .then((response)=>{
          console.log(response)
          if(!response.data.length){
               return alertController.create({
                color: "secondary",
                message: 'le champ saisi est incorrect',
                duration: 2000
            }).then((alert) => {
            return alert.present();
            });
            }
            else{
              this.allInformation=response.data
            }
            console.log(response)
          })
           .catch(() => {
             return alertController.create({
                color: "secondary",
                message: 'La requête a échoué',
                duration: 2000
            })
            .then((alert) => {
            return alert.present();
          });
        });
    }
  }
  
})
</script>
