<template>
  <div class="coluna-cartela">
    <p v-for="(num, i) in linha" :id="('cartao-'+cartao_atual+'-'+'linha-'+linha_atual+'-'+'index-'+i)" @click="selecionar('cartao-'+cartao_atual+'-'+'linha-'+linha_atual+'-'+'index-'+i)" :key="i" :class="('linha-'+linha_atual+'-'+'index-'+i) + ' num' + ' num-linha'">{{ num }}</p>
  </div>
</template>

<script>
export default {
  props: [
    'min',
    'max',
    'linha_atual',
    'cartao_atual'
  ],
  mounted() {
    const qtdLinha = 5
    
    while(this.linha.length < qtdLinha) {
      let num = null
      num = this.getRndInteger(parseInt(this.min), parseInt(this.max))
      
      while(this.linha.includes(num)) {
        num = this.getRndInteger(parseInt(this.min), parseInt(this.max))
      }

      this.linha.push(num)
      this.linha = this.linha.sort(this.sortNumber)
    }
  },

  updated() {
    const nulo = document.querySelectorAll('.linha-3-index-2')
    for (let i = 0; i < 4; i++) {
      nulo[i].classList.add('imagem-bingo')
    }
  },

  data() {
    return {
      linha: []
    }
  },

  methods: {
    
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min) ) + min;
    },

    sortNumber(a, b) {
      return a - b;
    },
    
    selecionar(id) {
      const element = document.getElementById(id)
      if(!element.classList.contains('marcado')) {
        element.style.backgroundColor = '#aca25b'
        element.className += ' marcado'
      } else {
        element.style.backgroundColor = 'inherit'
        element.classList.remove('marcado')
      }
    }
  },
}
</script>

<style>
  .num-linha {
    width: 46px;
    height: 46px;
    line-height: 46px;
    border: solid 1px;
    margin-bottom: 0px;
    margin-top: -1px;
    margin-left: -1px;
    cursor: pointer;
  }
  .num-linha:hover {
    background-color: #f7e66a;
  }
  .coluna-cartela {
    float: left;
  }
  .imagem-bingo {
    background-image: url('../assets/lottery512.png');
    background-repeat: no-repeat;
    background-size: cover;
    color: transparent;
    background-color: #000!important;
  }
</style>