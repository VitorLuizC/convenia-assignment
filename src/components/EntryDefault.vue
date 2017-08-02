<template>
  <div class="entry-default">
    <label class="label" v-if="label">{{ label }}</label>
    <input
      class="entry"
      v-if="!$slots.default"
      v-bind="$attrs"
      :type="text || $attrs.type" />
    <slot v-else />
  </div>
</template>

<script>
  export default {
    props: {
      label: String
    }
  };
</script>

<style lang="stylus">
  @import '~@styles/theme'

  .entry-default
    &
      position: relative
      width: 100%
      height: @width

    & > .entry
    & > .entry-group > .entry
      box-sizing: border-box
      width: 100%
      height: 36px
      border-bottom: 3px solid neutral-color
      font-size: 18px
      transition: border-bottom-color 500ms ease

      &:focus
      &:hover
      &.-active
        border-bottom-color: primary-color

    & > .entry-group
      position: relative
</style>

