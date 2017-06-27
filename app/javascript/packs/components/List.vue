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
    <button v-if="edit == false"type="button" name="button" @click="edit = true">편집</button>
    <button v-else type="button" name="button" @click="remove(star)">삭제</button>
    <section class="product">
      <article v-for="(list, index) in search" :key="list.id" :value="index" @click="star.push(index)">
        <img :src="list.img" class="product-image" alt="product-image" />
        <p>{{ list.name }}</p>
        <p><strong>{{ list.price | number}}원</strong></p>
        <hr />
        <p v-if="list.check==0" @click="list.check++" class="pin"><img src="assets/pin.png" alt="pin-image" key="unclick"/>핀하기</p>
        <p v-else @click="list.check--" class="pin"><img src="assets/pin-clicked.png" alt="pin-clicked-image" key="click"/>핀하기</p>
      </article>
    </section>
  </main>
</template>

<script>
  export default {
    data: function () {
      return {
        lists: [
          { name: "챠르르 타올 단가라 반팔티", price: 16000, img: "assets/1.jpg", sell: 102, id: 1, check: 0 },
          { name: "5부 스테이 호일 반팔티", price: 13700, img: "assets/2.jpg", sell: 120, id: 2, check: 0 },
          { name: "5부 이슈 보트넥 잔단가라 반팔티", price: 17000, img: "assets/3.jpg", sell: 84, id: 3, check: 0 },
          { name: "5부 에세이 보트넥 단가라 반팔티", price: 8900, img: "assets/4.jpg", sell: 20, id: 4, check: 0 },
          { name: "7부 엠보 반반콤비 티", price: 9900, img: "assets/5.jpg", sell: 196, id: 5, check: 0 },
          { name: "프렌즈타올 단가라 반팔티", price: 16900, img: "assets/6.jpg", sell: 35, id: 6, check: 0 }
        ],
        query: '',
        edit: false,
        star: []
      }
    },
    methods: {
      remove: function (arr) {
        console.log(this.star)
        this.edit = false
        this.star.sort(function(a,b) { return a-b })
        for (var i = 0; i < arr.length; i++) {
          this.lists.splice(arr[i]-i,1)
        }
        this.star = []
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
    },
    filters: {
      number: function(value) {
        return new Intl.NumberFormat().format(value)
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
    color: black;
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
    border: 1px solid #f5f5f5;
  }
  .product {
    padding-left: 10%;
  }
  @media (max-width: 504px) {
    .product {
      padding-left: 21%;
    }
  }
  article {
    display: inline-block;
    width: 220px;
    height:430px;
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
  .pin {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
