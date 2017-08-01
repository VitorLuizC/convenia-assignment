<template>
  <div class="entry-select" :class="{ '-open': isOpen }">
    <p class="entry-selected" @click="isOpen = !isOpen">
      {{ value }}
      <img 
        class="entry-select-icon"
        :class="{ '-inverted': isOpen }"
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
  .entry-select-icon
    &.-inverted
      transform: rotate(180deg)
</style>
