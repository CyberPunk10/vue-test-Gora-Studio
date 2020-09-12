<template>
  <div class="home">
    <TextField/>
    <TextField/>
    <Button/>
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

<style lang="sass">
.home
  display: flex
  justify-content: center
</style>
