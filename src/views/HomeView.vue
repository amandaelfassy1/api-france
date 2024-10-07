<template>
  <ion-page>
    <!-- En-tête de la page -->
  
    <!-- Contenu principal -->
    <ion-content :fullscreen="true" color="white">
      <div id="container">
        <div class="content">
          <img class="img" src="../../public/assets/image/france1.jpg" alt="Carte de France" />
          <h1  color="secondary">Vous rêvez d'être fort en géographie ? </h1>
          <h5  color="secondary"> C'est possible ! Avec ApiFrance !</h5>
        </div>

        <div class="description">
        <div class="button-container">
          <ion-button router-link="/commune" expand="block" color="tertiary" class="cta-button">
            Communes
          </ion-button>
        </div>
        
        <div class="button-container">
          <ion-button router-link="/departement" expand="block" color="tertiary" class="cta-button">
            Départements
          </ion-button>
        </div>
        
        <div class="button-container">
          <ion-button router-link="/region" expand="block" color="tertiary" class="cta-button">
            Régions
          </ion-button>
        </div>
      </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
 
  IonContent,
  IonButton
} from "@ionic/vue";

export default {
  name: "HomeView",
  components: {  IonContent, IonPage, IonButton },
};
</script>

<style scoped>
/* Styles généraux */
ion-header {
  --background: var(--ion-color-primary);
  --color: white;
}

h1{
  font-size: 36px;
  font-weight: bold;
  text-align: center;
}

#container {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 20px;
}

.content {
  margin-bottom: 30px;
}

.curve {
  margin-bottom: 15px;
}

.rotate {
  transform: rotate(180deg);
  margin-top: 20px;
}

path {
  fill: transparent;
}

text {
  fill: #e62053;
  font-size: 22px;
  font-weight: 600;
}

img {
  width: 85%;
  /* margin: 25px auto; */
  border-radius: 12px;
  /* box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15); */
  transition: transform 0.3s ease-in-out;
}

img:hover {
  transform: scale(1.08);
}

/* Description et boutons */
.description h6 {
  color: #333;
  font-weight: bold;
  font-size: 16px;
  margin: 10px 0;
}

.cta-button {
  margin-top: 10px;
  font-weight: 600;
  font-size: 12px;
  --border-radius: 20px;
  --padding-start: 12px;
  --padding-end: 12px;
}
.description {
  display: flex;
  align-items: center; 
  justify-content: center; 
  padding: 20px;
  gap: 10px; 
}

.button-container {
  width: 100%;
  max-width: 400px;
}


/* Responsivité pour écrans larges */
@media (min-width: 768px) {
  #container {
    max-width: 600px;
    margin: auto;
  }

  img {
    width: 60%;
  }

  .description h6 {
    font-size: 18px;
  }
}
</style>
