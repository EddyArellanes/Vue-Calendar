<template>
  <v-container>
  
    <v-layout text-xs-center wrap>

      <v-flex xs12 md6 l6>
        <v-img
          v-if="!true "
          :src="require('../assets/logo.jpg')"
          class="my-3"
          contain
          height="50">
        </v-img>
        <p class="subheading font-weight-regular no-margin">
         ¡Hola! {{ name }} Selecciona el fecha y hora que quieres agendar tu cita          
        </p>        
        
        <v-time-picker 
          landscape="true"  
          width="170"          >
        </v-time-picker>
        <br>
        <br>
               
      </v-flex>    
      <v-flex xs12 md6 l6>    
        <v-date-picker class="centered"         
          :landscape="false"         
          locale="es-mx"
          v-on:input="calendarChanged()">
        </v-date-picker>

      </v-flex>    
     
    </v-layout>
    <v-alert
      :value="showAlert"
      :dismissible="true"
      type="success">
      ¡Cita agendada con éxito!
    </v-alert>
  </v-container>
</template>
<script>
export default {
  name: 'Calendar',
  props: {
    showAlert: Boolean
  },
  data: () => ({
     showAlert: false
  }), 
  methods:{
  }
}
</script>

<style scoped>
  .centered{
    margin: 0 auto;
  }
</style>
