<template>
  <ion-page>
    <ion-header color="secondary">
      <ion-toolbar color="secondary">
        <ion-title>ApiFrance</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" color="primary">
    
      <div id="container">
        <svg viewBox="46 0 400 150">
          <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
          <text width="500">
            <textPath xlink:href="#curve">
              Vous rêvez d'être fort en géographie ? 
            </textPath>
          </text>
        </svg>
      <img class="img" src="../../public/assets/image/france.jpg" alt="">
       <svg class="rotate" viewBox="46 0 400 150">
          <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
          <text width="500">
            <textPath xlink:href="#curve">
              C'est possible ! Avec ApiFrance !!!
            </textPath>
          </text>
        </svg>
    </div>
     
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Home',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>
<style scoped>
img{
  width:90%;
  text-align: center;
}
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 15px;
}
path {
  fill: transparent;
}

text {
  fill: #e62053;
  font-size: 24px;
  font-weight: bold;
}
.rotate{
  transform: rotate(180deg);
}
</style>