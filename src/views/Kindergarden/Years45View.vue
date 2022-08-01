<template>
  <v-main>
    <div class="v-main__header">
      <h2>4-5 роки</h2>
      <p>Важливе місце у розвитку займає спілкування з іншими дітьми, діяльність та навчання у саду.
        Діти вчаться будувати стосунки з іншими самостійно, вирішувати конфлікти, ділитися, домовлятися та об'єднуватися за інтересами, дотримуватися правил поведінки.
      </p>
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
  name: 'Years45View',
  data: () => ({
    rowItems: [
      {
        name: 'Мислення',
        text: 'У цьому віці діти часто починають підготовку до школи у вигляді: читання, підготовки руки до письма, вирішення логічних завдань та розвитку емоційного інтелекту.\n' +
          'Тут важливо, щоб у дитини з\'явився режим, а батьки допомагали його дотримуватися. Дитина вже активно вчиться самоорганізації\n',
        img: require('../../assets/Main/test.png')
      },
      {
        name: 'Розвиток мовлення',
        text: 'Дитина вже добре знає літери, формує думки в розповіді та перекази і озвучує їх. Вміє чітко сказати про свої потреби, діяльність та розповісти про якісь події.\n' +
          'Іноді в дітей, на цьому етапі, можуть бути затримки розвитку промови. У такому разі вам допоможуть заняття з логопедом.\n',
        img: require('../../assets/Main/test.png')
      },
      {
        name: 'Ігри та навчання',
        text: 'Основним способом пізнавати світ залишаються ігри. Діти досліджують різницю між фантазією та реальністю, пробують сюжетно-рольові ігри - наприклад, «дочки-матері», «лікарня», «школа/дитячий садок».\n' +
          'Вони також можуть цікавитися, як влаштовано тіло — чуже і їхнє власне. \n',
        img: require('../../assets/Main/test.png')
      },
      {
        name: 'Задавати відповідні питання',
        text: 'Дорослим поруч треба бути готовими та іти на діалог з дітьми.\n' +
          'Вони прагнуть аби їх сприймали як дорослих, тож буде корисно будувати якісно інші стосунки.\n',
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
