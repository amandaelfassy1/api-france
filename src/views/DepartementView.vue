<template>
  <ion-page>
 <ion-header color="secondary">
      <ion-toolbar color="secondary">
        <ion-title>ApiFrance</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" color="white">
      <div>
         <Search  @departement="searchDepartement"></Search>
         <Results v-bind:allData="infoDepartement"></Results>
    </div>
     
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, alertController } from '@ionic/vue';
import { defineComponent } from 'vue';
import Search from '@/components/departement/SearchComponent';
import Results from '@/components/departement/ResultsList';
import axios from 'axios'

export default defineComponent({
  name: 'DepartementViews',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, Search, Results, IonPage },
  data(){
    return{
      infoDepartement:null
    }
  },
  methods: {
    searchDepartement(data){
      console.log(data)
        axios
          .get(
           `https://geo.api.gouv.fr/departements/${data}/communes`
          )
          .then((response)=>{
            console.log(response)
            this.infoDepartement=response.data;
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
<style scoped>

</style> 
