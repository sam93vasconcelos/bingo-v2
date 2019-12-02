<template>
  <div>
    <span v-for="(num, i) in linha" :id="('linha-'+linha_atual+'-'+'index-'+i)" @click="selecionar('linha-'+linha_atual+'-'+'index-'+i)" :key="i" class="num num-linha">{{ num }}</span>
  </div>
</template>

<script>
export default {
  props: [
    'min',
    'max',
    'linha_atual'
  ],
  mounted() {
    const qtdLinha = 5
    
    if(localStorage.getItem(`linha-${this.linha_atual}`)) {
      this.linha = localStorage.getItem(`linha-${this.linha_atual}`).split(',')
    } else {

      while(this.linha.length < qtdLinha) {
        let num = null
        num = this.getRndInteger(parseInt(this.min), parseInt(this.max))
        
        while(this.linha.includes(num)) {
          num = this.getRndInteger(parseInt(this.min), parseInt(this.max))
        }

        this.linha.push(num)
        this.linha = this.linha.sort(this.sortNumber)
        localStorage.setItem(`linha-${this.linha_atual}`, this.linha.join())
      }
    }
  },

  updated() {
    const nulo = document.getElementById('linha-3-index-2')
    nulo.classList.add('imagem-bingo')
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

        // let marcados = localStorage.getItem('marcados') ? localStorage.getItem('marcados').split(',') : []
        // marcados.push(`cartao${index}index${i}`)
        // localStorage.setItem('marcados', marcados.join())

        element.style.backgroundColor = '#aca25b'
        element.className += ' marcado'
      } else {

        // let marcados = localStorage.getItem('marcados') ? localStorage.getItem('marcados').split(',') : []
        // let indexofarray = marcados.indexOf(`cartao${index}index${i}`)
        
        // if(indexofarray == 0) {
        //   marcados.shift()
        // } else if (indexofarray == marcados.length - 1) {
        //   marcados.pop()
        // } else {
        //   marcados.splice(indexofarray, 1)
        // }
        
        // localStorage.setItem('marcados', marcados.join())

        element.style.backgroundColor = 'inherit'
        element.classList.remove('marcado')
      }
    }
  },
}
</script>

<style>
  .num-linha {
    display: inline-block;
    width: 50px;
  }
  .imagem-bingo {
    background-image: url('../assets/lottery512.png');
    background-repeat: no-repeat;
    background-size: cover;
    color: transparent;
    background-color: #000!important;
  }
</style>