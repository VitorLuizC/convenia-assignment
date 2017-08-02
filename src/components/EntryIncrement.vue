<template>
  <div class="entry-increment">
    <button class="decrement" type="button" @click="$emit('input', value - 1)">
      <img
        class="icon"
        src="~@assets/icons/minus.svg"
        alt="Decrement"
        title="Decrement" />
    </button>

    <input
      class="entry"
      type="number" 
      :value="value"
      @input="event => $emit('input', +event.target.value)" />

    <button class="increment" type="button" @click="$emit('input', value + 1)">
      <img
        class="icon"
        src="~@assets/icons/plus.svg"
        alt="Increment"
        title="Increment" />
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Number,
        default: 0
      }
    }
  };
</script>

<style lang="stylus">
  @import '~@styles/theme';

  .entry-increment-button
    &
      cursor: pointer

    > .icon
      display: block
      transition: transform 250ms ease

    &:active > .icon
      transform: scale(.8)
      transition: transform 150ms ease

  .entry-increment
    &
      position: relative
      display: flex
      align-items: center

    > .increment
    > .decrement
      @extends .entry-increment-button
      position: absolute
      display: block
      width: 24px
      height: @width

    > .increment
      right: 0

    > .decrement
      left: 0

    > .entry
      box-sizing: border-box
      width: 100%
      height: 100%
      padding-right: 36px
      padding-left: @padding-right
      border-bottom: 3px solid neutral-color
      font-size: 18px
      transition: border-bottom-color 500ms ease

    > .entry:focus
    > .entry:hover
      border-bottom-color: secondary-color
</style>
