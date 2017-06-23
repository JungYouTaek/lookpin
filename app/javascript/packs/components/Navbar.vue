<template lang="html">
  <nav id="gnb">
    <h1><img src="assets/lookpin.png" alt="lookpin"></h1>
    <h2><a href="/">바이슬림</a></h2>
    <div class="star">
      <img v-if="counter == true" @click="counter = !counter" src="assets/star.png" alt="star">
      <img v-else @click="counter = !counter" src="assets/star-clicked.png" alt="star">
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      counter: true
    }
  }
}
</script>

<style lang="css" scoped>
  #gnb {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0c1a2c;
    color: white;
    width: 100%;
    height: 75px;
  }
  #gnb h1 img {
    margin-left: 15px;
    width: 120px;
    height: 50px;
  }
  #gnb h2 {
    font-size: 40px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  #gnb a {
    color: white;
    text-decoration: none;
  }
  .star {
    margin-right: 30px;
  }
  @media (max-width: 504px) {
    #gnb h1 img {
      margin-left: 5px;
      width: 100px;
      height: 40px;
    }
    #gnb h2 {
      font-size: 30px;
    }
  }
</style>
