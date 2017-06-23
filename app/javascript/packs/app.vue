<template lang="html">
  <div id="app">
    <Navbar />
    <List />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import List from './components/List.vue'
export default {
  components: {
    Navbar,
    List
  }
}
</script>

<style scoped>

</style>
