<template>
  <div>  
    <HelloWorld/>
    <Stepper />
  </div>
</template>

<script>
// @ is an alias to /src
import Stepper from '@/components/Stepper.vue'

export default {
  name: 'home',
  components: {    
    Stepper
  }
}
</script>
