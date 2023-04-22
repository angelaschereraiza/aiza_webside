<template>
  <v-app class="app">
    <img class="logo" alt="Aiza GmbH Logo" src="./assets/aiza_logo.png" width="213.33" height="120" />
    <hr />
    <div class="flex">
      <div class="half-card">
        <v-row justify="start">
          <div class="container">
            <p>Die Aiza GmbH mit Sitz in Zollikofen bei Bern bietet Entwicklung von massgeschneiderten, modernen Webapplikationen für Unternehmen auf Basis von Open-Source-Software an.</p><br>
            <p>Unser Fokus liegt im Bereich der folgenden Technologien:</p>
          </div>
        </v-row>
        <div class="images-div">
          <div class="images">
            <v-col class="image-col">
              <a href="https://go.dev" target="_blank">
                <v-img class="img" alt="Go Logo" src="./assets/icon_go.png"/>
                <h4 class="image-title">Golang</h4>
              </a>
            </v-col>
            <v-col class="image-col">
              <a href="https://vuejs.org" target="_blank">
                <v-img class="img" alt="Vue.js Logo" src="./assets/icon_vue.png"/>
                <h4 class="image-title">Vue.js</h4>
              </a>
            </v-col>
            <v-col class="image-col">
              <a href="https://angular.io/" target="_blank">
                <v-img class="img" alt="Angular Logo" src="./assets/icon_angular.png"/>
                <h4 class="image-title">Angular</h4>
              </a>
            </v-col>
            <v-col class="image-col">
              <a href="https://kubernetes.io" target="_blank">
                <v-img class="img" alt="Kubernetes Logo" src="./assets/icon_kubernetes.png"/>
                <h4 class="image-title">Kubernetes</h4>
              </a>
            </v-col>
            <v-col class="image-col">
              <a href="https://about.gitlab.com/" target="_blank">
                <v-img class="img" alt="Gitlab Logo" src="./assets/icon_gitlab.png"/>
                <h4 class="image-title">Gitlab</h4>
              </a>
            </v-col>
            <v-col class="image-col">
              <a href="https://restfulapi.net" target="_blank">
                <v-img class="img" alt="RESTful API Logo" src="./assets/icon_rest.png"/>
                <h4 class="image-title">RESTful API</h4>
              </a>
            </v-col>
          </div>
        </div>      
      </div>
      <div class="half-card">
        <v-row>
          <div class="portrait-div">
            <img class="portrait-image" alt="Portrait Angela Scherer" src="./assets/me.png"/>
          </div>
          <v-col class="informations">
            <h3 class="leitung-title">Geschäftsleitung</h3>  
            <v-row>
              <h4 class="title">Name:</h4>
              <v-col class="no-padding">
                <p>Angela Scherer</p>
              </v-col>  
            </v-row>
            <v-row>
              <h4 class="title">Ausbildung:</h4>   
              <v-col class="no-padding">
                <p>Bachelor of Science in Informatik</p>
              </v-col>
            </v-row> 
            <v-row>          
              <h4 class="title">Zertifiziert:</h4>   
              <v-col class="no-padding">
                <!-- <p>Kubernetes Administrator (CKA)</p> -->
                <p>ScrumMaster (CSM)</p>
                <p>ITIL Foundation V3</p>
                <p class="english">Business English Cambridge Preliminary</p>
              </v-col>
            </v-row> 
            <v-row>        
              <h4 class="title links-title">Links:</h4> 
              <v-col class="no-padding">
                <v-row class="link-row-information">
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
              </v-col>
            </v-row>             
          </v-col>  
        </v-row>         
        <v-col justify="start" class="address-text">     
          <p>Wenn Sie an einer Zusammenarbeit interessiert sind oder Fragen haben, wenden Sie sich bitte an:</p>
        </v-col>
        <div class="address-div">
          <div class="address">
            <h3>Aiza GmbH</h3>
            <h4>Bernstrasse 159</h4>
            <h4>3052 Zollikofen</h4>
          </div>
          <div justify="start" class="contact">
            <h4>E-Mail: <a style="color: #276fff" href="mailto:angela.scherer@aiza.ch">angela.scherer@aiza.ch</a></h4>
            <h4>Tel: +41 79 197 21 53</h4>            
          </div>
        </div>
        <!-- <v-row class="link-row">
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
        </v-row> -->
      </div>
    </div>
</v-app>
</template>

<style lang="sass" scoped>
.app
 font-family: Helvetica Neue,Helvetica,Arial,sans-serif !important
 hyphens: auto

.flex
  display: flex
  flex-wrap: wrap

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
    width: 205px
    content: ''
    position: absolute
    background: black !important

.half-card
  margin: 0 70px
  flex: 40%
  @media only screen and (max-width: 1130px) 
    flex: 100%
  @media only screen and (max-width: 600px)
    margin: 0 50px

.container
  margin: 20px 0 40px 0 !important

.images-div
  margin: 10px -20px 60px 0 !important
  display: flex
  justify-content: center

.images 
  max-width: 650px
  display: flex
  flex-wrap: wrap
  justify-content: center

.image-title
  width: 150px
  text-align: center
  margin: 0

.image-col
  display: flex
  justify-content: center

a
  text-decoration: none
  color: #276fff

.img
  margin: 8px 0
  height: 90px
  width: 150px
  @media only screen and (max-width: 1200px) 
    height: 70px

.img:hover
  height: 120px !important
  background-color: transparent !important

.link-card
  margin: 8px 4px
  box-shadow: none !important
  background: transparent !important
  border-radius: 50%

.link-card:hover
  height: 50px !important
  width: 52px !important

.link-row
  margin-top: -17px !important

.link-row-information
  margin: 2px 0 0 -4px

.address-text
  margin: 20px 0 20px -23px
  @media only screen and (max-width: 430px)
    width: 300px

.address-div
  display: flex
  flex-wrap: wrap
  hyphens: none !important
  margin-bottom: 20px !important

.address
  margin: 0 20px 20px -12px
  width: 150px
  margin-right: 232px !important
  @media only screen and (max-width: 350px)
    margin: 20px !important

.contact
  margin: 0
  @media only screen and (max-width: 600px)
    margin: 0 0 20px -12px

.portrait-div
  display: flex
  justify-content: center
  margin-right: 50px
  @media only screen and (max-width: 640px)
    width: 100%

.portrait-image
  margin: 20px 0 20px 0
  height: 230px
  border: solid
  border-color: #276fff

.no-padding
  padding: 0
  @media only screen and (max-width: 455px) 
    margin-left: 30px

.leitung-title
  margin: -13px 0 20px -12px

.title
  min-width: 150px
  margin: 0 !important
  hyphens: none
  @media only screen and (max-width: 455px)
    min-width: 350px
    @media only screen and (max-width: 350px)
      min-width: none

.links-title
  margin-top: 15px!important

.informations
  margin: 20px 0 20px 0
  hyphens: auto !important
  @media only screen and (max-width: 640px)
    margin-left: 0

.english
  @media only screen and (max-width: 430px)
    width: 200px !important
</style>
