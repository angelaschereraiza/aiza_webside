<template>
  <v-app>
    <img alt="Aiza GmbH Logo" src="./assets/aiza_logo.png" width="300" height="168.75" />
    <hr />
    <v-main>
      <div class="container">
        <h2>Die Aiza GmbH mit Sitz in Zollikofen ist spezialisiert auf die Entwicklung von massgeschneiderten Webseiten für Unternehmen. Das Hauptaugenmerk liegt auf der Entwicklung von hoch skalierbaren, global effizienten und sicheren Webseiten. Projekterfahrung und fundierte Kenntnisse bestehen in den folgenden Technologien:</h2>
      </div>
    </v-main>
    <v-card flex="row" shaped class="rounded-card">
      <div class="icon-div"><img class="icon" alt="Go Logo" src="./assets/icon_go.png" width="100" height="136"/></div>
      <div class="icon-div"><img class="icon" alt="Angular Logo" src="./assets/icon_angular.png" width="129" height="136"/></div>
      <div class="icon-div"><img class="icon" alt="Vue.js Logo" src="./assets/icon_vue.png" width="152" height="130"/></div>
      <div class="icon-div"><img class="icon" alt="RESTful API Logo" src="./assets/icon_rest.png" width="136" height="136"/></div>
      <div class="icon-div"><img class="icon" alt="Kubernetes Logo" src="./assets/icon_kubernetes.png" width="136" height="136"/></div>
      <div class="icon-div"><img class="icon" alt="Gitlab Logo" src="./assets/icon_gitlab.png" width="147" height="136"/></div>
    </v-card>
    <v-col class="footer">
      <v-row justify="center">
        <v-col cols="auto" class="address">
          <h2 class="address-text">Aiza GmbH</h2>
          <h3 class="address-text">Bernstrasse 159</h3>
          <h3 class="address-text">3052 Zollikofen</h3>
          <h3 class="address-text">angela.scherer@aiza.ch</h3>
          <h3 class="address-text">+41 79 197 21 53</h3>
        </v-col>
      </v-row>
    </v-col>
  </v-app>
</template>

<style lang="sass" scoped>
v-app 
  background: white

hr
  border: none
  height: 8px
  background: #276fff
  margin-bottom: 40px
  margin-left: 16px
  margin-right: 16px
  &:before
    height: 8px
    width: 20%
    content: ''
    position: absolute
    background: black !important

.container
  margin: 16px !important
  color: black
  margin-bottom: 80px !important

.rounded-card
  border-radius: 200px
  background: #002775


.icon-div
  width: 150px

.icon 
  margin-right: 40px

.address
  margin: 40px 12px 12px 0

.address-text
  color: black
  margin: 0 !important
  text-decoration: noney
</style>
