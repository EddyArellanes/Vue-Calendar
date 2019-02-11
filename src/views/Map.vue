<template>
 <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12> 
        <iframe :src="locations[indexUrl]" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>
      </v-flex>
    </v-layout>
 </v-container>
</template>
<script>
export default {
  name: 'Map',  
  data () {
    return {
      indexUrl: 0,
      locations: [
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3941.170466236934!2d-83.5260299!3d8.9564351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa4061e1d09f163%3A0xf8299ece11eb0fac!2sSucursal+CCSS+Ciudad+Cortes!5e0!3m2!1ses-419!2smx!4v1549921797425',        
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3925.758735613644!2d-84.9618003!3d10.2810134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9ff59640986969%3A0x4de37e25f4539305!2sSucursal+CCSS+Abangares!5e0!3m2!1ses-419!2smx!4v1549921851699',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7835.70633146178!2d-85.02371062757852!3d10.898761754302067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f75498071d060f5%3A0xc33425f52fe8ce6e!2sHospital+Upala!5e0!3m2!1ses-419!2smx!4v1549923003659'
        
      ]
    }
  },
  mounted(){
    this.indexUrl = new URL(window.location).searchParams.get('location')        
  }
}
</script>

