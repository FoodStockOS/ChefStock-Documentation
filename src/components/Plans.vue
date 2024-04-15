<template>
  <div class="plans">
    <div class="plan">
      <h2>Basic</h2>
      <p class="price">Free</p>
      <ul>
        <li>500 spaces for stock</li>
        <li>Up to 5 extra accounts</li>
      </ul>
    </div>
    <div class="plan">
      <h2>Premium</h2>
      <p class="price">$29.90</p>
      <ul>
        <li>1500 spaces for stock</li>
        <li>Up to 15 extra accounts</li>
        <li>Message with the suppliers</li>
      </ul>
    </div>
    <div class="plan">
      <h2>Platinum</h2>
      <p class="price">$69.90</p>
      <ul>
        <li>Unlimited spaces for stock</li>
        <li>Up to 40 extra accounts</li>
        <li>Message with the suppliers</li>
        <li>Real-time notifications for missing products</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlansPage'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

body {
  font-family: 'Montserrat', sans-serif;
  background-color: #F4F0DF;
  color: #494847;
}
.plans {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  font-size: medium;
  color: black;
}
.plan {
  border: 1px solid black;
  padding: 20px;
  width: 30%;
}
.price {
  font-size: larger;
  margin-bottom: 20px;
}
ul {
  margin-top: 20px;
}
</style>
