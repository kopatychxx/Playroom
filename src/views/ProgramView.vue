<template>
  <v-main>
    <div class="main__titles">
      <h2>Програма</h2>
      <p>Садок Playroom англомовний простір де 80% всього часу діти спілкуються з дорослими англійською мовою.</p>
    </div>
    <img src="../assets/Main/LandingComponentImg.jpg" alt="">
    <div class="main__content">
      <p>Ми працюємо за власною програмою навчання, виховання та розвитку дітей, в основу якої покладена американська програма розвитку дітей дошкільного віку “Creative Curriculum”, але ми також використовуємо елементи сучасних  і ефективних методичних систем раннього розвитку та виховання відомих світових авторів.</p>
      <span>Creative Curriculum</span>
      <p>Навчання в Playroom - це комплекс захопливих уроків, що проходять в ігровій формі. Серед предметів, які ми вивчаємо повноцінна підготовка до школи : математика, навколишній світ, розвиток мовлення. Фізична підготовка поєднана з танцями та театральним дійством. </p>
    </div>
    <div class="main__img">
      <img src="../assets/Main/test.png" alt="">
      <img src="../assets/Main/test.png" alt="">
    </div>
    <p class="text_footer">У нас діти занурюються в англомовний світ гри, навчальних пісень та віршиків з рухливими вправами та можливістю виразити себе у мистецтві. Також двічі на тиждень маємо заняття з французької мови. Наша мета – надати якісні та ефективні знання таким чином, щоб навчальний процес не був нав’язливим для дитини, приносив користь та задоволення
    </p>
  </v-main>
</template>

<script>
export default {
  name: 'ProgramView'
}
</script>

<style scoped>
.v-main {
  margin-top: 70px;
  padding: 0 5% !important;
}
.v-main h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  color: #E83542;
}
.v-main p {
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  color: black;
  width: 550px;
}
.v-main img {
  width: 100%;
}
.main__content {
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 150px;
}
.main__content p,
.main__content span {
  font-size: 25px;
  font-weight: 300;
  text-align: center;
  margin: 0;
}
.main__img {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  column-gap: 50px;
}
.main__img img {
  width: 700px;
}
.text_footer{
  display: flex;
  align-items: center;
  text-align: center;
  width: 1000px !important;
  margin: 10px auto;
  font-size: 25px !important;
  font-weight: 300!important;
}
@media screen and (max-width: 1440px){
  .main__img img{
    width: 600px;
  }
}
@media screen and (max-width: 768px){
  .main__img img{
    width: 300px;
  }
  .text_footer{
    width: 550px !important;
  }
  .main__content{
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
  }
}
@media screen and (max-width: 425px){
  .v-main {
    margin-top: 35px;
  }
  .v-main p {
    font-size: 15px;
    width: 310px;
  }
  .main__img {
    align-items: center;
    flex-direction: column;
    row-gap: 15px;
  }
  .text_footer{
    width: 310px !important;
    font-size: 15px!important;
  }
}
</style>
