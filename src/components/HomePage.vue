<template>
  <div class="container">
    <h1 class="welcome-text">Bienvenido a FoodStockOS</h1>
    <div id="app">
    <img class="centered-image" src="../assets/inventariores.jpg" alt="Inventario">
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage'
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.welcome-text {
  text-align: left;
}

.centered-image{
  width: 50%;
  height: auto;
}
</style>
