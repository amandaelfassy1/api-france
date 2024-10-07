<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar color="secondary" slot="bottom">

        <ion-tab-button tab="tab4" href="/home">
          <ion-icon name="home"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab1" href="/commune">
          <ion-icon name="compass"></ion-icon>
          <ion-label>Commune</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/departement">
          <ion-icon name="navigate"></ion-icon>
          <ion-label>Departement</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/region">
          <ion-icon name="locate"></ion-icon>
          <ion-label>Region</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
      <!-- Ajout de IonRouterOutlet ici -->
      <ion-router-outlet></ion-router-outlet>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
import { add } from "ionicons/icons";
import { addIcons } from "ionicons";

addIcons({
  "ios-add": add.ios,
  "md-add": add.md
});

export default {
  name: 'MainTabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  }
}
</script>
