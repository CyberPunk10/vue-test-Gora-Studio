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
      textFieldEmail: {
        title: 'Email',
        focus: true,
        value: '',
        invalid: { emptyField: false, incorrect: false }
      },
      textFieldPassword: {
        title: 'Password',
        value: '',
        invalid: { emptyField: false, incorrect: false }
      },
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
      console.log('[INVALID]', this.$v.$invalid) // работает (true == invalid)
      console.log(this.valueEmail)
      console.log(this.valuePassword)
      console.log(this.$v) // передать этот параметр

      this.textFieldEmail.invalid.emptyField = (this.$v.valueEmail.$dirty && !this.$v.valueEmail.required)
      this.textFieldEmail.invalid.incorrect = (this.$v.valueEmail.$dirty && !this.$v.valueEmail.email)
      this.textFieldPassword.invalid.emptyField = (this.$v.valuePassword.$dirty && !this.$v.valuePassword.required)
      this.textFieldPassword.invalid.incorrect = (this.$v.valuePassword.$dirty && !this.$v.valuePassword.minLength)

      console.log('validate Email: ', this.textFieldEmail.invalid.emptyField)
      console.log('validate Email: ', this.textFieldEmail.invalid.incorrect)
      console.log('validate Passowrd: ', this.textFieldPassword.invalid.emptyField)
      console.log('validate Passowrd: ', this.textFieldPassword.invalid.incorrect)

      if (this.$v.$invalid) {
        this.$v.$touch()
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
