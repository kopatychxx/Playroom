<template>
  <v-main>
    <div class="v-main__header">
      <h2>5-6 років</h2>
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
  name: 'Years56View',
  data: () => ({
    rowItems: [
      {
        name: 'Розвиток мовлення',
        text: 'Мова в дітей цього віку вже досить розвинена. Дитина говорить чітко, речення довгі та складні. Дитина може переказати сюжет казки або розповісти свою історію, здатний підтримати розмову з однолітками та дорослими, запам\'ятовує та повторює вірші.\n',
        img: require('../../assets/Main/test.png')
      },
      {
        name: 'Мислення',
        text: 'Це перехідний вік від дошкільнят до молодших школярів.\n' +
          'Дитина 5 – 6 років знає своє повне ім\'я та прізвище, вік, домашню адресу та телефон, ім\'я та по батькові батьків та інших членів сім\'ї. Може розповісти про свою сім\'ю, домашню роботу дорослих та свої обов’язки, турботу їх один про одного, спільні справи вдома. Виявляє турботу про близьких, помічає турботу про себе.\n' +
          '\n' +
          'Цей період найбільш вдалий час у розвитку всіх пізнавальних процесів: уваги, сприйняття, мислення, пам\'яті, уяви. Для цього ускладнюється ігровий матеріал, він стає логічним, інтелектуальним, коли дитині доводиться думати та розмірковувати.\n' +
          '\n' +
          'Головна зміна у свідомості дитини відбувається з її сприйняттям образу «Я». Вона вчиться рефлексувати, аналізувати, ставити собі мету та оцінювати отримані результати, давати звіт у власних діях.\n' +
          'В це час у дітей активно змінюється самооцінка. Якщо спочатку вона формується під впливом стосунків з батьками, то тепер на ці процеси впливають ще і стосунки з однолітками та іншими дорослими (вихователями або вчителями).\n' +
          '\n' +
          'В цьому віці бажано більше уваги приділяти саме психологічному розвитку дитини: спільний час, відпочинок, перегляд мультфільмів та фільмів. Обговорення різних життєвих ситуацій. Цікавість думки дитини та обговорення аргументів.\n' +
          '\n' +
          'Самоаналіз та розвиток критичного мислення дуже сприятимуть загальному розвитку дитини надалі.\n',
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
