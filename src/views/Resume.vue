<template>  
  <v-layout class="margin-top" row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="indigo" dark>          

          <v-toolbar-title>Detalles de tu cita</v-toolbar-title>

          <v-spacer></v-spacer>

        </v-toolbar>
        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar            
          >
            <v-list-tile-action>
              <v-icon v-if="item.icon" color="blue">info</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-avatar>
              <img v-if="item.avatar" :src="item.avatar">
            </v-list-tile-avatar>
          </v-list-tile>

        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'Resume',
  data () {
    return {
      items: [
        { icon: true, title: 'Nombre: Diana Méndez Calderon', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { title: 'Establecimiento Avancari' },
        { title: 'Fecha: 22-Febrero-2019'},
        { title: 'Horario: 10:00 AM' }
      ]
    }
  } 
}
</script>

<style>
  .margin-top{
    margin-top: 32px;
  }
</style>
