<template>
  <div class="benefitsComponent">
    <div class="benefitsComponent__squares">
      <div class="benefitsComponent__square" style="border: none">
        <h3>Наші перваги</h3>
      </div>
      <div class="benefitsComponent__square">
        <v-hover v-slot="{ hover }">
            <v-img
              src="../../assets/Main/benefits/englisharound.jpg"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal text-h2 red--text"
                  style="height: 100%;"
                >
                 <p>Дитина - занурена в англомовне середовище.
                 </p>
                </div>
              </v-expand-transition>
            </v-img>
        </v-hover>
      </div>
      <div class="benefitsComponent__square">
        <p>Наш освітній підхід включає елементи <span> «RESPONSIVE CLASSROOM»</span>. Всім відомо, що успішне дитина – це щаслива дитина. Для нас надзвичайно важливо, щоб між учителем і учнем завжди відбувався діалог, щоб вони співпрацювали.</p>
      </div>
      <div class="benefitsComponent__square">
        <v-hover v-slot="{ hover }">
          <v-img
            src="../../assets/Main/benefits/games.png"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal text-h2 red--text"
                style="height: 100%;"
              >
                <p>Знаходимо баланс між структурованим навчанням та пізнавальними іграми для ваших діток.
                </p>
              </div>
            </v-expand-transition>
          </v-img>
        </v-hover>
      </div>
      <div class="benefitsComponent__square">
        <p>Дітям потрібно досягати вершин – адже їхній ключик до успіху – не боятись робити помилки. Помилки – це ще одна із можливостей навчатися.</p>
      </div>
      <div class="benefitsComponent__square">
        <v-hover v-slot="{ hover }">
          <v-img
          src="../../assets/Main/benefits/approach.png"
        >
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal text-h2 red--text"
              style="height: 100%;"
            >
              <p> Наш пріоритет – це творчий підхід.</p>
            </div>
          </v-expand-transition>
        </v-img>
        </v-hover>
      </div>
      <div class="benefitsComponent__square">
        <p>У Сполучених Штатах Америки підхід <span> «RESPONSIVE CLASSROOM»</span> був реалізований в багатьох дошкільних навчальних закладах та виявився надзвичайно ефективним. </p>
      </div>
      <div class="benefitsComponent__square">
        <v-hover v-slot="{ hover }">
          <v-img
            src="../../assets/Main/benefits/creative.png"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal text-h2 red--text"
                style="height: 100%;"
              >
                <p>Кожен вид діяльності спрямований на стимулювання креативного, творчого мислення у дитини.</p>
              </div>
            </v-expand-transition>
          </v-img>
        </v-hover>
      </div>
      <div class="benefitsComponent__square">
        <p>Він підтверджений багатьма дослідженнями, за його допомогою досягаються підвищення успішності, зменшення  проблем з поведінкою, розвиток соціальних навичок і реалізація більш якісної освіти.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BenefitsComponent'
}
</script>

<style scoped>
.benefitsComponent__squares {
  padding: 50px 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.benefitsComponent__square {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid lightgray;
}
.benefitsComponent__square h3{
  font-weight: 600;
  font-size: 50px;
  color: #64B3F4;
}
.benefitsComponent__square p {
  font-size: 15px;
  font-weight: 300;
  color: #000000;
  padding: 10px;
}
.benefitsComponent__square p span {
  font-weight: 400;
  font-size: 15px;
  color: #E83542;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .8;
  position: absolute;
  width: 100%;
}
@media screen and (max-width: 1024px){
  .benefitsComponent__squares {
    padding: 50px 5%;
  }
}
@media screen and (max-width: 320px){
  .benefitsComponent__squares {
    padding: 30px 5px;
  }
}
</style>
