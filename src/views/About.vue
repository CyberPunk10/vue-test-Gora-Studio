<template>
  <div class="logout">
    <form @submit.prevent="logout">
    <Button class="logout__btn" v-bind:button="button"/>
    </form>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  data () {
    return {
      button: { type: 'submit', text: 'logout' }
    }
  },
  components: {
    Button
  },
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="sass">
.logout
  height: 100vh
  width: 100%
  background-image: url('../assets/bg.jpg')
  background-position: left center
  background-size: cover
  @media screen and (max-width: 1024px)
    background-position: 46% center

  form
    display: flex
    justify-content: flex-end
    @media screen and (max-width: 768px)
      justify-content: center

  &__btn
    width: 21rem
</style>
