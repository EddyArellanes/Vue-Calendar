<template>
  <div>
    <v-container>
      <v-layout fluid grid-list-lg>
        <v-flex>
          <v-img
            :src="require('../assets/logo.jpg')"
            class="my-3"
            contain
            height="50">
          </v-img>
          <p class="font-weight-regular no-margin center" v-if="infoReady">
            Hola Diana! este es tu información en la CCSS
          </p>
          <p v-else>Para conocer tus datos en la CCSS por favor introduce tu Identificador</p>
          <v-flex xs12 sm6 md3>
            <v-text-field
            label="Identificador"
            placeholder=""
            > </v-text-field>
            <v-btn
              color="success"
              @click="showInfo()"              
            >
          Buscar
      </v-btn>
          </v-flex>

        </v-flex>           
      </v-layout>
    </v-container>

    <div id="e3" style="max-width: 400px; margin: auto;" class="grey lighten-3" v-if="infoReady">     
      <v-card>
        <v-container fluid grid-list-lg>
          <v-layout row wrap>                  
            <v-flex xs12>
              <v-card color="blue" class="white--text">
                <v-layout row>
                  <v-flex xs7>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Diana</div>
                        <div>Méndez Calderon</div>
                        <div>(1993)</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                  <v-flex xs5>
                    <v-img
                      :src="require('../assets/avatar.png')"
                      height="125px"
                      contain
                    ></v-img>
                  </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="pa-3">
                  Número de Identificación: 129112
                  <v-spacer></v-spacer>                                    
                  <v-icon color="white">line_style</v-icon>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      infoReady: false,
    }
  },
  components: {
    
  },
  methods:{
    showInfo(){
      this.infoReady = true
    }
  }
}
</script>
<style scoped>
  .center{
    text-align: center;
  }
</style>

