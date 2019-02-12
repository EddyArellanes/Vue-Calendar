<template>
  <div>
    <div>               
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>               
            <v-flex xs12 ms12 md6 l6>  
              <v-card dark color="primary">
                <v-card-text class="px-2">Inicia Sesión con tus datos del CCSS</v-card-text>
              </v-card>                                                      
            </v-flex>                             
            <v-flex xs12 ms12 md6 l6  >                        
                <v-text-field            
                  append-icon="account_circle"
                  type="text"
                  name="username"
                  label="Usuario"
                  hint="Tu indentificador del CSS">
                </v-text-field>
                <v-text-field            
                  append-icon="lock"
                  type="password"
                  name="password"
                  label="Password"
                  hint="">
                </v-text-field>                                                                                                           
          </v-flex>
        </v-layout>
      </v-container>      
    </div>
  </div>
  
</template>
<script>
export default {
  name: 'Login'
}
</script>
<style>
.center{
  text-align: center;
}
</style>

