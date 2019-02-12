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
    
        <iframe :src="locations[indexUrl]" height="200" width="100%" frameborder="0" style="border:0" allowfullscreen></iframe>

    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'Schedule',
  data () {
    return {
      indexUrl: 0,
      indexItem: 0,
      locations: [
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3941.170466236934!2d-83.5260299!3d8.9564351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa4061e1d09f163%3A0xf8299ece11eb0fac!2sSucursal+CCSS+Ciudad+Cortes!5e0!3m2!1ses-419!2smx!4v1549921797425',        
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3925.758735613644!2d-84.9618003!3d10.2810134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9ff59640986969%3A0x4de37e25f4539305!2sSucursal+CCSS+Abangares!5e0!3m2!1ses-419!2smx!4v1549921851699',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7835.70633146178!2d-85.02371062757852!3d10.898761754302067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f75498071d060f5%3A0xc33425f52fe8ce6e!2sHospital+Upala!5e0!3m2!1ses-419!2smx!4v1549923003659'
        
      ],
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
       this.indexUrl = new URL(window.location).searchParams.get('location')       
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

