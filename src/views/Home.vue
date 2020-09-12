<template>
  <div class="home">
    <TextField msg="Welcome to Your Vue.js App"/>
    <TextField msg="Welcome to Your Vue.js App"/>
    <Button msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TextField from '@/components/TextField.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'Home',
  components: {
    TextField, Button
  }
}
</script>
