<template>
  <v-app class="background">
    <img class="logo" alt="Aiza GmbH Logo" src="./assets/aiza_logo.png" width="231.11" height="130" />
    <hr />
    <v-row>
      <v-card class="half-card background">
        <v-row justify="start">
          <div class="container">
            <p class="block">Die Aiza GmbH, gegründet am 13.04.23 und mit Sitz in Zollikofen, ist spezialisiert auf die Entwicklung von massgeschneiderten Webapplikationen für Unternehmen. Das Unternehmen besteht derzeit aus einer Person, Angela Scherer. Das Hauptaugenmerk liegt auf der Entwicklung von hochskalierbaren, global effizienten und sicheren Webapplikationen auf Basis von Open Source Software. Projekterfahrung und vertiefte Kenntnisse sind in folgenden Technologien vorhanden:</p>
          </div>
        </v-row>
        <v-row justify="center" class="images">
          <v-hover v-slot="{ isHovering, props }">
            <v-card class="img-card" v-bind="props" :width="150" :height="100" href="https://go.dev" target="_blank">
              <v-img alt="Go Logo" src="./assets/icon_go.png"/>
              <v-overlay :model-value="isHovering" contained class="align-center justify-center">
                <v-btn>Golang</v-btn>
              </v-overlay>
            </v-card>
          </v-hover>
          <v-hover v-slot="{ isHovering, props }">
            <v-card class="img-card" v-bind="props" :width="150" :height="100" href="https://angular.io/" target="_blank">
            <v-img alt="Angular Logo" src="./assets/icon_angular.png"/>
            <v-overlay :model-value="isHovering" contained class="align-center justify-center">
              <v-btn>Angular</v-btn>
            </v-overlay>
            </v-card>
          </v-hover>
          <v-hover v-slot="{ isHovering, props }">
            <v-card class="img-card" v-bind="props" :width="150" :height="100" style="padding-top: 4px" href="https://vuejs.org" target="_blank">
              <v-img alt="Vue.js Logo" src="./assets/icon_vue.png"/>
              <v-overlay :model-value="isHovering" contained class="align-center justify-center">
                <v-btn>Vue.js</v-btn>
              </v-overlay>
            </v-card>
          </v-hover>
          <v-hover v-slot="{ isHovering, props }">
            <v-card class="img-card" v-bind="props" :width="150" :height="100" href="https://restfulapi.net" target="_blank">
            <v-img alt="RESTful API Logo" src="./assets/icon_rest.png"/>
            <v-overlay :model-value="isHovering" contained class="align-center justify-center">
                <v-btn>RESTful API</v-btn>
              </v-overlay>
            </v-card>
          </v-hover>
          <v-hover v-slot="{ isHovering, props }">
            <v-card class="img-card" v-bind="props" :width="150" :height="100" href="https://kubernetes.io" target="_blank">
            <v-img alt="Kubernetes Logo" src="./assets/icon_kubernetes.png"/>
            <v-overlay :model-value="isHovering" contained class="align-center justify-center">
                <v-btn>Kubernetes</v-btn>
              </v-overlay>
            </v-card>
          </v-hover>
          <v-hover v-slot="{ isHovering, props }">
            <v-card class="img-card" v-bind="props" :width="150" :height="100" href="https://about.gitlab.com/" target="_blank">
            <v-img alt="Gitlab Logo" src="./assets/icon_gitlab.png"/>
            <v-overlay :model-value="isHovering" contained class="align-center justify-center">
                <v-btn>Gitlab</v-btn>
              </v-overlay>
            </v-card>
          </v-hover>
        </v-row>        
      </v-card>
      <v-card class="half-card background">
        <v-row>
          <v-img class="portrait-image" alt="Portrait" :width="133" :height="200" src="./assets/me.png"/>
          <v-col class="informations">
            <v-row>
              <h4 class="title">Name:</h4>
              <p>Angela Scherer</p>
            </v-row>
            <v-row>
              <h4 class="title">Ausbildung:</h4>
              <p>Bachelor of Science in Informatik</p>
            </v-row>
            <v-row>
              <h4 class="title">Zertifiziert:</h4>
              <v-col class="certified-col">
                <p>Kubernetes Administrator (CKA)</p>
                <p>ScrumMaster (CSM)</p>
                <p>ITIL Foundation V3</p>
                <p>Business English Cambridge Preliminary</p>
              </v-col>
            </v-row>
            <v-row>
              <h4 class="title">Links:</h4>
              <v-row class="link-row-angi">
                <v-hover v-slot="{ isHovering, props }">
                  <v-card class="link-card" v-bind="props" :width="40" :height="40" href="https://www.linkedin.com/in/angela-scherer-2a2979136" target="_blank">
                    <v-img  alt="Linkedin Icon" src="./assets/icon_linkedin.png"/>
                  </v-card>
                </v-hover>
                <v-hover v-slot="{ isHovering, props }">
                  <v-card class="link-card" v-bind="props" :width="42" :height="42" href="https://www.xing.com/profile/Angela_Scherer3/cv" target="_blank">
                    <v-img  alt="Xing Icon" src="./assets/icon_xing.png"/>
                  </v-card>
                </v-hover>
              </v-row>
            </v-row>
          </v-col>
        </v-row>
        <v-col justify="start" class="address-text">     
          <p>Wenn Sie an einer Zusammenarbeit interessiert sind, wenden Sie sich bitte an:</p><br>
        </v-col>
        <v-row>
          <v-col justify="start" class="address">
            <h3>Aiza GmbH</h3>
            <h4>Bernstrasse 159</h4>
            <h4>3052 Zollikofen</h4>
          </v-col>
          <v-col justify="start" class="contact">
            <h4>E-Mail: angela.scherer@aiza.ch</h4>
            <h4>Tel: +41 79 197 21 53</h4>            
          </v-col>
        </v-row>
        <v-row class="link-row">
          <v-hover v-slot="{ isHovering, props }">
            <v-card class="link-card" v-bind="props" :width="40" :height="40" href="https://www.linkedin.com/in/angela-scherer-2a2979136" target="_blank">
              <v-img  alt="Linkedin Icon" src="./assets/icon_linkedin.png"/>
            </v-card>
          </v-hover>
          <v-hover v-slot="{ isHovering, props }">
            <v-card class="link-card" v-bind="props" :width="42" :height="42" href="https://www.xing.com/profile/Angela_Scherer3/cv" target="_blank">
              <v-img  alt="Xing Icon" src="./assets/icon_xing.png"/>
            </v-card>
          </v-hover>
        </v-row>
      </v-card>
    </v-row>
  </v-app>
