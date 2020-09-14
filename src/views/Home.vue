<template>
  <div class="home">
    <form @submit.prevent="onSubmit">
      <TextField v-bind:textField="textFieldEmail" @func="setValue"/>
      <TextField v-bind:textField="textFieldPassword" @func="setValue"/>
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
        invalid: { emptyField: false, incorrect: false }
      },
      textFieldPassword: {
        title: 'Password',
        invalid: { emptyField: false, incorrect: false }
        // minLengthPassword: ''
      },
      button: { type: 'submit' },
      valueEmail: '',
      valuePassword: ''
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
    setValue (value, type) {
      if (type === 'Email') {
        this.valueEmail = value
        this.textFieldEmail.value = value
      } else if (type === 'Password') {
        this.valuePassword = value
        this.textFieldPassword.value = value
        // this.textFieldPassword.minLengthPassword = this.$v.valuePassword.$params.minLength.min
      }
      this.handlerInputs()
    },
    handlerInputs () {
      this.minLengthPassword = this.$v.valuePassword.$params.minLength.min
      this.textFieldEmail.invalid.emptyField = (this.$v.valueEmail.$dirty && !this.$v.valueEmail.required)
      this.textFieldEmail.invalid.incorrect = (this.$v.valueEmail.$dirty && !this.$v.valueEmail.email)
      this.textFieldPassword.invalid.emptyField = (this.$v.valuePassword.$dirty && !this.$v.valuePassword.required)
      this.textFieldPassword.invalid.incorrect = (this.$v.valuePassword.$dirty && !this.$v.valuePassword.minLength)
    },
    onSubmit () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        this.handlerInputs()
        return
      }

      const formData = {
        email: this.valueEmail,
        password: this.valuePassword
      }
      console.log(formData)

      this.$router.push('/about')
    }
  }
}
</script>

<style lang="sass">
.home
  display: flex
  justify-content: center
</style>
