<script setup lang="ts">
  // [DEL]: import HelloWorld from './components/HelloWorld.vue'
  const appTitle = import.meta.env.VITE_APP_TITLE
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <!-- <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" /> -->
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <h1>{{ appTitle }}</h1>
  <router-link to="/home">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link>
  <router-view />
</template>

<style scoped>
  .logo {
    padding: 1.5em;
    height: 6em;
    transition: filter 300ms;
    will-change: filter;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
