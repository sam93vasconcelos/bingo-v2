<template>
  <div>
    <div>
      <button @click="refazer" class="btn btn-danger element-full">Refazer</button>
      <div class="cartao">
        <Linha min="1" linha_atual="1" max="15" />
        <Linha min="16" linha_atual="2" max="30" />
        <Linha min="31" linha_atual="3" max="45" />
        <Linha min="46" linha_atual="4" max="60" />
        <Linha min="61" linha_atual="5" max="75" />
      </div>
    </div>
  </div>
</template>

<script>
import Linha from '../components/Linha'
export default {
  components: {
    Linha
  },

  data() {
    return {
    }
  },
  methods: {
    sortNumber(a, b) {
      return a - b;
    },

    refazer() {
      if(confirm("Deseja mesmo recomeçar?")){
        for (let i = 1; i < 6; i++) {
          localStorage.removeItem('linha-' + i)
          this.$router.push('/')
        }
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
    width: 320px;
    text-align: center;
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
