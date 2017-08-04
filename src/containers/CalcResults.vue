<template>
  <table class="calc-results">
    <thead class="calc-results-head">
      <tr class="row">
        <th class="col" v-for="result in results" :key="result.plan">
          {{ result.plan }}
        </th>
      </tr>
    </thead>
    <tbody class="calc-results-body">
      <tr class="row">
        <td class="col" v-for="result in results" :key="result.plan">
          {{ result.price | moneyFormat }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import * as types from '@store/types';

  export default {
    computed: {
      results() {
        return this.$store.getters[types.CALC_RESULTS];
      }
    },
    filters: {
      moneyFormat(value) {
        if (value === null)
          return '-';

        const { format } = Intl.NumberFormat('pt-BR', {
          currency: 'BRL',
          maximumFractionDigits: 2,
          minimumFractionDigits: 2
        });

        return 'R$' + format(value);
      }
    }
  };
</script>

<style lang="stylus">
  @import '~@styles/theme'

  .calc-results
    border-collapse: collapse

  .calc-results-col
    padding-top: 12px
    padding-bottom: 12px
    font-size: 12px
    text-align: center

    @media screen and (min-width: 360px)
      font-size: 14px

    @media screen and (min-width: 768px)
      font-size: 18px

    &:nth-child(odd)
      background-color: neutral-color + 75%

  .calc-results-head > .row > .col
    @extends .calc-results-col
    border-bottom: 3px solid neutral-color
    box-sizing: border-box
    font-weight: 400
    color: primary-color

  .calc-results-body > .row > .col
    @extends .calc-results-col
</style>
