import Vue from 'vue'
import Router from 'vue-router'
import Stepper from './views/Stepper.vue'
import Profile from './views/Profile.vue'
import Timeline from './views/Timeline.vue'
import Resume from './views/Resume.vue'
import Map from './views/Map.vue'
import Schedule from './views/Schedule.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'stepper',
      component: Stepper
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile    
      
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume    
      
    },
    {
      path: '/map',
      name: 'map',
      component: Map    
      
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule    
      
    } 
  ]
})
