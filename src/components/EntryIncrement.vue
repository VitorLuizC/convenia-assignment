<template>
  <entry-default class="entry-increment" :label="label">
    <div class="entry-group -increment">
      <button class="decrement" type="button" @click="$emit('input', (value || 0) - 1)">
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

      <button class="increment" type="button" @click="$emit('input', (value || 0) + 1)">
        <img
          class="icon"
          src="~@assets/icons/plus.svg"
          alt="Increment"
          title="Increment" />
      </button>
    </div>
  </entry-default>
</template>

<script>
  import EntryDefault from '@components/EntryDefault'

  export default {
    components: { EntryDefault },
    props: {
      label: String,
      value: Number
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

  .entry-group.-increment
    &
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
      padding-right: 36px
      padding-left: @padding-right
      transition: border-bottom-color 500ms ease
</style>
