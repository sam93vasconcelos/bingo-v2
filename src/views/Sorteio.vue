<template>
  <div>
    <b-button @click="terminar" block variant="danger">Terminar Bingo</b-button>
    <!-- <b-button v-if="!sorteando" @click="iniciar" block variant="success">Iniciar Bingo!</b-button> -->
    <b-button @click="sortear" block variant="success">Sortear número</b-button>
    <div class="row">
      <div class="col-md-12">
        <p class="ultimoSorteado">
          {{ coluna }} - {{ ultimoSorteado }}
        </p>
      </div>
    </div>
    <span class="numeros" v-for="n in numerosSorteados" :key="n">{{ n }}</span>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
    
  },
  data() {
    return {
      numerosSorteados: localStorage.getItem('numerosSorteados') ? localStorage.getItem('numerosSorteados').split(',') : [],
      ultimoSorteado: localStorage.getItem('ultimoSorteado') || '--',
    }
  },

  computed: {
    coluna() {
      if(this.ultimoSorteado >= 1 && this.ultimoSorteado <= 15) {
        return 'B'
      } else if (this.ultimoSorteado >= 16 && this.ultimoSorteado <= 30) {
        return 'I'
      } else if (this.ultimoSorteado >= 31 && this.ultimoSorteado <= 45) {
        return 'N'
      } else if (this.ultimoSorteado >= 46 && this.ultimoSorteado <= 60) {
        return 'G'
      } else if (this.ultimoSorteado >= 61 && this.ultimoSorteado <= 75) {
        return 'O'
      } else {
        return '--'
      }
    }
  },

  methods: {
    terminar() {
      if(confirm("Deseja mesmo terminar este sorteio?")) {
        this.numerosSorteados = []
        this.ultimoSorteado = '--'
        localStorage.removeItem('numerosSorteados')
        localStorage.removeItem('ultimoSorteado')
        this.$router.push('/')
      }
    },

    sortNumber(a, b) {
      return a - b;
    },

    sortear() {
      let numerosPorCartao = 75;
      let numeroSorteado = Math.ceil(Math.random() * numerosPorCartao);
      if(this.numerosSorteados.length < numerosPorCartao) {
        while(this.numerosSorteados.includes(numeroSorteado)) {
          numeroSorteado = Math.ceil(Math.random() * numerosPorCartao);
        }
        this.ultimoSorteado = numeroSorteado

        localStorage.setItem('ultimoSorteado', this.ultimoSorteado)
        let numerosOrdenar = this.numerosSorteados
        numerosOrdenar.push(numeroSorteado)
        
        numerosOrdenar = numerosOrdenar.sort(this.sortNumber)
        this.numerosSorteados = numerosOrdenar
        localStorage.setItem('numerosSorteados', this.numerosSorteados.join())
      } else {
        alert('Todos os números foram sorteados!')
      }
    }
  }
}
</script>

<style>
  span.numeros {
    border: solid 1px #efd72d;
    border-radius: 50%;
    padding: 12px 0px;
    position: relative;
    top: 20px;
    margin-right: 10px;
    margin-bottom: 10px;
    background-color: #fff5ac;
    width: 50px;
    height: 50px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
  }

  .ultimoSorteado {
    position: relative;
    top: 20px;
    margin-right: 10px;
    font-size: 40px;
    display: inline-block;
    border: solid 2px #efd72d;
    background-color: #fff5ac;
    width: 200px;
    height: 100px;
    padding: 15px 0px;
    text-align: center;
    vertical-align: middle;
  }
</style>
