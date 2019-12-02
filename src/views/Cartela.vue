<template>
  <div>
    <div>
      <button @click="refazer" class="btn btn-danger element-full">Refazer</button>
      <div class="linha-cartelas">
        <div>
          <RenderLinha cartao_atual="1" />
        </div>
        <div>
          <RenderLinha cartao_atual="2" />
        </div>
        <div>
          <RenderLinha cartao_atual="3" />
        </div>
        <div>
          <RenderLinha cartao_atual="4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RenderLinha from '../components/RenderLinha'
export default {
  components: {
    RenderLinha
  },

  data() {
    return {
      qtdCartoes: 4
    }
  },
  methods: {
    sortNumber(a, b) {
      return a - b;
    },

    refazer() {
      if(confirm("Deseja mesmo recomeçar?")){
        this.$router.push('/')
      }
    },

    selecionar(index, i) {
      const element = document.getElementById(`cartao${index}index${i}`)

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
  .cartao {
    border: solid 2px;
    box-sizing: border-box;
    padding: 10px;
    margin: 10px;
    background-color: #fff5a6;
    width: 250px;
    height: 280px;
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
  .linha-cartelas {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  @media(max-width: 768px) {
    .btn {
      margin-top: 10px;
    }
    .cartao {
      margin: 20px auto;
    }
  }
</style>
