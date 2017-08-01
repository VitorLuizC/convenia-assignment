<template>
  <p>{{ message }}</p>
</template>

<script>
  import * as types from './store/types';

  export default {
    computed: {
      message() {
        return this.$store.getters[types.MESSAGE];
      }
    }
  };
</script>
