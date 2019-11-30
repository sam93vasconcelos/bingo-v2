<template>
  <div id="app" class="container">
    <img src="./assets/lottery.png" class="fleft" alt="">
    <h1><router-link class="black" to="/">BingOnline</router-link></h1>
    <hr>
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view/>
    </transition>
  </div>
</template>

<style>
  /* Routes Transitions */
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }


  .fleft {
    float: left;
    position: relative;
    top: 7px;
    right: 10px;
  }
  .element-full {
    width: 100%;
  }
  .black {
    color: black;
    text-decoration: none;
  }
  .black:hover {
    color: black;
    text-decoration: none;
  }
</style>
