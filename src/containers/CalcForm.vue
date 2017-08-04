<template>
  <form class="calc-form">
    <entry-increment
      class="entry"
      label="Minutos"
      v-model="params.minutes" />

    <entry-select
      class="entry"
      label="Origem"
      label-key="label"
      value-key="value"
      v-model="params.origin"
      :values="details" />

    <entry-select
      class="entry"
      label="Destino"
      label-key="label"
      value-key="value"
      v-model="params.destiny"
      :values="details" />
  </form>
</template>

<script>
  import { mapGetters } from 'vuex';
  import * as types from '@store/types';
  import EntryIncrement from '@components/EntryIncrement';
  import EntrySelect from '@components/EntrySelect';

  export default {
    components: {
      EntryIncrement,
      EntrySelect
    },
    computed: mapGetters({
      params: types.CALC_PARAMS,
      details: types.DETAILS
    })
  };
</script>

<style lang="stylus">
  .calc-form
    display: flex
    flex-direction: column

    @media screen and (min-width: 768px)
      flex-direction: row
      justify-content: space-between

    > .entry
      width: 100%;

      @media screen and (min-width: 768px)
        width: 30%;

    > .entry + .entry
      margin-top: 10px

      @media screen and (min-width: 768px)
        margin-top: 0

</style>
