<template>
  <div>
    <div v-if="!gerado" class="form-group">
      <div class="row">
        <div class="col-md-3">
          <select id="qtd" v-model="qtdCartoes" class="form-control">
            <option value="0" disabled selected>Quantidade de cartões</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div class="col-md-6">
          <button @click="sortear" class="btn btn-success element-full">Gerar</button>
        </div>
      </div>
    </div>
    <div v-if="gerado">
      <button @click="refazer" class="btn btn-danger element-full">Refazer</button>
      <div class="row cartao mt-4" v-for="(cartao, index) in cartoes" :key="index">
        <div class="col-sm-12"><h2>Cartão {{ index + 1 }}</h2></div>
        <span @click="selecionar(index, i)" :id="('cartao'+index+'index'+i)"  v-for="(num, i) in cartao" :key="i" class="num col-md-2 col-3">{{ num }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const qtd = localStorage.getItem('qtdCartoes') || 0
    this.qtdCartoes = qtd
    let cartoesStorage = []
    let cartaoAtual = null

    for (let i = 0; i < qtd; i++) {
      cartaoAtual = localStorage.getItem(`cartao${i}`).split(',')
      cartoesStorage.push(cartaoAtual)
    }
    if(cartoesStorage.length > 0) {
      this.gerado = true
    }
    this.cartoes = cartoesStorage
  },

  updated() {
    const marcados = localStorage.getItem('marcados') ? localStorage.getItem('marcados').split(',') : []

    marcados.map(m => {
      const element = document.getElementById(m)
      if(element) {
        element.style.backgroundColor = '#aca25b'
        element.className += ' marcado'
      }
    })
  },

  data() {
    return {
      gerado: false,
      qtdCartoes: 0,
      cartoes: []
    }
  },
  methods: {
    sortNumber(a, b) {
      return a - b;
    },
    
    sortear() {
      const numBingo = 75
      const numCartao = 24
      
      if(this.qtdCartoes > 0 && this.qtdCartoes < 5) {
        
        this.cartoes = []
        while(this.cartoes.length < this.qtdCartoes) {
          let cartao = []
          
          while(cartao.length < numCartao) {
            let numeroSorteado = Math.ceil(Math.random() * numBingo);
            while(cartao.includes(numeroSorteado)) {
              numeroSorteado = Math.ceil(Math.random() * numBingo);
            }
            cartao.push(numeroSorteado)
          }
          
          cartao = cartao.sort(this.sortNumber)
          
          this.cartoes.push(cartao)

        }
        
      } else if(this.qtdCartoes <= 0) {
        alert('Selecione a quantidade de cartões!')
      }
      
      localStorage.setItem('qtdCartoes', this.cartoes.length)
      this.cartoes.map((c, i) => {
        localStorage.setItem('cartao' + i, c)
      })
      this.gerado = true
    },

    refazer() {
      if(confirm("Deseja mesmo recomeçar?")){
        for (let i = 0; i < 4; i++) {
          localStorage.removeItem('cartao' + i)
        }
        localStorage.removeItem('qtdCartoes')
        localStorage.removeItem('marcados')
        this.cartoes = []
        this.gerado = false
      }
    },

    selecionar(index, i) {
      const element = document.getElementById(`cartao${index}index${i}`)
      if(!element.classList.contains('marcado')) {

        let marcados = localStorage.getItem('marcados') ? localStorage.getItem('marcados').split(',') : []
        marcados.push(`cartao${index}index${i}`)
        localStorage.setItem('marcados', marcados.join())

        element.style.backgroundColor = '#aca25b'
        element.className += ' marcado'
      } else {

        let marcados = localStorage.getItem('marcados') ? localStorage.getItem('marcados').split(',') : []
        let indexofarray = marcados.indexOf(`cartao${index}index${i}`)
        
        if(indexofarray == 0) {
          marcados.shift()
        } else if (indexofarray == marcados.length - 1) {
          marcados.pop()
        } else {
          marcados.splice(indexofarray, 1)
        }
        
        localStorage.setItem('marcados', marcados.join())

        element.style.backgroundColor = 'inherit'
        element.classList.remove('marcado')
      }
    }
  },
}
</script>

<style>
  .cartao {
    border: solid 2px;
    box-sizing: border-box;
    padding: 20px;
    margin: 10px;
    background-color: #fff5a6;
  }
  span.num {
    border: solid 0.5px;
    text-align: center;
    padding: 10px 0px;
    cursor: pointer;
  }
  span.num:hover {
    background-color: #ccc171;
  }
  @media(max-width: 768px) {
    .btn {
      margin-top: 10px;
    }
  }
</style>
