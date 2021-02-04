<template>
      <div v-if="allData">
        <ion-title color="success">{{allData.length}} {{ allData.length == 1 ? 'résultat' : 'résultats' }}</ion-title>
         <ion-card color="tertiary" v-for="commune in allData" v-bind:key="commune.code">
            <ion-card-header>
                <ion-card-title>{{commune.nom}}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-card-subtitle>Departement : {{commune.codeDepartement}}</ion-card-subtitle>
                <ion-card-subtitle>Population : {{commune.population}}</ion-card-subtitle>
                <ion-card-subtitle>Code postaux : {{commune.codesPostaux.join('-')}}</ion-card-subtitle>
                <ion-card-subtitle>Region : {{commune.codeRegion}}</ion-card-subtitle>
            </ion-card-content>
       </ion-card>
    </div>  
</template>

<script>
// import ExploreContainer from '@/components/ExploreContainer.vue';
import {IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle}  from '@ionic/vue';
export default  {
  name: 'Search',
  components: {  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle },
  props : ['allData']
}
</script>
<style>
ion-card-title {
    color: black  !important;
    font-weight: bold;
}
ion-card-subtitle {
    color: black  !important;
}
.alert-button.sc-ion-alert-md{
  color :black;
}
</style>