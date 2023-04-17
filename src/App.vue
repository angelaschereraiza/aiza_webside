<template>
  <v-app>
    <img class="logo" alt="Aiza GmbH Logo" src="./assets/aiza_logo.png" width="300" height="168.75" />
    <hr />
    <v-row justify="start">
      <div class="container">
        <h3>Die Aiza GmbH mit Sitz in Zollikofen ist spezialisiert auf die Entwicklung von massgeschneiderten Webseiten für Unternehmen. Das Hauptaugenmerk liegt auf der Entwicklung von hoch skalierbaren, global effizienten und sicheren Webseiten. Projekterfahrung und fundierte Kenntnisse bestehen in den folgenden Technologien:</h3>
      </div>
    </v-row>
    <v-row justify="center" class="images">
      <img class="icon" alt="Go Logo" src="./assets/icon_go.png" width="100" height="136"/>
      <img class="icon" alt="Angular Logo" src="./assets/icon_angular.png" width="129" height="136"/>
      <img class="icon" alt="Vue.js Logo" src="./assets/icon_vue.png" width="152" height="130"/>
      <img class="icon" alt="RESTful API Logo" src="./assets/icon_rest.png" width="136" height="136"/>
      <img class="icon" alt="Kubernetes Logo" src="./assets/icon_kubernetes.png" width="136" height="136"/>
      <img class="icon" alt="Gitlab Logo" src="./assets/icon_gitlab.png" width="147" height="136"/>
    </v-row>
    <v-row justify="start">
      <div class="container">
        <h3>Bei Interesse für einen Projektauftrag wenden Sie sich bitte an:</h3><br>
        <h2 class="address-text">Aiza GmbH</h2>
        <h3 class="address-text">Bernstrasse 159</h3>
        <h3 class="address-text">3052 Zollikofen</h3>
        <h3 class="address-text">angela.scherer@aiza.ch</h3>
        <h3 class="address-text">+41 79 197 21 53</h3>
      </div>  
    </v-row>   
  </v-app>
</template>

<style lang="sass" scoped>

.logo
  margin-left: 16px

hr
  border: none
  height: 8px
  background: #276fff
  margin-bottom: 40px
  margin-left: 16px
  margin-right: 16px
  &:before
    height: 8px
    width: 288px
    content: ''
    position: absolute
    background: black !important

.images 
  margin: -30px 80px

.container
  margin: 60px 80px 20px 80px

.icon 
  margin-top: 24px
  margin-right: 40px

</style>
