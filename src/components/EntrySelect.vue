<template>
  <div class="entry-select" :class="{ '-open': isOpen }">
    <p class="entry-selected" @click="isOpen = !isOpen">
      {{ value }}
      <img 
        class="entry-select-icon"
        src="~@assets/icons/arrow.svg"
        :class="{ '-inverted': isOpen }"
        :alt="isOpen ? 'Close' : 'Open'"
        :title="isOpen ? 'Close' : 'Open'" />
    </p>
    <ul class="entry-select-items">
      <li
        class="entry-select-item"
        v-for="(item, index) in items"
        :key="index"
        @click="$emit('input', item.value)">{{ item.label }}</li>
    </ul>
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
  .entry-select-icon
    &.-inverted
      transform: rotate(180deg)

  .entry-selected
    box-sizing: border-box
    width: 100%
    height: @width

  .entry-select-items
    position: absolute

  .entry-select-item
    cursor: pointer

  .entry-select
</style>
