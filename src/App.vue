<template>
  <main class="app-main">
    <h1 class="title">Comparador de planos de telefonia</h1>
    <calc-form class="form" />
    <calc-results class="results" />
  </main>
</template>

<script>
  import * as types from '@store/types';
  import CalcForm from '@containers/CalcForm';
  import CalcResults from '@containers/CalcResults';

  export default {
    components: {
      CalcForm,
      CalcResults
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
  .app-main
    display: flex
    flex-direction: column
    width: 90%
    min-height: 100%
    margin-right: auto
    margin-left: @margin-right

    @media screen and (min-width: 768px)
      width: 700px

    > .title
      font-size: 40px
      font-weight: 100
      font-variant: small-caps
      text-align: center

    > .title
    > .form
    > .results
      width: 100%
      margin-bottom: 40px
</style>
