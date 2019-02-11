<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>      
        <v-list subheader>         
          <v-list-tile
            v-for="item in items"
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
          
        </v-list>

        
      
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'Schedule',
  data () {
    return {
      items: [       
        { title: 'Cindy Baker', icon: 'chat_bubble',color:'blue' },
        { title: 'Ali Connors', icon: 'send', color: 'teal' }
      ],     
    }
  }
}
</script>

