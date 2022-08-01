<template>
  <v-sheet
      class="mx-auto slider"
      elevation="0"
      style="
      display: flex;
      justify-content: center;
      max-width: 1150px;
      margin-top: 70px;
    ">
      <v-slide-group
        v-model="model"
        class="pa-4 slidegroup"
        show-arrows
        style="background-color: #F4FAFF !important;"
      >
        <v-slide-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-card
            class="ma-4"
            width="170"
            elevation="0"
            style="
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            text-align: center;
            align-items: center;
            background-color: #F4FAFF !important;
          ">
            <div class="card__img" style="
            width: 165px;
            height: 230px;
            background: #FFF8F8;
            border-radius: 3px;
            display: flex;
            justify-content: center;
            align-items: center;
            filter: drop-shadow(5px 5px 5px rgba(232, 53, 66, 0.15));
          ">
              <v-img
                contain
                max-height="230"
                max-width="165"
                :src="item.img"
              ></v-img>
            </div>
            <div class="req" style="
            width: 15px;
            height: 15px;
            background: #E83542;
            border-radius: 100px;
            margin: 18px auto;
          "></div>
            <p style="
            font-weight: 500;
            font-size: 15px;
            text-align: center;
            color: #E83542;
            margin-bottom: 7px;
           ">{{item.time}}</p>
            <p>{{item.description}}</p>
          </v-card>
        </v-slide-item>
      </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  name: 'ScheduleJuniorComponent',
  data: () => ({
    model: null,
    items: [
      { img: require('../../../assets/Main/Schedule/welcome.png'), time: '08:30 - 9:00', description: 'Welcome Time' },
      { img: require('../../../assets/Main/Schedule/circle.png'), time: '9.00 - 9.15', description: 'Circle time' },
      { img: require('../../../assets/Main/Schedule/snack.png'), time: '9.15 - 9.30', description: 'Snack Time' },
      { img: require('../../../assets/Main/Schedule/lesson1.png'), time: '9.30 - 10.15', description: 'Lesson 1' },
      { img: require('../../../assets/Main/Schedule/lesson2.png'), time: '10.15 - 10.30', description: 'Lesson 2' },
      { img: require('../../../assets/Main/Schedule/lesson3.png'), time: '10.30 - 11.00', description: 'Lesson 3' },
      { img: require('../../../assets/Main/Schedule/outside.png'), time: '11.15 - 12.30', description: 'Playing outside' },
      { img: require('../../../assets/Main/Schedule/snack.png'), time: '12.30 - 13.00', description: 'Lunch' },
      { img: require('../../../assets/Main/Schedule/nap.png'), time: '13.00 - 15.00', description: 'Nap time' },
      { img: require('../../../assets/Main/Schedule/snack.png'), time: '15.15 - 15.30', description: 'Snack Time' },
      { img: require('../../../assets/Main/Schedule/outside.png'), time: '15.30 - 16. 30', description: 'Playing outside' },
      { img: require('../../../assets/Main/Schedule/lesson4.png'), time: '16.45 - 17:15', description: 'Lesson 4' },
      { img: require('../../../assets/Main/Schedule/lesson5.png'), time: '17:15 - 17:30', description: 'Lesson 5' },
      { img: require('../../../assets/Main/Schedule/snack.png'), time: '17.30 - 18.00', description: 'Dinner' },
      { img: require('../../../assets/Main/Schedule/freeTime.png'), time: '18.00 - 19.00', description: 'Free time' }
    ]
  })
}
</script>

<style scoped>
@media screen and (max-width: 1024px){
  .slider {
    width: 940px;
  }
}
@media screen and (max-width: 1024px){
  .slider {
    width: 500px;
  }
}
@media screen and (max-width: 768px){
  .slidegroup{
    padding: 0 !important;
  }
  .slider {
    width: 705px;
  }
}@media screen and (max-width: 425px){
  .slider {
    width: 305px;
  }
}
</style>
