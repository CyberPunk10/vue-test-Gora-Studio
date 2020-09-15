<template>
  <div class="login">
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
  name: 'Login',
  data () {
    return {
      textFieldEmail: {
        title: 'Email',
        autofocus: true,
        invalid: { emptyField: false, incorrect: false },
        type: 'email'
      },
      textFieldPassword: {
        title: 'Password',
        invalid: { emptyField: false, incorrect: false },
        type: 'password'
        // minLengthPassword: ''
      },
      button: { type: 'submit', text: 'login' },
      valueEmail: '',
      valuePassword: ''
    }
  },
  validations: {
    valueEmail: { email, required },
    valuePassword: { required, minLength: minLength(4) }
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
      // this.minLengthPassword = this.$v.valuePassword.$params.minLength.min
      this.textFieldEmail.invalid.emptyField = (this.$v.valueEmail.$dirty && !this.$v.valueEmail.required)
      this.textFieldEmail.invalid.incorrect = (this.$v.valueEmail.$dirty && !this.$v.valueEmail.email)
      this.textFieldPassword.invalid.emptyField = (this.$v.valuePassword.$dirty && !this.$v.valuePassword.required)
      this.textFieldPassword.invalid.incorrect = (this.$v.valuePassword.$dirty && !this.$v.valuePassword.minLength)
    },
    async onSubmit () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        this.handlerInputs()
        return
      }

      let resultPassword = String(this.valuePassword)
      if (resultPassword.length === 4) {
        resultPassword += '00'
      } else if (resultPassword.length === 5) {
        resultPassword += '0'
      }

      const formData = {
        email: this.valueEmail,
        password: resultPassword
      }

      function storage (key, data = null) {
        if (!data) {
          return JSON.parse(localStorage.getItem(key))
        }
        localStorage.setItem(key, JSON.stringify(data))
      }

      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/about')
        storage('data-storage', formData)
      } catch (error) {
        if (error.code === 'auth/wrong-password') {
          this.textFieldPassword.invalid.incorrect = true
        }
        if (error.code === 'auth/user-not-found') {
          this.textFieldEmail.invalid.incorrect = true
        }
      }
    }
  }
}
</script>

<style lang="sass">
.login
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  form
    padding-bottom: 21vh
</style>
