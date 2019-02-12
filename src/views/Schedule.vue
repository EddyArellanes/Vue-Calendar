<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      
        <v-list subheader>
          <p class="title-centered">Detalle de Cita</p> 
          <div  v-for="(item,index) in items[indexItem]" v-bind:key="index"> 
            <v-list-tile             
              :key="item.title"
              avatar            
            >
                <v-list-tile-action>
                <v-icon :color="item.color">{{item.icon}}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
              </v-list-tile-content>
              
            </v-list-tile>
            <v-divider v-if="index + 1 < items[indexItem].length" :key="`divider-${index}`"></v-divider>  
          </div>
        </v-list>

        
      
      
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'Schedule',
  data () {
    return {
      indexItem: 0,
      items: [       
        [
          { title: 'Establecimiento: Ebais Avancari', icon: 'business',color:'blue' },
          { title: 'Área de Salud: Abangares', icon: 'local_pharmacy', color: 'red' },
          { title: 'Servicio de Especialidad: Medicina General', icon: 'category', color: 'black' },
          { title: 'Hora: 13:00 pm', icon: 'access_time', color: 'teal' }
        ],
        [
          { title: 'Establecimiento: Ebais Cangrejal-Sabanillas	', icon: 'business',color:'blue' },
          { title: 'Área de Salud: Acosta', icon: 'local_pharmacy', color: 'red' },
          { title: 'Servicio de Especialidad: Medicina General', icon: 'category', color: 'black' },
          { title: 'Hora: 14:00 pm', icon: 'access_time', color: 'teal' }
        ],
        [
          { title: 'Establecimiento: Ebais Aguas Zarcas 2	', icon: 'business',color:'blue' },
          { title: 'Área de Salud: Aguas Zarcas', icon: 'local_pharmacy', color: 'red' },
          { title: 'Servicio de Especialidad: Medicina General', icon: 'category', color: 'black' },
          { title: 'Hora: 13:00 pm', icon: 'access_time', color: 'teal' }
        ]
        
      ],     
    }
    
  },
  mounted(){
       this.indexItem = new URL(window.location).searchParams.get('index')        
  }
}
</script>
<style>
  .title-centered{
    text-align: center;
    margin-top:16px;
    font-size: 16px;   
    color: #2196f3;
    font-weight: 900;  
  }
</style>

