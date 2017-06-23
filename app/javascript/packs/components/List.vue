<template lang="html">
  <main>
    <section class="sort">
      <ul>
        <li><a href="#" @click.prevent="search=new_item">신상순</a></li>
        <li><a href="#" @click.prevent="search=sell_item">인기순</a></li>
        <li><a href="#" @click.prevent="search=cheap_item">저가순</a></li>
      </ul>
      <input v-model="query" placeholder="상품검색"/>
    </section>
    <hr />
    <section class="product">
      <article v-for="list in search">
        <img :src="list.img" class="product-image" alt="product-image" />
        <p>{{ list.name }}</p>
        <p><strong>{{ list.price }}원</strong></p>
        <hr />
      </article>
    </section>
  </main>
</template>

<script>
  export default {
    data: function () {
      return {
        lists: [
          { name: "챠르르 타올 단가라 반팔티", price: 16000, img: "assets/1.jpg", sell: 102, id: 1 },
          { name: "5부 스테이 호일 반팔티", price: 13700, img: "assets/2.jpg", sell: 120, id: 2 },
          { name: "5부 이슈 보트넥 잔단가라 반팔티", price: 17000, img: "assets/3.jpg", sell: 84, id: 3 },
          { name: "5부 에세이 보트넥 단가라 반팔티", price: 8900, img: "assets/4.jpg", sell: 20, id: 4 },
          { name: "7부 엠보 반반콤비 티", price: 9900, img: "assets/5.jpg", sell: 196, id: 5 },
          { name: "프렌즈타올 단가라 반팔티", price: 16900, img: "assets/6.jpg", sell: 35, id: 6 }
        ],
        query: '',
        counter: true
      }
    },
    computed: {
      new_item: function () {
        return this.lists.sort(function(a,b) {
          return b.id - a.id
        })
      },
      sell_item: function () {
        return this.lists.sort(function(a,b) {
          return b.sell - a.sell
        })
      },
      cheap_item: function () {
        return this.lists.sort(function(a,b) {
          return a.price - b.price
        })
      },
      search: function () {
        var query = this.query
        return this.lists.filter(function (list) {
          return list.name.includes(query)
        })
      }
    }
  }
</script>

<style lang="css" scoped>
  section {
    background-color: #f5f5f5;
  }
  .sort {
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sort ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .sort li {
    margin: 0 10px;
  }
  .sort li a {
    text-decoration: none;
    display: block;
  }
  .sort input {
    width: 100px;
    height: 14px;
    font-size: 16px;
    font-weight: 300;
    border: none;
    background-color: #f5f5f5;
    margin-left: 10px;
  }
  hr {
    margin: 0;
  }
  .product {
    padding-left: 10%;
  }
  article {
    display: inline-block;
    width: 220px;
    height:400px;
    margin: 1.5%;
    background-color: white;
    text-align: center;
  }
  .product-image {
    max-width: 220px;
    height: 300px;
    margin-bottom: 20px;
  }
  article p {
    max-width: 220px;
    height: 30px;
    margin: 0 auto;
  }
</style>
