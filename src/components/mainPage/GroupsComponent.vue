<template>
  <div class="groupsComponent">
    <h3>Гуртки</h3>
    <div class="groupsComponent__info" style="display:flex; justify-content: space-between; margin-bottom: 70px">
      <p style="width: 500px; text-align: right">Невеликі групи (до 5 осіб) дозволяють приділити максимальну увагу кожному учневі і одночасно сприяють набуттю навичок соціальної взаємодії дітей. Дошкільна підготовка дитини до школи проводиться в Києві в клубі Playroom під чуйним керівництвом наших викладачів-фахівців і дозволить дитині краще і швидше звикнути до навчання і освоїти шкільні заняття.
        Необхідною умовою комфортного і продуктивного навчання є формування груп не тільки за віком, а й за рівнем розвитку мови, мислення і пам'яті у дітей.
      </p>
      <img style="max-width: 550px" src="../../assets/Main/groups.svg" alt="">
    </div>
    <h4>1. Дошкільна підготовка</h4>
    <template>
      <v-expansion-panels>
        <v-expansion-panel
          v-for="(item,i) in panelItem"
          :key="i"
        >
          <v-expansion-panel-header style="
          box-shadow: none !important;
          background-color:#FFF8F8;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          color: #64B3F4;">
            {{ item.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content style="background-color: #F4FAFF;">
            {{ item.text }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
    <h4>2. Заняття з англійської мови</h4>
    <h4>3. Baby&me</h4>
    <p>Англомовна годинна програма для малят від 12 місяців з батьками.
      Поки не готові віддати ваше маля у садок, але думаєте долучитися до веселих, корисних занять виключно англійською мовою?
      А разом і здобути нових друзів за кавою?
      Програма розроблена за досвідом найкращих американських програм  з раннього розвитку.
      Калейдоскоп відомих англомовних пісень на розвиток мовлення, пам”яті, моторики.   Заняття через динамічний рух, дитячі ігри, веселощі та перші арт шедеври!
      Baby and me не залишить байдужими ані малят, ані вас!
      Спілкуйтеся англійською разом із вашими малюками.
      Соціальну дистанцію гарантовано</p>
    <h4>4. Dance</h4>
    <h4>5. Art</h4>
  </div>
</template>

<script>
export default {
  name: 'GroupsComponent',
  data: () => ({
    panelItem: [
      { title: 'Що вивчають діти віком від 2 до 3 років', text: 'діти починають знайомство з квітами, цифрами, буквами; розвивається мова, самовираження, з\'являються початкові вміння вирішувати проблеми; ми заохочуємо дітей вивчати пісні, виражати себе в музиці, мистецтві, приготуванні їжі, в дружній і добродушною середовищі; фізична діяльність базується на розвитку моторики, координації, вміння балансувати, в цей час перебуваючи в англомовному середовищі.' },
      { title: 'Що вивчають діти віком від 3 до 4 років', text: 'text for mid' },
      { title: 'Що вивчають діти віком від 4 до 5 років', text: 'text for sen' }
    ]
  })
}
</script>

<style scoped>
.groupsComponent{
  padding: 0 5%;
  margin: 70px auto;
  background-color: #F4FAFF;
}
.groupsComponent h3{
  display: flex;
  justify-content: flex-end;
  margin: 70px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 58px;
  color: #64B3F4;
}
.v-expansion-panel::before {
  box-shadow: none !important;
}
h4 {
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  color: #E83542;
}
@media screen and (max-width: 1024px){
  .groupsComponent__info img {
    width: 400px !important;
  }
}
@media screen and (max-width: 768px){
  .groupsComponent__info{
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  .groupsComponent__info p {
    font-size: 15px;
    margin-top: 15px;
    text-align: center !important;
  }
}
@media screen and (max-width: 425px){
  .groupsComponent__info p{
    width: auto !important;
  }
}
@media screen and (max-width: 375px){
  .groupsComponent__info img {
    width: 100% !important;
  }
}
@media screen and (max-width: 375px){
  .groupsComponent__info{
    margin-bottom: 10px !important;
  }
}
</style>
