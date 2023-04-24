<template>
  <v-app class="app">
    <img class="logo" alt="Aiza GmbH Logo" src="./assets/aiza_logo.png" width="213.33" height="120" />
    <hr />
    <div class="flex">
      <div class="half-card">
        <div class="container">
          <p>Die Aiza GmbH mit Sitz in Zollikofen bei Bern bietet Entwicklungen von massgeschneiderten, modernen Webapplikationen für Unternehmen und Institutionen auf Basis von Open-Source-Software an.</p><br>
          <p>Unser Fokus liegt im Bereich der folgenden Technologien:</p>
        </div>
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
              <a href="https://kubernetes.io" target="_blank">
                <v-img class="img" alt="Kubernetes Logo" src="./assets/icon_kubernetes.png"/>
                <h4 class="image-title">Kubernetes</h4>
              </a>
            </v-col>
            <v-col class="image-col">
              <a href="https://restfulapi.net" target="_blank">
                <v-img class="img" alt="RESTful API Logo" src="./assets/icon_rest.png"/>
                <h4 class="image-title">RESTful API</h4>
              </a>
            </v-col>
            <v-col class="image-col">
              <a href="https://about.gitlab.com/" target="_blank">
                <v-img class="img" alt="Gitlab Logo" src="./assets/icon_gitlab.png"/>
                <h4 class="image-title">Gitlab</h4>
              </a>
            </v-col>
            <v-col class="image-col">
              <a href="https://angular.io/" target="_blank">
                <v-img class="img" alt="Angular Logo" src="./assets/icon_angular.png"/>
                <h4 class="image-title">Angular</h4>
              </a>
            </v-col>
          </div>
        </div>      
      </div>
      <div class="half-card">
        <div class="informations-div">
          <h3 class="h3-title-1">Geschäftsleitung</h3>  
          <div class="portrait-div">
            <img class="portrait-image" alt="Portrait Angela Scherer" src="./assets/me.png"/>
          </div>
          <div class="informations">
            <h3 class="h3-title-2">Geschäftsleitung</h3>  
            <div class="information-div">
              <h4 class="title">Name:</h4>
              <div class="information">
                <p>Angela Scherer</p>
              </div>  
            </div>
            <div class="information-div">
              <h4 class="title">Ausbildung:</h4>   
              <div class="information">
                <p>Bachelor of Science in Informatik</p>
              </div>
            </div> 
            <div class="information-div">          
              <h4 class="title">Zertifiziert:</h4>   
              <div class="information">
                <!-- <p>Kubernetes Administrator (CKA)</p> -->
                <p>ScrumMaster (CSM)</p>
                <p>ITIL Foundation V3</p>
                <p class="english">Business English Cambridge Preliminary</p>
              </div>
            </div> 
            <div class="information-div">      
              <h4 class="title links-title">Links:</h4> 
              <div class="information">
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
              </div>
            </div>             
          </div>  
        </div>         
        <div class="address-text">     
          <p>Haben wir Ihr Interesse geweckt? Bitte melden Sie sich zu einem unverbindlichen Informationsgespräch.</p>
        </div>
        <div class="address-div">
          <div class="address">
            <h3>Aiza GmbH</h3>
            <h4>Bernstrasse 159</h4>
            <h4>3052 Zollikofen</h4>
          </div>
          <div justify="start" class="contact">
            <h4>E-Mail: <a style="color: #276fff" href="mailto:angela.scherer@aiza.ch">angela.scherer@aiza.ch</a></h4>
            <h4>Telefon: +41 79 197 21 53</h4>            
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
  margin: 0 0 -8px 10px
  @media only screen and (max-width: 600px)
    margin: -4px 0 -8px 4px


hr
  border: none
  height: 6px
  background: #276fff
  margin-bottom: 40px
  margin-left: 16px
  margin-right: 16px
  &:before
    height: 6px
    width: 197px
    content: ''
    position: absolute
    background: black
    @media only screen and (max-width: 600px)
      width: 182px

.half-card
  margin: 0 50px
  flex: 40%
  @media only screen and (max-width: 1130px) 
    flex: 100%
  @media only screen and (max-width: 600px)
    margin: 0 40px

.container
  margin: 20px 0 40px 0
  @media only screen and (max-width: 600px)
    margin-top: 10px

.images-div
  width: 100%
  margin: 0 -20px 40px 0
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
  @media only screen and (max-width: 640px) 
    width: 110px
  @media only screen and (max-width: 500px) 
    width: 100px
  @media only screen and (max-width: 400px) 
    width: 95px

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
  @media only screen and (max-width: 640px) 
    height: 80px
    width: 110px
  @media only screen and (max-width: 500px) 
    height: 70px
    width: 100px
  @media only screen and (max-width: 400px) 
    height: 60px
    width: 95px

.img:hover
  height: 120px
  background-color: transparent
  @media only screen and (max-width: 500px) 
    height: 100px
    @media only screen and (max-width: 500px) 
      height: 90px

.link-card
  margin: 8px 4px
  box-shadow: none
  background: transparent
  border-radius: 50%

.link-card:hover
  height: 50px !important
  width: 52px !important

.informations-div
  display: flex
  @media only screen and (max-width: 640px)
    flex-direction: column

.informations
  margin: 20px 0 20px 0
  hyphens: auto

.information-div
  display: flex
  @media only screen and (max-width: 455px)
    flex-direction: column

.information
  @media only screen and (max-width: 455px) 
    margin-left: 30px

.portrait-div
  display: flex
  justify-content: center
  margin-right: 50px
  @media only screen and (max-width: 640px)
    margin-right: 0

.portrait-image
  margin: 26px 0 20px 0
  height: 205px
  border: solid
  border-color: #276fff

.link-row
  margin-top: -17px !important

.link-row-information
  margin: 2px 0 0 -4px

.address-text
  margin: 15px 0 20px 0

.address-div
  display: flex
  flex-wrap: wrap
  hyphens: none !important
  margin-bottom: 20px !important
  @media only screen and (max-width: 710px)
    flex-direction: column

.address
  margin: 0 163px 20px 0
  width: 175px
  @media only screen and (max-width: 710px)
    margin-right: 0

.contact
  margin: 0
  @media only screen and (max-width: 600px)
    margin: 0 0 20px 0

.h3-title-1
  margin-bottom: 8px
  display: none
  @media only screen and (max-width: 641px)
    display: block

.h3-title-2
  margin-bottom: 8px
  display: block
  @media only screen and (max-width: 641px)
    display: none
  
.title
  min-width: 150px
  margin: 0 !important
  hyphens: none

.links-title
  margin-top: 15px!important
  @media only screen and (max-width: 455px) 
    margin-top: 0 !important

.english
  @media only screen and (max-width: 430px)
    width: 200px !important
</style>
