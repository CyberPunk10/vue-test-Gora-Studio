<template>
  <div class="home">
    <form @submit.prevent="onSubmit">
      <TextField v-bind:textFieldTitle="textFieldEmail" @func="setValue"/>
      <TextField v-bind:textFieldTitle="textFieldPassword" @func="setValue"/>
      <Button v-bind:button="button"/>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import TextField from '@/components/TextField.vue'
import Button from '@/components/Button.vue'
import { email, required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Home',
  data () {
    return {
      textFieldEmail: { title: 'Email', focus: true, warning: 'Введите корректный адрес почты', value: '', invalid: false },
      textFieldPassword: { title: 'Password', warning: 'Введите корректный пароль', value: '', invalid: false },
      valueEmail: '',
      valuePassword: '',
      button: { type: 'submit' }
    }
  },
  validations: {
    valueEmail: { email, required },
    valuePassword: { required, minLength: minLength(6) }
  },
  components: {
    TextField, Button
  },
  methods: {
    onSubmit () {
      console.log(this.$v.$invalid) // работает (true == invalid)
      console.log(this.valueEmail)
      console.log(this.valuePassword)
      console.log(this.$v) // передать этот параметр
      if (this.$v.$invalid) {
        this.$v.$touch()
        this.textFieldEmail.invalid = this.$v
        this.textFieldPassword.invalid = this.$v
        return
      }
      this.$router.push('/')
    },
    setValue (value, type) {
      if (type === 'Email') {
        this.valueEmail = value
        this.textFieldEmail.value = value
      } else if (type === 'Password') {
        this.valuePassword = value
        this.textFieldPassword.value = value
      }
    }
  }
}
</script>

<style lang="sass">
.home
  display: flex
  justify-content: center
</style>
