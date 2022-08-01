<template>
  <v-main>
    <div class="v-main__titles">
      <h2>Вартість</h2>
    </div>
    <img class="mainlanding__img" src="../assets/Main/LandingComponentImg.jpg" alt="">
    <div class="v-main__content">
      <div class="v-main__content-block">
        <h3>Київ</h3>
        <span>Повний день 8:30-19:00</span>
        <p>500 євро (за курсом НБУ) + оплата за харчування</p>
        <span>Короткий день  8:30-13:30</span>
        <p>350 євро (за курсом НБУ) + оплата за харчування</p>
        <p>Реєстраційний внесок – 18000 грн<br>
          Знижка на 2-гу дитину 10%
        </p>
      </div>
      <div class="v-main__content-block">
        <h3>Козин</h3>
        <span>Повний день 8:30-19:00</span>
        <p>800 євро (за курсом НБУ) з харчуванням</p>
        <span>Короткий день  8:30-13:30</span>
        <p>600 євро (за курсом НБУ) з харчуванням</p>
        <p>Реєстраційний внесок 22 000 грн<br>
          Знижка на 2-гу дитину 10%
        </p>
      </div>
    </div>
    <div class="v-main__img">
      <img src="../assets/Main/test.png" alt="">
      <img src="../assets/Main/test.png" alt="">
    </div>
  </v-main>
</template>

<script>
export default {
  name: 'PriceView'
}
</script>

<style scoped>
.v-main {
  margin-top: 70px;
  padding: 0 5%!important;
}
.v-main__titles h2{
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  color: #E83542;
}
.v-main__titles span{
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  color: black;
}
.mainlanding__img {
  width: 100%;
}
.v-main__content{
  display: flex;
  justify-content: center;
  margin: 35px auto;
  text-align: center;
  font-size: 25px;
  column-gap: 150px;
}
.v-main__img {
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
}
.v-main__content-block h3 {
  color: #E83542;
  font-size: 35px;
}
.v-main__content-block span {
  font-weight: 500;
}
@media screen and (max-width: 1440px){
  .v-main__img img {
    width: 550px;
  }
}
@media screen and (max-width: 1024px){
  .v-main__img img {
    width: 450px;
  }
}
@media screen and (max-width: 768px){
  .v-main__img img {
    width: 310px;
  }
  .v-main__content {
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 425px){
  .v-main{
    margin-top: 20px;
  }
  .v-main h2 {
    font-size: 35px;
  }
  .v-main span {
    font-size: 25px;
  }
  .v-main__img {
    align-items: center;
    flex-direction: column;
    row-gap: 20px;
  }
}
</style>