</template>

<style lang="sass" scoped>
.background
  background: #E6E6FA !important
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif !important

.logo
  margin: 0 0 -8px 14px

hr
  border: none
  height: 6px
  background: #276fff
  margin-bottom: 40px
  margin-left: 16px
  margin-right: 16px
  &:before
    height: 6px
    width: 219px
    content: ''
    position: absolute
    background: black !important

.block
  display: block
  hyphens: auto

.half-card
  width: 50%

.images 
  margin: 40px 80px -40px 80px !important

.img-card
  margin: 8px 0
  box-shadow: none !important
  background: transparent !important

.link-card
  margin: 8px 4px
  box-shadow: none !important
  background: transparent !important
  border-radius: 50%

.link-card:hover
  height: 50px !important
  width: 52px !important

.link-row
  margin-left: 105px
  margin-top: 0 !important

.link-row-angi
  margin-left: -2px

.container
  margin: 30px 80px 40px 80px

.address
  padding: 0 0 20px 120px

.contact
  padding: 0 120px 20px 0

.address-text
  padding: 50px 70px 10px 65px

.portrait-image
  margin: 30px 0 0 -175px

.informations
  margin: 30px 0 0 -190px

.title
  width: 150px

.certified-col
  margin: -11px 0 0 -11px
</style>
