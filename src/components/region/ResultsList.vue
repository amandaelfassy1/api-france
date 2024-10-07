<template>
      <div v-if="allData">
          <ion-title color="success">{{allData.length}} {{ allData.length == 1 ? 'résultat' : 'résultats' }}</ion-title>
         <ion-card  color="tertiary" v-for="departement in allData" v-bind:key="departement.code">
            <ion-card-header>
                <ion-card-subtitle>{{departement.nom}}</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
                <ion-card-title>{{departement.code}}</ion-card-title>
            </ion-card-content>
       </ion-card>
    </div>  
</template>
<script>
import {IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle}  from '@ionic/vue';

export default  {
  name: 'ResultsList',
  components: { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle },
  props : ['allData']
}
</script>

<style scoped>
ion-card-title {
    color: black  !important;
    font-weight: bold;
}
ion-card-subtitle{
  color: black !important;
  text-align: center;
}

</style>  