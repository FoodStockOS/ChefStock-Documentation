<template>
  <div class="team">
    <div class="member">
      <img class="centered-image" src="../assets/tomas.jpg" alt="Tomas">
      <h2>Tomas Ortiz Fajardo</h2>
    </div>
    <div class="member">
      <img class="centered-image" src="../assets/joan.jpeg" alt="Joan">
      <h2>Joan Jefferson Talizo Balbin</h2>
    </div>
    <div class="member">
      <img src="../assets/jose.png" alt="Jose">
      <h2>José Daniel Mario Calderón Huamán</h2>
    </div>
    <div class="member">
      <img src="./path-to-image4.jpg" alt="Miembro 4">
      <h2>Nombre Completo 4</h2>
    </div>
    <div class="member">
      <img src="./path-to-image5.jpg" alt="Miembro 5">
      <h2>Nombre Completo 5</h2>
    </div>
  </div>
</template>

<script>
import tomas from '@/assets/tomas.jpg';

export default {
  name: 'AboutUsPage',
  data() {
    return {
      tomas: tomas
    }
  }
}
</script>

<style scoped>
.team {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

.member {
  text-align: center;
}

.member img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>