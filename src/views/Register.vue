<template>
  <div class="register">
    <form @submit.prevent="onSubmit">
      <TextField v-bind:textField="textFieldName" @func="setValue"/>
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
  name: 'Register',
  data () {
    return {
      textFieldName: {
        title: 'Имя',
        focus: true,
        invalid: { emptyField: false, incorrect: false },
        type: 'text'
      },
      textFieldEmail: {
        title: 'Email',
        invalid: { emptyField: false, incorrect: false },
        type: 'email'
      },
      textFieldPassword: {
        title: 'Password',
        invalid: { emptyField: false, incorrect: false },
        type: 'password'
      },
      button: { type: 'submit', text: 'зарегистрироваться' },
      valueName: '',
      valueEmail: '',
      valuePassword: ''
    }
  },
  validations: {
    valueName: { required, minLength: minLength(2) },
    valueEmail: { email, required },
    valuePassword: { required, minLength: minLength(4) }
  },
  components: {
    TextField, Button
  },
  methods: {
    setValue (value, type) {
      if (type === 'Name') {
        this.valueName = value
        this.textFieldName.value = value
      } else if (type === 'Email') {
        this.valueEmail = value
        this.textFieldEmail.value = value
      } else if (type === 'Password') {
        this.valuePassword = value
        this.textFieldPassword.value = value
      }
      this.handlerInputs()
    },
    handlerInputs () {
      this.textFieldName.invalid.emptyField = (this.$v.valueName.$dirty && !this.$v.valueName.required)
      this.textFieldName.invalid.incorrect = (this.$v.valueName.$dirty && !this.$v.valueName.minLength)
      console.log(this.textFieldName.invalid.incorrect)

      this.textFieldEmail.invalid.emptyField = (this.$v.valueEmail.$dirty && !this.$v.valueEmail.required)
      this.textFieldEmail.invalid.incorrect = (this.$v.valueEmail.$dirty && !this.$v.valueEmail.email)

      this.textFieldPassword.invalid.emptyField = (this.$v.valuePassword.$dirty && !this.$v.valuePassword.required)
      this.textFieldPassword.invalid.incorrect = (this.$v.valuePassword.$dirty && !this.$v.valuePassword.minLength)
      console.log(this.textFieldPassword.invalid.incorrect)
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
        await this.$store.dispatch('register', formData)
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
.register
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  form
    padding-bottom: 21vh
</style>
