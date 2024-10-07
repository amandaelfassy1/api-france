<template>
  <ion-page>
   <ion-header color="secondary">
      <ion-toolbar color="secondary">
        <ion-title>ApiFrance</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" color="white">
      <div>
         <Search  @regions="searchRegion"></Search>
         <Results v-bind:allData="infoRegion"></Results>
    </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, alertController } from '@ionic/vue';
import { defineComponent } from 'vue';
import Search from '@/components/region/Search';
import Results from '@/components/region/Results';
import axios from 'axios'

export default defineComponent({
  name: 'Region',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, Search, Results, IonPage },
  data(){
    return{
      infoRegion:null
    }
  },
  methods: {
    searchRegion(data){
      console.log(data)
        axios
          .get(
           `https://geo.api.gouv.fr/regions/${data}/departements`
          )
          .then((response)=>{
            console.log(response)
            this.infoRegion=response.data;
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
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 15px;
}
</style>
