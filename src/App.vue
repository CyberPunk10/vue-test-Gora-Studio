<template>
  <div id="app">
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Login</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'

export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout, MainLayout
  }
}
</script>
<style lang="sass">
*
  margin: 0
  padding: 0
html
  font-size: 10px // 1rem = 10px
body
  font-size: 16px // шрифт вернули по умолчанию
  width: 100%
  height: 100%

#app
  font-family: "Montserrat Alternates", Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

// #nav
//   padding: 30px

//   a
//     font-weight: bold
//     color: #2c3e50

//     &.router-link-exact-active
//       color: #42b983
</style>
