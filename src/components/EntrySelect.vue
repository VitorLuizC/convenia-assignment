<template>
  <div class="entry-select" :class="{ '-open': isOpen }">
    <p class="entry-selected" @click="isOpen = !isOpen">
      {{ value }}
      <img 
        class="icon"
        src="~@assets/icons/arrow.svg" alt="" />
    </p>
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
      value: String
    }
  };
</script>

<style lang="stylus">
  .entry-selected
    &.-open
    &.-open > .icon
      transform: rotate(180deg)

  .entry-select
    &.-open > .entry-selected
      @extend .entry-selected.-open
</style>
