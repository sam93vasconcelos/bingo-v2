<template>
  <div class="cartao">
    <span class="letras-guia">B</span>
    <span class="letras-guia">I</span>
    <span class="letras-guia">N</span>
    <span class="letras-guia">G</span>
    <span class="letras-guia">O</span>
    <br>
    <Linha :cartao_atual="cartao_atual" min="1" linha_atual="1" max="15" />
    <Linha :cartao_atual="cartao_atual" min="16" linha_atual="2" max="30" />
    <Linha :cartao_atual="cartao_atual" min="31" linha_atual="3" max="45" />
    <Linha :cartao_atual="cartao_atual" min="46" linha_atual="4" max="60" />
    <Linha :cartao_atual="cartao_atual" min="61" linha_atual="5" max="75" />
  </div>
</template>

<script>
import Linha from '../components/Linha'
export default {
  props: [
    'cartao_atual'
  ],
  components: {
    Linha
  }
}
</script>

<style>
  .letras-guia {
    font-weight: bold;
    text-align: center;
    width: 44px;
    margin-bottom: 5px;
    display: inline-block;
  }
</style>