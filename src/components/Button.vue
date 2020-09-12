<template lang="pug">
  .btn.btn-fill.btn_max-width-320
    .btn__bg
    span.btn__title.btn_padding-right-3 "забронировать"
      <i class="btn__icon material-icons">arrow_forward</i>

</template>

<style lang="sass">
$border-radius: 2.2rem
$color-dark-shade-100: #1F2041
$color-dark-shade-75: rgba(31, 32, 65, 0.75)
$color-dark-shade-50: rgba(31, 32, 65, 0.5)
$color-dark-shade-25: rgba(31, 32, 65, 0.25)
$color-dark-shade-10: rgba(31, 32, 65, 0.10)
$color-dark-shade-5: rgba(31, 32, 65, 0.05)
$color-purple: #BC9CFF

// кнопка (общие свойства)
.btn
  cursor: pointer
  user-select: none
  position: relative
  width: 100%
  max-width: 9.9rem
  height: 4.4rem

  .btn__bg,
  .btn__bg:before
    position: absolute
    content: ""
    top: 0
    right: 0
    bottom: 0
    left: 0
    border-radius: $border-radius
    background-color: $color-purple

  &__title
    position: absolute
    content: ""
    line-height: 4.4rem
    text-align: center
    width: 100%
    // top: 50%
    // left: 50%
    // transform: translate(-50%, -50%)
    white-space: nowrap
    // font-family: $Montserrat
    font-weight: bold
    font-size: 1.2rem
    text-transform: uppercase
    color: $color-dark-shade-100
    color: $color-purple
    padding-bottom: .1rem

  // кнопка с заливкой
  &-fill
    .btn__bg
      // @include linear-gradient
    .btn__title
      color: #fff

  // кнопка с бордером
  &-border
    .btn__bg
      // @include linear-gradient
      &:before
        margin: 2px
        width: calc(100% - 4px)
        height: calc(100% - 4px)
        background: #fff

  // кнопка без заливки и бордера
  &-minimalism
    position: static
    width: auto
    max-width: none
    height: 1.6rem
    line-height: 1.6rem
    padding-left: 1px
    text-align: left
    // @include font-how-h3($color: $color-purple)

  // модификатор: deactive
  &-fill.btn_deactive
    opacity: .5

  &-border.btn_deactive
    .btn__bg
      opacity: .5

  &-minimalism.btn_deactive
    color: $color-dark-shade-50

  // модификатор: width
  &_max-width-320
    max-width: 32rem

  &_min-width-250
    min-width: 25rem

  // добавление стрелки к кнопке
  &__icon
    position: absolute
    cursor: pointer
    display: flex
    justify-content: center
    align-items: center
    height: calc(100% - 2px)
    width: 4.3rem
    // @include linear-gradient
    border-radius: $border-radius
    top: 1px
    bottom: 0
    right: 1px
    color: #fff

  // модификатор: margin
  &_margin-top-20
    margin-top: 2rem

  &_margin-bottom-30
    margin-bottom: 3rem

  // модификатор: padding-right
  &_padding-right-3
    padding-right: .3rem

// https://css-tricks.com/gradient-borders-in-css/
</style>
