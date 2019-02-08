<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Identíficate</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Escoge tu Sucursal</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Elige el día</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <Login />

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continuar
        </v-btn>        
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-container fluid grid-list-xl>
          <p>Elige el establecimiento de tu preferencia</p> 
          <v-layout wrap align-center>
              <v-flex xs12 sm6 d-flex>
                <v-select
                  :items="items"
                  box
                  label="Establecimientos"
                ></v-select>
              </v-flex>
          </v-layout>
        </v-container>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continuar
        </v-btn>

        <v-btn flat @click="e1 = 1">Volver</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">

      <Calendar :showAlert="finish"/>

      <v-btn flat @click="e1 = 2" v-if="!finish">Volver</v-btn>
      <v-btn
          color="primary"
          @click="showNotify()"
          v-if="!finish"
        >
          Finalizar
      </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import Login from '@/components/Login.vue'
import Calendar from '@/components/Calendar.vue'

export default {
  name: 'Stepper',
  components: {
    Login,
    Calendar
  },
  data () {
    return {
      e1: 0,
      finish: false,
      items: [
        'EBAIS AVANCARI', 
        'EBAIS LA GARITA', 
        'EBAIS PACTO JOCOTE', 
        'EBAIS SAN JOSECITO SUR'
      ]
    }
  },
  methods:{
    showNotify(){
      this.finish = true
      setInterval(()=>{
          this.$router.push('resume')              
      }, 2000)
    }
  }
}
</script>

