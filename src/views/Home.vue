<template>
  <div>
    <h1 class="text-center">Bem vindo ao bingOnline!</h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <router-link class="btn btn-primary element-full" to="/sorteio">Tela de sorteio</router-link>
      </div>
      <div class="col-md-6">
        <router-link class="btn btn-success element-full" to="/cartela">Modo de cartela</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
    
  },
  data() {
    return {
      numerosSorteados: [],
      sorteando: false,
      ultimoSorteado: '--'
    }
  },
  methods: {
    iniciar() {
      this.sorteando = true
    },

    terminar() {
      if(confirm("Deseja mesmo terminar este sorteio?")) {
        this.sorteando = false
        this.numerosSorteados = []
        this.ultimoSorteado = '--'
      }
    },

    sortNumber(a, b) {
      return a - b;
    },

    sortear() {
      const numerosPorCartao = 75;
      let numeroSorteado = Math.ceil(Math.random() * numerosPorCartao);

      if(this.numerosSorteados.length < numerosPorCartao) {
        while(this.numerosSorteados.includes(numeroSorteado)) {
          numeroSorteado = Math.ceil(Math.random() * numerosPorCartao);
        }
        this.ultimoSorteado = numeroSorteado
        let numerosOrdenar = this.numerosSorteados
        numerosOrdenar.push(numeroSorteado)
        
        numerosOrdenar = numerosOrdenar.sort(this.sortNumber)
        this.numerosSorteados = numerosOrdenar
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
    width: 100px;
    height: 100px;
    padding: 15px 0px;
    text-align: center;
    vertical-align: middle;
  }
</style>
