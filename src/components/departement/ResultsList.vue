<template>
      <div v-if="allData">
        <ion-title color="success">{{allData.length}} {{ allData.length == 1 ? 'résultat' : 'résultats' }}</ion-title>
         <ion-card color="tertiary" v-for="commune in allData" v-bind:key="commune.code">
            <ion-card-header>
                <ion-card-title>{{commune.nom}}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-card-subtitle><strong>Département : </strong>  {{commune.codeDepartement}}</ion-card-subtitle>
                <ion-card-subtitle><strong>Population : </strong> {{commune.population}}</ion-card-subtitle>
                <ion-card-subtitle><strong>Code postaux : </strong> {{commune.codesPostaux.join('-')}}</ion-card-subtitle>
                <ion-card-subtitle><strong>Region : </strong> {{commune.codeRegion}}</ion-card-subtitle>
            </ion-card-content>
       </ion-card>
    </div>  
</template>

<script>
// import ExploreContainer from '@/components/ExploreContainer.vue';
import {IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle}  from '@ionic/vue';
export default  {
  name: 'SearchComponent',
  components: {  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle },
  props : ['allData']
}
</script>
<style>
ion-card-title {
    color: black  !important;
    font-weight: bold;
    text-align: center;
}
ion-card-subtitle {
    color: black  !important;
    padding-bottom: 10px;
}
.alert-button.sc-ion-alert-md{
  color :black;
}
ion-title{
  text-align: center;
  padding: 10px;
}
</style>