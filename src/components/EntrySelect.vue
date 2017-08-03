<template>
  <entry-default class="entry-select" :label="label">
    <div class="entry-group -select" :class="{ '-open': isOpen }">
      <p class="entry" @click="isOpen = !isOpen">
        {{ selected }}
        <img 
          class="icon"
          src="~@assets/icons/arrow.svg"
          :class="{ '-inverted': isOpen }"
          :alt="isOpen ? 'Close' : 'Open'"
          :title="isOpen ? 'Close' : 'Open'" />
      </p>
      <transition name="open">
        <ul v-if="isOpen" class="entry-select-items">
          <li
            class="entry-select-item"
            v-for="(item, index) in items"
            :key="index"
            :class="{ '-selected': value === item.value }"
            @click="select(item)">{{ item.label }}</li>
        </ul>
      </transition>
    </div>
  </entry-default>
</template>

<script>
  import EntryDefault from '@components/EntryDefault'

  export default {
    components: { EntryDefault },
    data() {
      return {
        isOpen: false
      }
    },
    props: {
      label: String,
      values: Array,
      value: String,
      valueKey: String,
      labelKey: String
    },
    computed: {
      items() {
        return this.values.map(value => {
          return {
            value: this.valueKey ? value[this.valueKey] : value,
            label: this.labelKey ? value[this.labelKey] : value
          };
        });
      },
      selected() {
        const item = this.items.find(item => item.value === this.value);
        return item ? item[this.labelKey] : null;
      }
    },
    methods: {
      select(item) {
        this.$emit('input', item.value)
        this.isOpen = false
      }
    }
  };
</script>

<style lang="stylus">
  @import '~@styles/theme'
  @import '~@styles/transitions'

  .entry-group.-select
    > .entry
      position: relative
      display: flex
      align-items: center
      padding-right: 32px
      padding-left: 12px
      cursor: pointer

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

    > .entry-select-items
      position: absolute
      top: 100%
      width: 100%

  .entry-select-items
    box-sizing: border-box
    padding: 12px
    background-color: neutral-color
    z-index: 1

    > .entry-select-item + .entry-select-item
      margin-top: 12px

  .entry-select-item
    cursor: pointer
    transition: color 300ms ease

    &.-selected
      color: primary-color + 25%

    &:hover
      color: primary-color
</style>
