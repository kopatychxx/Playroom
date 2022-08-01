<template>
  <v-main>
    <div class="v-main__titles">
      <h2>Інфраструктура</h2>
      <span>Зручне розташування. Знаходимося у центрі міста</span>
    </div>
    <img class="mainlanding__img" src="../assets/Main/LandingComponentImg.jpg" alt="">
    <div class="v-main__content">
      <p>
        Наявність стоянка;<br>
        Власний огороджений дитячий майданчик;<br>
        Територія закладу знаходиться під відеонаглядом, батьки можуть переглядати записи;<br>
        Світлі та затишні класи;
      </p>
    </div>
    <div class="v-main__img">
      <img src="../assets/Main/test.png" alt="">
      <img src="../assets/Main/test.png" alt="">
    </div>
  </v-main>
</template>

<script>
export default {
  name: 'InfrastructureView'
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
}
.v-main__img {
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
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
