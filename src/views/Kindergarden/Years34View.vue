<template>
  <v-main>
    <div class="v-main__header">
      <h2>3-4 роки</h2>
      <p>Дитина активно вчиться і висловлює свої емоції в процесі гри. А також вчиться розрізняти поняття «моє» та «його/її».
        У цьому віці діти часто вигадують собі уявних друзів і вже можуть зайняти себе самостійно на певний проміжок часу.<br>
        Приблизно в 3 роки дитина може будувати речення з 3-5 слів або навіть більше. Артикуляція покращується, і дитина може описати картинку в загальних рисах і навіть вказати на деталі.
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
  name: 'Years34View',
  data: () => ({
    rowItems: [
      {
        name: 'Мислення',
        text: 'Діти уже розрізняють протилежності, такі як «великий — маленький», і розуміють вказівки на розташування предметів у просторі, як «на», «в» і «під».\n' +
          'Їх пам\'ять розвивається також швидко. Вони запам\'ятовують дитячі віршики, починають вказувати на букви і цифри, які запам\'ятали, і називати їх, можуть порахувати до 5, іноді більше, і розділити об\'єкти за кольором і формою.\n',
        img: require('../../assets/Main/test.png')
      },
      {
        name: 'Ігри та навчання',
        text: 'Малюк стає самостійнішим. Він може сам поїсти, одягнути взуття без шнурків, застібнути блискавку на одязі. А також самостійно виконувати деякі щоденні гігієнічні процедури, наприклад, сходити в туалет, помити руки, вмитися.\n' +
          'Чим більше у дитини заохочуватиметься самостійність та відповідальність за вчинки і результат, тим якіснішим буде її подальший розвиток. \n',
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
