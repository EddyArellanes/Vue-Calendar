<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>EDUS</span>        
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        @click="close()"
        target="_blank"
      >
        <span class="mr-2">Salir</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld :name="name"/>
    </v-content>
     <v-footer class="pa-3" :dark="true">
      <v-spacer></v-spacer>
      <div>&copy; Expediente Único Digital de Salud {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      name: ''
    }
  },
  created(){
    let urlParams = new URLSearchParams(window.location.search)
    let name = urlParams.get('name')
    this.name = (name) ? name : 'Usuario'
  },
  methods:{
    close(){
      MessengerExtensions.requestCloseBrowser()      
    }
  }
}
</script>
