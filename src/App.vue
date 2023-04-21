<template>
  <v-app class="app">
    <img class="logo" alt="Aiza GmbH Logo" src="./assets/aiza_logo.png" width="213.33" height="120" />
    <hr />
    <div class="flex">
      <div class="half-card">
        <v-row justify="start">
          <div class="container">
            <p>Die Aiza GmbH, gegründet am 13. April 2023 und mit Sitz in Zollikofen Bern, ist spezialisiert auf die Entwicklung von massgeschneiderten Webapplikationen für Unternehmen. Das Unternehmen besteht derzeit aus der Geschäftsführerin Angela Scherer mit dem Ziel der weiteren Entwicklung und Expansion. Das Hauptaugenmerk liegt auf der Entwicklung von hochskalierbaren, global effizienten und sicheren Webapplikationen auf Basis von Open Source Software. Projekterfahrung und vertiefte Kenntnisse sind in folgenden Technologien vorhanden:</p>
          </div>
        </v-row>
        <v-row justify="center" class="images">
          <v-col justify="center">
            <a href="https://go.dev" target="_blank">
              <v-img class="img" alt="Go Logo" src="./assets/icon_go.png"/>
              <h4 class="image-title">Golang</h4>
            </a>
          </v-col>
          <v-col justify="center">
            <a href="https://vuejs.org" target="_blank">
              <v-img class="img" alt="Vue.js Logo" src="./assets/icon_vue.png"/>
              <h4 class="image-title">Vue.js</h4>
            </a>
          </v-col>
          <v-col justify="center">
            <a href="https://angular.io/" target="_blank">
              <v-img class="img" alt="Angular Logo" src="./assets/icon_angular.png"/>
              <h4 class="image-title">Angular</h4>
            </a>
          </v-col>
          <v-col justify="center">
            <a href="https://kubernetes.io" target="_blank">
              <v-img class="img" alt="Kubernetes Logo" src="./assets/icon_kubernetes.png"/>
              <h4 class="image-title">Kubernetes</h4>
            </a>
          </v-col>
          <v-col justify="center">
            <a href="https://about.gitlab.com/" target="_blank">
              <v-img class="img" alt="Gitlab Logo" src="./assets/icon_gitlab.png"/>
              <h4 class="image-title">Gitlab</h4>
            </a>
          </v-col>
          <v-col justify="center">
            <a href="https://restfulapi.net" target="_blank">
              <v-img class="img" alt="RESTful API Logo" src="./assets/icon_rest.png"/>
              <h4 class="image-title">RESTful API</h4>
            </a>
          </v-col>
        </v-row>        
      </div>
      <div class="half-card">
        <v-row>
          <div class="portrait-div">
            <img class="portrait-image" alt="Portrait Angela Scherer" src="./assets/me.png"/>
          </div>
          <v-col class="informations">
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
                <p>Business English Cambridge Preliminary</p>
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
        <v-row>
          <v-col justify="start" class="address">
            <h3>Aiza GmbH</h3>
            <h4>Bernstrasse 159</h4>
            <h4>3052 Zollikofen</h4>
          </v-col>
          <v-col justify="start" class="contact">
            <h4>E-Mail: <a style="color: #276fff" href="mailto:angela.scherer@aiza.ch">angela.scherer@aiza.ch</a></h4>
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
  margin-right: 30px
  flex: 40%
  @media only screen and (max-width: 1130px) 
    flex: 100%

.images 
  margin: 0 80px 50px 80px  
  @media only screen and (min-width: 2090px) 
    margin:  0 300px 50px 300px
    padding:  0 100px 0 100px
    max-width: 800px  
  @media only screen and (min-width: 1770px) 
    margin:  0 180px 50px 180px
  @media only screen and (max-width: 1130px) 
    margin:  0 250px 50px 250px
  @media only screen and (max-width: 1037px) 
    margin:  0 170px 50px 170px
  @media only screen and (max-width: 877px) 
    margin:  0 90px 50px 90px
  @media only screen and (max-width: 606px) 
    margin:  0 0 50px 100px
  @media only screen and (max-width: 550px) 
    margin:  0 0 50px 30px
  @media only screen and (max-width: 422px) 
    margin:  0 0 50px 110px

.image-title
  width: 150px
  text-align: center
  margin: 0

a
  text-decoration: none
  color: #276fff

.img
  margin: 8px 0
  height: 90px
  width: 150px
  @media only screen and (max-width: 1200px) 
    height: 70px !important

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
  margin: 0 0 0 15px
  @media only screen and (max-width: 1130px) 
    margin: -17px 0 20px 65px !important

.link-row-information
  margin: 2px 0 0 -4px

.container
  margin: 30px 50px 40px 80px !important

.address
  padding: 0 0 20px 30px
  hyphens: none !important
  @media only screen and (max-width: 1130px) 
    padding-left: 80px
  @media only screen and (max-width: 500px) 
    margin-right: 100px !important

.contact
  padding: 0 40px 20px 20px
  hyphens: none !important
  @media only screen and (max-width: 500px) 
    padding-left: 80px

.address-text
  padding: 40px 70px 30px 18px
  @media only screen and (max-width: 1130px) 
    margin-left: 50px

.portrait-div
  text-align: center !important
  @media only screen and (max-width: 640px) 
    width: 100%

.portrait-image
  margin: 20px 0 20px 30px
  height: 230px
  border: solid
  border-color: #276fff
  @media only screen and (max-width: 1130px) 
    margin-left: 80px
  @media only screen and (max-width: 640px) 
    margin: 0

.no-padding
  padding: 0
  @media only screen and (max-width: 400px) 
    margin-left: 40px

.title
  min-width: 150px
  margin: 0 !important
  hyphens: none
  @media only screen and (max-width: 400px)
    min-width: 300px

.links-title
  margin-top: 15px!important

.informations
  margin: 30px 40px 20px 49px
  @media only screen and (max-width: 640px) 
    margin-left: 80px
</style>
