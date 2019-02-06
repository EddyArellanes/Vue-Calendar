<template>
  <v-container>
    <v-alert
      :value="showAlert"
      :dismissible="true"
      type="success"
    >
      ¡Cita agendada con éxito!
    </v-alert>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.jpg')"
          class="my-3"
          contain
          height="50"
        ></v-img>
      </v-flex>

      <v-flex>
        <p class="subheading font-weight-regular no-margin">
         ¡Hola! {{ name }} Selecciona el día que quieres agendar tu cita          
        </p>
        <v-date-picker class="centered"         
          :landscape="false"         
          locale="es-mx"
          v-on:input="calendarChanged()">
        </v-date-picker>
      </v-flex>    

     
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
     showAlert: false
    }),
    props:{
      name: String
    },
    methods:{
      calendarChanged(){
        this.showAlert = true
      }
    }
  }
</script>

<style scoped>
  .centered{
    margin: 0 auto;
  }
</style>