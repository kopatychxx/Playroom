<template>
  <div class="lessonsComponent" style="
    padding: 0 5%;
    font-family: 'Montserrat Alternates', sans-serif;
    margin-bottom: 70px;
  ">
    <h3 style="
      margin: 70px 0;
      font-style: normal;
      font-weight: 600;
      font-size: 58px;
      color: #64B3F4;
    ">Заняття</h3>
    <v-responsive
      class="overflow-y-auto"
      max-height="700"
      style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 15px">
      <v-lazy
        v-for="item, i in items"
        :key="i"
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
        <v-card
          class="card-row"
          elevation="0"
          style="
          border-radius: 0;
            display: flex;
            align-items: center;
            padding: 20px;
            justify-content: space-between;
            height: 200px;
            border-top: 1px solid gray;
            border-bottom: 1px solid gray;
          ">
          <span style="
            font-style: normal;
            font-weight: 600;
            font-size: 58px;
            color: #E83542;
          ">
            {{item.number}}
          </span>
          <div class="card_text" style="
          margin: 0 200px;
          position: relative;
          right: 150px;
          ">
            <h4 style="
              font-style: normal;
              font-weight: 500;
              font-size: 30px;
              color: #E83542;
          ">
              {{item.title}}
            </h4>
            <p style="
              max-width: 675px;
              font-style: normal;
              font-weight: 300;
              font-size: 16px;
              color: #000000;
            ">
              {{item.text}}
            </p>
          </div>
          <img :src="item.img" alt="" height="150">
        </v-card>
      </v-lazy>
    </v-responsive>
  </div>
</template>

<script>
export default {
  name: 'LessonsComponent',
  data: () => ({
    isActive: false,
    items: [
      { number: '01', title: 'Circle Time', text: 'привітання в колі, дискусії на теми погоди, емоцій та настрою, розвиток комунікативних навичок за допомогою різних ігор. Виконання фізичних вправ за допомогою активних рухливих ігор та пісень, вивчення тематичних дитячих пісеньок англійською мовою.', img: require('../../assets/Main/Schedule/circle.png') },
      { number: '02', title: 'Math and Logics', text: 'Розвиток логіки, уваги,зорової пам’яті, дрібної моторики рук. A також, цифрових рядів від 1-5, 1-10, 1-15, 10-25 залежно від віку дитини. Навчання додаванню та відніманню, вивчення понять “один-багато”, “більше –менше”; вивчення назв фігур, кольорів, розміру та довжини предметів.', img: require('../../assets/Main/Schedule/lesson3.png') },
      { number: '03', title: 'Letters and Sounds', text: 'Вивчення звуків і літер англійського алфавіту, збагачення словникового запасу рядами слів. Розвиток монологічного та діалогічного мовлення, Підготовка до читання та письма. Розвиток комунікативних навичок', img: require('../../assets/Main/Schedule/lesson4.png') },
      { number: '04', title: 'Letter Craft', text: 'Повторення та закріплення вивченого на уроках Letters and Sounds', img: require('../../assets/Main/Schedule/lesson4.png') },
      { number: '05', title: 'Book Corner', text: 'Читання художніх творів світових дитячих авторів та робота з книгою, виховання культури поведінки з книжками, розуміння їх цінності. Дискусії та обговорення сюжету книги, набуття і розвиток вміння вести короткий послідовний переказ її змісту .', img: require('../../assets/Main/Schedule/lesson2.png') },
      { number: '06', title: 'English Language Arts', text: 'Розвиток комунікативних навичок, закладання основ граматики шляхом невимушеного спілкування та гри, активне поповнення словникового запасу, розвиток вміння сприймати мову на слух.', img: require('../../assets/Main/Schedule/arts.png') },
      { number: '07', title: 'Story Time with Art ', text: 'Читання і робота з книгою, обговорення сюжетів книг, розвиток вміння аналізувати та передбачати події, описувати головних героїв. Вивчення нових слів за допомогою їх візуалізації ( діти виготовляють тематичні поробки після прочитання книги).', img: require('../../assets/Main/Schedule/lesson2.png') },
      { number: '08', title: 'Cooking', text: 'Дітки мають можливість відчути себе справжніми кулінарами та засвоїти нову лексику, яка включає в себе назви різних продуктів-інгредієнтів, назви кухонного обладнання, назви технік і процесів приготування.', img: require('../../assets/Main/Schedule/cook.png') },
      { number: '09', title: 'Drama play', text: 'Заняття спрямовані на розвиток уяви, фантазії, уваги, творчих здібностей і ряд пунктів акторської техніки, адаптований для дітей молодшого шкільного віку', img: require('../../assets/Main/Schedule/drama.png') },
      { number: '10', title: 'Dance', text: 'Курс занять, спрямований на розвиток координації, пластики, рухливості суглобів, еластичності м\'язів та укріплення м\'язового корсету. Діти навчаються чути музику, існувати в гармонії з нею, розвивають відчуття ритму.', img: require('../../assets/Main/Schedule/dance.png') },
      { number: '11', title: 'Group Project', text: 'Розвиток вміння працювати в команді, домовлятись і приймати спільні рішення, розвивати вміння працювати на результат внаслідок роботи над спільним проектом.', img: require('../../assets/Main/Schedule/group.png') },
      { number: '12', title: 'Smart Kid', text: 'Підготовка та навчання читанню та письма українською мовою, закладання та розвиток основ математики та логіки.', img: require('../../assets/Main/Schedule/lesson1.png') },
      { number: '13', title: 'Art', text: 'Заняття знайомлять учнів із жанрами та видами мистецтва, та його майстрами. Діти отримують змогу мислити та творити як новатори.', img: require('../../assets/Main/Schedule/lesson2.png') },
      { number: '14', title: 'Music', text: 'Дітки не лише вивчають відомі музичні твори та вчаться співати, проте ознайомлюються з нотною грамотою, музичними інструментами.', img: require('../../assets/Main/Schedule/music.png') },
      { number: '15', title: 'Французька мова', text: 'Психологи рекомендують: вивчення декількох іноземних мов впливає на інтелектуальний розвиток дитини, соціальну адаптацію та самореалізацію. У веселій та дружній атмосфері, у поєднанні гри та навчання, наші студенти набудуть ефективних мовленнєвих навичок.', img: require('../../assets/Main/Schedule/french.png') }
    ]
  })
}
</script>

<style scoped>
@media screen and (max-width: 1024px){
  .card_text {
    margin: 0 !important;
    margin-left: 200px !important;
  }
}
@media screen and (max-width: 768px){
  .card_text {
    position: center !important;
    margin: 0!important;
    left: 0 !important;
  }
  .card_text p {
    font-size: 12px;
    width: 100% !important;
  }
}
@media screen and (max-width: 425px){
  .card-row{
    height: 400px!important;
  }
  .v-card span{
    display: none;
  }
}
@media screen and (max-width: 375px){
  .card-row{
    display: flex;
    flex-direction: column;
  }
}

</style>
