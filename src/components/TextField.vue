<template lang="pug">
  .text-field
    input.text-field__input
    //- if options.isClickable
      <i class="text-field__icon material-icons">arrow_forward</i>
</template>

<script>
export default {

}
</script>

<style lang="sass">
  $color-dark-shade-75: rgba(31, 32, 65, 0.75)
  $color-dark-shade-50: rgba(31, 32, 65, 0.5)
  $color-dark-shade-25: rgba(31, 32, 65, 0.25)
  .text-field
    position: relative
    max-width: 32rem
    width: 100%
    margin-bottom: 1rem

    &_margin-bottom-5
      margin-bottom: .5rem

    &__input
      background: #FFFFFF
      border: 1px solid $color-dark-shade-25
      border-radius: 4px
      padding: 1.2rem 1.5rem
      width: 100%
      font-size: 1.4rem
      color: $color-dark-shade-75
      outline: none
      box-sizing: border-box
      transition: 0.2s ease all

      &::-webkit-input-placeholder
        color: $color-dark-shade-25
      &::-moz-placeholder
        color: $color-dark-shade-25

      &:hover, &:focus
        border: 1px solid $color-dark-shade-50

    &__icon
      position: absolute
      cursor: pointer
      display: flex
      justify-content: center
      align-items: center
      height: calc(100% - 2px)
      width: 4.3rem
      background-color: #fff
      border-radius: 5px
      top: 1px
      bottom: 0
      right: 1px
      // @include text-linear-gradient

</style>
