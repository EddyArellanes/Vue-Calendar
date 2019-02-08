<template>
  <v-app>
    <v-toolbar app>
      <v-img
          :src="require('./assets/logo-dued.png')"
          class="my-3"
          contain
          height="50">
      </v-img>
      <v-toolbar-title class="headline text-uppercase">
        <span>EDUS</span>        
        
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn        
        flat
        @click="close()"
        target="_blank"
        v-if="messengerAvailable"
      >
        <span class="mr-2">Salir</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
     <v-footer class="pa-3" :dark="true">
      <div class="centered">&copy; Expediente Único Digital de Salud {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
const MessengerExtensions = (MessengerExtensions) ? MessengerExtensions : ''

export default {
  name: 'App',  
  data () {
    return {
      name: '',
      messengerAvailable: (MessengerExtensions) ? true : false
    }
  },
  created(){
    let urlParams = new URLSearchParams(window.location.search)
    let name = urlParams.get('name')
    this.name = (name) ? name : 'Selly'
    
  },
  methods:{
    close(){
      if(MessengerExtensions){
        MessengerExtensions.requestCloseBrowser()      
      }
      
    }
  }
}
</script>
<style scoped>
  .centered{
    margin: 0 auto;
  }
</style>