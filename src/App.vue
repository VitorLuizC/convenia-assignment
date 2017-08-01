<template>
  <section>
    <form class="calc-form">
      <entry-increment class="input" v-model="minutes" />
      <entry-select v-model="to" />
    </form>
  </section>
</template>

<script>
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
    }
  };
</script>

<style lang="stylus" src="@styles/base"></style>
<style lang="stylus">
  .calc-form
    width: 640px

    > .input
      width: calc(100% / 3)
</style>

