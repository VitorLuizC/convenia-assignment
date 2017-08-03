<template>
  <section>
    <form class="calc-form">
      <entry-increment
        class="entry"
        label="Minutes"
        v-model="minutes" />

      <entry-select
        class="entry"
        label="Origin"
        label-key="label"
        value-key="value"
        v-model="origin"
        :values="details" />

      <entry-select
        class="entry"
        label="Destiny"
        label-key="label"
        value-key="value"
        v-model="destiny"
        :values="details" />
    </form>
  </section>
</template>

<script>
  import * as types from '@store/types';
  import EntryIncrement from '@components/EntryIncrement';
  import EntrySelect from '@components/EntrySelect';

  function calc() {
    this.$store.dispatch(types.RESULTS_CALC, {
      origin: this.origin,
      destiny: this.destiny,
      minutes: this.minutes
    })
  }

  export default {
    components: {
      EntryIncrement,
      EntrySelect
    },
    data() {
      return {
        origin: null,
        destiny: null,
        minutes: null
      }
    },
    computed: {
      details() {
        return this.$store.getters[types.DETAILS];
      }
    },
    watch: {
      origin: calc,
      destiny: calc,
      minutes: calc
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
</style>

