<template>
  <div class="scheduleComponent" style="
    padding: 0 5%;
    background-color: #F4FAFF;
    font-family: 'Montserrat Alternates', sans-serif;
   ">
    <h2 style="
      text-align: end;
      font-style: normal;
      font-weight: 600;
      font-size: 58px;
      color: #64B3F4;
    ">Розклад дня</h2>
    <div class="tabs">
      <div class="tabs__tab" style="
        display: flex;
        justify-content: end;
      ">
        <v-btn
          class="tabs__tab-btn"
          v-bind:class="{active: firstActive}"
          @click="slider = 'Junior'; firstActive = true; secondActive = false"
        >2-3 роки</v-btn>
        <v-btn
          v-bind:class="{active: secondActive}"
          class="tabs__tab-btn"
          @click="slider = 'Middle'; secondActive = true; firstActive = false"
          style="padding: 0 0 0 16px;"
        >3-4 роки</v-btn>
      </div>
      <ScheduleJuniorComponent v-if="slider === 'Junior'"/>
      <ScheduleMiddleComponent v-else />
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
import ScheduleJuniorComponent from '@/components/mainPage/Schedule/ScheduleJuniorComponent'
import ScheduleMiddleComponent from '@/components/mainPage/Schedule/ScheduleMiddleComponent'
export default {
  name: 'ScheduleComponent',
  components: { ScheduleMiddleComponent, ScheduleJuniorComponent },
  data () {
    return {
      slider: 'Junior',
      firstActive: true,
      secondActive: false
    }
  }
}
</script>

<style scoped>
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none!important;
}
.active {
  color: #E83542 !important;
  border-bottom: 2px solid red;
  font-weight: 500 !important;
}
.tabs__tab-btn {
  background: none !important;
  box-shadow: none !important;
  border-radius: 0;
  position: relative;
}
.tabs__tab-btn:after {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: red;
  content: '';
  transition: width 0.3s ease-out;
}
.tabs__tab-btn:hover:after,
.tabs__tab-btn:focus:after {
  width: 100%; /*устанавливаем значение 100% чтобы ссылка подчёркивалась полностью*/
}
.theme--light.v-btn:hover::before {
  opacity: 0;
}
.line {
  display: block;
  position: relative;
  top: 100px;
  color: #E83542;
  content: ' ';
  width: 100px;
  height: 3px;
}
</style>
