<template>
  <div class="home">
    <div class="header">
      <img class="logo" alt="Aiza GmbH Logo" src="./assets/aiza_logo.png" width="213.33" height="120" />
      <div class="language-div">
        <v-hover v-slot="{ props }">
          <v-card class="language-card" v-bind="props" @click="changeToEnglish">
            <v-img  alt="English Icon" src="./assets/english.png"/>
          </v-card>
        </v-hover>
        <v-hover v-slot="{ props }">
          <v-card class="language-card" v-bind="props" @click="changeToGerman">
            <v-img  alt="German Icon" src="./assets/german.png"/>
          </v-card>
        </v-hover>
      </div>
    </div>
    <hr />
    <div class="flex">
      <div class="half-card">
        <div class="container">
          <p v-if="english">Aiza GmbH, based in Zollikofen near Bern, offers development of customised, modern web applications for companies and institutions based on open source software.</p>
          <p v-if="!english">Die Aiza GmbH mit Sitz in Zollikofen bei Bern bietet Entwicklung von massgeschneiderten, modernen Webapplikationen für Unternehmen und Institutionen auf Basis von Open-Source-Software an.</p>
          <br>
          <p v-if="english">Our focus is in the area of the following technologies:</p>
          <p v-if="!english">Unser Fokus liegt im Bereich der folgenden Technologien:</p>
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
          <h3 v-if="english" class="h3-title-1">Founder and CEO</h3>
          <h3 v-if="!english" class="h3-title-1">Geschäftsleitung</h3>  
          <div class="portrait-div">
            <img class="portrait-image" alt="Portrait Angela Scherer" src="./assets/me.png"/>
          </div>
          <div class="informations">
            <h3 v-if="english" class="h3-title-2">Founder and CEO</h3>
            <h3 v-if="!english" class="h3-title-2">Geschäftsleitung</h3>   
            <div class="information-div">
              <h4 class="title">Name:</h4>
              <div class="information">
                <p>Angela Scherer</p>
              </div>  
            </div>
            <div class="information-div">
              <h4 v-if="english" class="title">Education:</h4>   
              <h4 v-if="!english" class="title">Ausbildung:</h4>   
              <div class="information">
                <p v-if="english">Bachelor of Science in Computer Science</p>
                <p v-if="!english">Bachelor of Science in Informatik</p>
              </div>
            </div> 
            <div class="information-div">
              <h4 v-if="english" class="title">Certifications:</h4>           
              <h4 v-if="!english" class="title">Zertifizierungen:</h4>   
              <div class="information">
                <p>ScrumMaster (CSM)</p>
                <p>ITIL Foundation V3</p>
                <p>Business English Cambridge Preliminary</p>
              </div>
            </div> 
            <div class="information-div">      
              <h4 class="title links-title">Links:</h4> 
              <div class="information">
                <v-row class="link-row-information">
                  <v-hover v-slot="{ props }">
                    <v-card class="link-card" v-bind="props" :width="40" :height="40" href="https://www.linkedin.com/in/angela-scherer-2a2979136" target="_blank">
                      <v-img  alt="Linkedin Icon" src="./assets/icon_linkedin.png"/>
                    </v-card>
                  </v-hover>
                  <v-hover v-slot="{ props }">
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
          <p v-if="english">Have we aroused your interest? Then do not hesitate to contact us. Send us a message by e-mail or give us a call. We will be happy to advise you and arrange an appointment with you.</p>
          <p v-if="!english">Haben wir Ihr Interesse geweckt? Dann zögern Sie nicht, uns zu kontaktieren. Senden Sie uns eine Nachricht per E-Mail oder rufen Sie uns an. Wir beraten Sie gerne und vereinbaren mit Ihnen einen Termin.</p>
        </div>
        <div class="address-div">
          <div class="address">
            <h3>Aiza GmbH</h3>
            <h4>Bernstrasse 159</h4>
            <h4>3052 Zollikofen</h4>
          </div>
          <div justify="start" class="contact">
            <h4>E-Mail: <a style="color: #276fff" href="mailto:angela.scherer@aiza.ch">angela.scherer@aiza.ch</a></h4>
            <h4 v-if="english">Phone: +41 79 197 21 53</h4>
            <h4 v-if="!english">Telefon: +41 79 197 21 53</h4>            
          </div>
        </div>
        <div class="link-row">
          <v-hover v-slot="{ props }">
            <v-card class="link-card" v-bind="props" :width="40" :height="40" href="https://www.linkedin.com/company/aiza-gmbh" target="_blank">
              <v-img  alt="Linkedin Icon" src="./assets/icon_linkedin.png"/>
            </v-card>
          </v-hover>
          <v-hover v-slot="{ props }">
            <v-card class="link-card" v-bind="props" :width="42" :height="42" href="https://www.xing.com/pages/aiza-gmbh" target="_blank">
              <v-img  alt="Xing Icon" src="./assets/icon_xing.png"/>
            </v-card>
          </v-hover>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      english: true
    }),
    created() {
      if (localStorage.getItem("english") == "true") this.english = true
      else this.english = false
    },
    methods: {
      changeToEnglish () {
        localStorage.setItem("english", true)
        document.documentElement.setAttribute('lang', 'de')
        this.english = true
      },
      changeToGerman () {
        localStorage.setItem("english", false)
        document.documentElement.setAttribute('lang', 'en')
        this.english = false
      }
    },
  }
</script>


<style lang="sass" scoped>
.home
 font-family: Helvetica Neue,Helvetica,Arial,sans-serif !important
 hyphens: auto

.flex
  display: flex
  flex-wrap: wrap

.logo
  margin: 0 0 -8px 10px
  @media only screen and (max-width: 600px)
    margin: -4px 0 -8px 4px

.header
  display: flex
  justify-content: space-between

.language-div
  display: flex
  margin: 46px 24px 0 0
  @media only screen and (max-width: 400px)
    flex-direction: column
    margin: 23px 24px 0 0

.language-card
  box-shadow: none
  background: transparent
  border-radius: 50%
  margin-left: 8px
  width: 35px
  height: 35px
  @media only screen and (max-width: 400px)
    widht: 30px
    height: 30px
    margin: 0 0 4px 4px

.language-card:hover
  height: 45px
  width: 45px

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
  margin: 20px 50px
  flex: 40%
  @media only screen and (max-width: 1130px) 
    flex: 100%
  @media only screen and (max-width: 600px)
    margin: 0 40px

.container
  margin: 2px 0 40px 0
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
  margin: 0 0 20px 0
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
  margin: 6px 0 20px 0
  height: 190px
  border: solid
  border-color: #276fff

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
  margin: 0 153px 0 0
  width: 175px
  @media only screen and (max-width: 1370px)
    margin: 0 40px 0 0
  @media only screen and (max-width: 1130px)
    margin: 0 163px 0 0
  @media only screen and (max-width: 710px)
    margin: 0 0 20px 0

.contact
  margin: 0

.link-row
  margin: -17px 0 20px -4px
  display: flex

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
  margin-top: 15px !important
  @media only screen and (max-width: 455px) 
    margin-top: 0 !important
</style>
