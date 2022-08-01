<template>
  <v-main>
    <div class="v-main__header">
      <h2>2-3 роки</h2>
      <p>У віці від 2 до 3 років з дитиною відбуваються стрімкі зміни, що стосуються кількох сфер. Одна з найважливіших - емоційний розвиток. Діти починають відчувати нові для себе емоції, їм характерно більш імпульсивна та примхлива поведінка. У цьому віці вони лише вчаться висловлювати почуття. І навчаються справлятися із деякими завданнями самостійно.</p>
    </div>
    <img width="100%" src="../../assets/Main/LandingComponentImg.jpg" alt="">
    <div class="v-main__content">
      <div class="v-main__content-row" v-for="item in rowItems"
           :key="item">
        <img :src='item.img' alt="">
        <div class="v-main__content-row-content">
          <h3>{{item.name}}</h3>
          <p>{{item.text}}</p>
        </div>
      </div>
    </div>
  </v-main>
</template>

<script>
export default {
  name: 'Years23View',
  data: () => ({
    rowItems: [
      {
        name: 'Розвиток мовлення',
        text: 'Приблизно до двох років дитина починає будувати речення з 2-3 слів, використовуючи займенники «я», «ти». Діти вчаться говорити по черзі та озвучувати свої потреби, вести діалог.',
        img: require('../../assets/Main/test.png')
      },
      {
        name: 'Мислення',
        text: 'Діти освоюють такі поняття, як час чи протилежність: наприклад, великий — маленький, день — ніч.\n' +
          'Дитина вже розпізнає частини тіла, вчиться сортувати об\'єкти і знаходити однакові за формою і кольором. Дитина вчиться запам\'ятовувати та характеризувати об\'єкти.',
        img: require('../../assets/Main/test.png')
      },
      {
        name: 'Ігри та навчання',
        text: 'Крім завдань на логіку, корисно розвивати емоційний інтелект, а також діти освоюють рольові ігри. З цікавістю реагують на нову інформацію від дорослих, адже їх життєвий досвід лише здобувається. Тому все нове - цікаво.',
        img: require('../../assets/Main/test.png')
      }
    ]
  })
}
</script>

<style scoped>
.v-main {
  margin-top: 70px;
  padding: 0 5% !important;
}
h2{
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  color: #E83542;
}
.v-main__header p {
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  color: black;
}
.v-main__content {
  margin-top: 50px;
}
.v-main__content h3{
  font-size: 30px;
  color: #E83542;
}
.v-main__content-row-content{
  display: flex;
  width: 100%;
  row-gap: 25px;
  flex-direction: column;
}
.v-main__content-row-content p{
  font-size: 25px;
  font-weight: 300;
}
.v-main__content-row img {
  height: 250px;
}
.v-main__content-row{
  display: flex;
  column-gap: 25px;
  margin-bottom: 25px;
}
@media screen and (max-width: 1024px) {
  .v-main__content-row-content p {
    font-size: 20px;
  }

  .v-main__content-row-content {
    row-gap: 5px;
  }
}
@media screen and (max-width: 768px){
  .v-main__content-row{
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
  }
  .v-main__content-row img {
    width: 500px;
  }
}
@media screen and (max-width: 425px){
  .v-main__content-row img{
    width: 310px;
  }
}
</style>
