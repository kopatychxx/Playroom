<template>
  <v-main>
    <div class="v-main__titles">
      <h2>Розклад</h2>
    </div>
    <img class="mainlanding__img" src="../assets/Main/LandingComponentImg.jpg" alt="">
    <div class="v-main__content">
      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">
              Junior
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="item in junior"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.time }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">
              Primary
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="item in primary"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.time }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <div class="v-main__img">
      <img src="../assets/Main/test.png" alt="">
      <img src="../assets/Main/test.png" alt="">
    </div>
  </v-main>
</template>

<script>
export default {
  name: 'ScheduleView',
  data () {
    return {
      junior: [
        { name: 'Welcome Time', time: '8.30 - 9.00' },
        { name: 'Circle tim', time: '9.00 - 9.15' },
        { name: 'Snack Time', time: '9.15 - 9.30' },
        { name: 'Lesson 1', time: '9.30 - 10.15' },
        { name: 'Lesson 2', time: '10.15 - 10.30' },
        { name: 'Lesson 3', time: '10.30 - 11.00' },
        { name: 'Playing outside', time: '11.15 - 12.30' },
        { name: 'Lunch', time: '12.30-13.00' },
        { name: 'Nap time', time: '13.00-15.00' },
        { name: 'Snack Time', time: '15.15. - 15.30' },
        { name: 'Playing outside', time: '15.30- 16. 30' },
        { name: 'Lesson 4', time: '16.45 -17:15' },
        { name: 'Lesson 5', time: '17:15-17:30' },
        { name: 'Dinner', time: '17.30 - 18.00' },
        { name: 'Free time', time: '18.00 - 19.00' }
      ],
      primary: [
        { name: 'Welcome Time', time: '8.30 - 9.00' },
        { name: 'Circle time', time: '9.00 - 9.15' },
        { name: 'Snack Time', time: '9.15 - 9.30' },
        { name: 'Lesson 1', time: '9.30 - 10:00' },
        { name: 'Lesson 2', time: '10:00 - 10:30' },
        { name: 'Playing outside', time: '10.30 - 11.30' },
        { name: 'Lesson 3', time: '11.30 - 12.15' },
        { name: 'Lesson 4', time: '12.30 - 13.15' },
        { name: 'Lunch', time: '13.30 - 13.45' },
        { name: 'Lesson 5', time: '14.00 - 14.45' },
        { name: 'Lesson 6', time: '15.00 - 15.30' },
        { name: 'Snack', time: '15.30 - 15.45' },
        { name: 'Playing outside', time: '15.45 - 16.15' },
        { name: 'Lesson 7', time: '16.15 - 17:30' }
      ]
    }
  }
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
  column-gap: 150px;
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
  .v-main__content{
    column-gap: 20px !important;
  }
}
@media screen and (max-width: 375px){
  .v-main__content{
    column-gap: 10px !important;
  }
}
@media screen and (max-width: 320px){
  .v-main__content{
    flex-wrap: wrap;
    row-gap: 50px;
  }
}
</style>
