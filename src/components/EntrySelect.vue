<template>
  <div class="entry-select" :class="{ '-open': isOpen }">
    <p class="entry-selected" @click="isOpen = !isOpen">
      {{ value }}
      <img 
        class="icon"
        src="~@assets/icons/arrow.svg"
        :class="{ '-inverted': isOpen }"
        :alt="isOpen ? 'Close' : 'Open'"
        :title="isOpen ? 'Close' : 'Open'" />
    </p>
    <transition name="slide">
      <ul v-if="isOpen" class="entry-select-items">
        <li
          class="entry-select-item"
          v-for="(item, index) in items"
          :key="index"
          @click="$emit('input', item.value)">{{ item.label }}</li>
      </ul>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false
      }
    },
    props: {
      values: Array,
      value: String,
      valueKey: {
        type: String,
        default: null
      },
      labelKey: {
        type: String,
        default: null
      }
    },
    computed: {
      items() {
        return this.values.map(value => {
          return {
            value: this.valueKey ? value[this.valueKey] : value,
            label: this.labelKey ? value[this.labelKey] : value
          };
        });
      }
    }
  };
</script>

<style lang="stylus">
  @import '~@styles/theme'
  @import '~@styles/transitions'

  .entry-selected
    box-sizing: border-box
    display: flex
    align-items: center
    border-bottom: 3px solid neutral-color
    transition: border-bottom-color 500ms ease

    > .icon
      position: absolute
      top: 50%
      right: 0
      display: block
      width: 24px
      height: @width
      transform: translateY(-50%)
      transition: transform 500ms ease

    > .icon.-inverted
      transform: translateY(-50%) rotate(180deg)

    &:hover
      border-bottom-color: secondary-color

  .entry-select
    position: relative

    > .entry-selected
      position: relative
      width: 100%
      height: @width

    > .entry-select-items
      position: absolute
      top: 100%

    &.-open > .entry-selected
      border-bottom-color: secondary-color

  .entry-select-item
    cursor: pointer
</style>
