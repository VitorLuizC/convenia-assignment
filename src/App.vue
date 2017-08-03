<template>
  <section>
    <form class="calc-form">
      <entry-increment class="entry" v-model="minutes" />
      <entry-select class="entry" v-model="to" :values="['Paulista', 'São Paulo']" />
    </form>
  </section>
</template>

<script>
  import * as types from '@store/types';
  import EntryIncrement from '@components/EntryIncrement';
  import EntrySelect from '@components/EntrySelect';

  export default {
    components: {
      EntryIncrement,
      EntrySelect
    },
    data() {
      return {
        to: 'São Paulo',
        minutes: 200
      }
    },
    created() {
      try {
        this.$store.dispatch(types.FETCH);
      } catch (error) {
        this.error = error;
      }
    }
  };
</script>

<style lang="stylus" src="@styles/base"></style>
<style lang="stylus">
  .calc-form
    width: 640px

    > .entry
      width: calc(100% / 3)
      height: 36px
</style>

